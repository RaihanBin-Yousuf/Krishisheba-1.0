<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    use HasFactory;
    protected $fillable = ['admin_id', 'payment_id', 'seller_id', 'buyer_id', 'transport_id', 'transport_charge', 'final_transport_charge', 'transport_service_fee' , 'product_name', 'total_weight', 'category', 'sub_category', 'production_type', 'packaging_method', 'is_delivered'];

    public function saveTransport($input)
    {
        $this->create($input);
    }
}
