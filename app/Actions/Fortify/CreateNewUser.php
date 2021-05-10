<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

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
        return User::create([
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
    }
}
