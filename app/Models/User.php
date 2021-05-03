<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'mobile',
        'email',
        'role',
        'nid',
        'address',
        'birth_date',
        'password',
        'profile_img',
        'nid_front_img',
        'access_to',
        'lat',
        'lng'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getAllUsers()
    {
        $result = $this->latest()->get();
        return $result;
    }


   public function accessToAdmin($input,$id)
   {
    //    print_r($id);
    //    dd($input);
    $user = $this->updateOrCreate(['id'=>$id], $input);
    return $user;
   }
}
