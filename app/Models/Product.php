<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name','product_img'
    ];

    public function getAll()
    {
        $result = $this->latest()->get();
        return $result;
    }

    public function getbyProductId($input)
    {
        // dd($input);
        $product = $this->where('id', $input)->get()->first();
        return $product;
    }

    public function saveProduct($input)
    {
        $manageProduct = $this->create($input);
        return $manageProduct;
    }
}


