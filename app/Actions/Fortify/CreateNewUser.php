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
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            'role' => ['required', 'string', 'max:10'],
            'mobile' => ['required', 'string', 'min:11', 'max:11', 'unique:users'],
            'nid' => ['required', 'string', 'min:10', 'max:17', 'unique:users'],
        ])->validate();

        return User::create([
            'name' => $input['name'],
            'role' => $input['role'],
            'nid' => $input['nid'],
            'mobile' => $input['mobile'],
            // 'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);
    }
}
