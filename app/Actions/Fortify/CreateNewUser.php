<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Twilio\Rest\Client;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string'],
            // 'email' => [
            //     'required',
            //     'string',
            //     'email',
            //     'max:255',
            //     Rule::unique(User::class),
            // ],
            'password' => $this->passwordRules(),
            'role' => ['required', 'string', 'max:10'],
            'mobile' => ['required', 'string', 'min:11', 'max:11', 'unique:users'],
            'nid' => ['required', 'string', 'min:10', 'max:17', 'unique:users'],
            'profile_img' => ['nullable', 'image', 'max:2048'],
            'nid_front_img' => ['required', 'image', 'max:2048'],
            
        ])->validate();
            // dd($input);
            if(empty($input['profile_img']))
            {
                $input['profile_img']='';
            }
            else
            {
                $imageName =time().'.'.$input['profile_img']->extension();
                $input['profile_img']->storeAs('public/profile', $imageName);
                $input['profile_img'] =$imageName;
            }

            $imageName =time().'.'.$input['nid_front_img']->extension();
            $input['nid_front_img']->storeAs('public/nidcard', $imageName);
            $input['nid_front_img'] =$imageName;

            $token = "9b2f02f73409807efa2bb323ac0ac568";
            $twilio_sid = "ACafa4ae42d3b869067506ad0299c9d4bf";
            $twilio_verify_sid = "VA349a8a97c4a95d3562a227fbd07c6dd4";
            $twilio = new Client($twilio_sid, $token);
            $twilio->verify->v2->services($twilio_verify_sid)
                ->verifications
                ->create('+880'.$input['mobile'], "sms");
           

            // dd($service->sid);
            // VAaa3e7d62e7f90a06ee26084417e3ab0f
            // VAf7e7036b6c54b67436a550774013f2d3
            // exit;
            User::create([
                'name' => $input['name'],
                'role' => $input['role'],
                'nid' => $input['nid'],
                'mobile' => $input['mobile'],
                'email' => $input['email'],
                'birth_date' => $input['birth_date'],
                'address' => $input['address'],
                'password' => Hash::make($input['password']),           
                'profile_img' => $input['profile_img'],
                'nid_front_img' => $input['nid_front_img'],
                
            ]);
        return redirect()->route('verify')->with(['mobile' => $input['mobile']]);
    }
}
