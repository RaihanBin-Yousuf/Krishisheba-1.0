<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    use HasFactory;
    protected $fillable = ['admin_id', 'payment_id', 'seller_id', 'buyer_id', 'transport_id', 'transport_charge', 'final_transport_charge', 'transport_service_fee' , 'product_name', 'total_weight', 'category', 'sub_category', 'production_type', 'packaging_method', 'is_delivered', 'is_paid'];

    public function saveTransport($input)
    {
        $this->create($input);
    }

    public function transportListbyAdminId($adminid)
    {
        $whichAdmin = $this->where('admin_id', $adminid);
        $ispaid = $whichAdmin->whereNotIn('is_paid', ['1']);
        $isdelivered = $ispaid->whereNotIn('is_delivered', ['0']);
        return $isdelivered->with('seller','buyer','transport','payment', 'admin')->paginate(3);
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
        return $this->belongsTo(User::class,'admin_id','id');
    }

    public function buyer()
    {
        return $this->belongsTo(User::class,'buyer_id','id');
    }
    public function transport()
    {
        return $this->belongsTo(User::class,'transport_id','id');
    }

    public function payment()
    {
        return $this->belongsTo(Payment::class,'payment_id','id');
    }

    public function acceptInPayment($input)
    {
       $data = $this->updateOrCreate(['id'=>$input['id']], ['is_paid'=> '1']);
       return $data;
    }
}
