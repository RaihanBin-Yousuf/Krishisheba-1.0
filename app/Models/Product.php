<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
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
}


