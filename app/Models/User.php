<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;

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
        'trade_lisence_no',
        'farmer_id_no',
        'fid_front_img',
        'vehicle_license_no',
        'access_to',
        'latitude ',
        'longitude ',
        'amount'
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


   public function accessTo($input,$id)
   {
    $user = $this->updateOrCreate(['id'=>$id], $input);
    return $user;
   }

   public function getAdmin()
   {
       return $this->where('id',request()->access_to)->get();
   }

   public function getAllTransports()
   {
       $data =$this->whereNotIn('access_to', [0,99]);
       $second = $data->where('role','transport')->get();
       return $second;
   }

   public function sendPayment($input)
   {    
        $user = $this->find($input['u_id']);
        $previous = $user->amount;
        $user->amount = $previous + $input['amount'];
        $data = $user->save();
        return $data;
   }

   public function cutPayment($input)
    {
        $authuser = $this->find(Auth::user()->id);
        $authprevious = $authuser->amount;
        $authuser->amount = $authprevious - $input['amount'];
        $data = $authuser->save();
        return $data;
    }

    public function countallUser()
    {
        $admins = $this->where('role', 'admin')->get();
        $tranports = $this->where('role', 'transport')->get();
        $buyers = $this->where('role', 'buyer')->get();
        $sellers = $this->where('role', 'seller')->get();
        $farmers = $this->where('role', 'farmer')->get();
        $data=['admin'=>$admins, 'transport'=>$tranports, 'buyer'=> $buyers, 'seller'=> $sellers, 'farmer'=> $farmers];
        return $data;
    }
}
