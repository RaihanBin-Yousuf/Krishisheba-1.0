<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = ['admin_accept_id', 'buyer_id', 'seller_id', 'product_name', 'total_weight', 'total_amount', 'weight_unit', 'service_fee', 'price_per_unit', 'advance_payment', 'category', 'sub_category', 'production_type', 'product_production_year', 'packaging_method', 'accept_payment'];

    public function savePayment($input)
    {
        $createPayment = $this->create($input);
        return $createPayment;
    }

    public function transportByBuyerId($buyerId)
    {
        $data = $this->where('buyer_id', $buyerId)->orderBy('id', 'desc')->first();
        // dd($data);
        return $data;
    }

    public function paymentListbyAdminId($adminId)
    {
        // $accept_payment = 1;
        
        return $this->where([['admin_accept_id' , $adminId], ['accept_payment' ,'=', '0']])->with('admin','seller','buyer')->paginate(3);
    }

    public function getDates()
    {
        return ['created_at'];
    }

    public function getCreatedAtAttribute()
    {
        return  Carbon::parse($this->attributes['created_at'])->diffForHumans();
    }


    public function seller()
    {
        return $this->belongsTo(User::class,'seller_id','id');
    }

    public function admin()
    {
        return $this->belongsTo(User::class,'admin_accept_id','id');
    }

    public function buyer()
    {
        return $this->belongsTo(User::class,'buyer_id','id');
    }

    public function acceptInPayment($input)
    {
       $data = $this->updateOrCreate(['id'=>$input['payment_id']], ['accept_payment'=> $input['accept_payment']]);
       return $data;
    }
}
