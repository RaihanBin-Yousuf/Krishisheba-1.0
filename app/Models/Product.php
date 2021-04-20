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
       
        if (request()->dropdown) 
        {
            $result = $this->latest()->get();
        //    dd($result);
        } 
        return $result;
    }

    public function getbyProductId($input)
    {
        // dd($input);
        $product = $this->where('id', $input)->get()->first();
        return $product;
    }
}


