<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transport extends Model
{
    use HasFactory;
    protected $fillable = ['buyer_name','buyer_contact', 'seller_name', 'seller_contact', 'transport_name', 'transport_contact', 'product_name', 'total_weight', 'advance_payment', 'category', 'sub_category', 'production_type', 'packaging_method'];
}
