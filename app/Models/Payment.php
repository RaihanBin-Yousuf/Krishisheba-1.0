<?php

namespace App\Models;

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
}
