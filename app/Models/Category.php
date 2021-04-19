<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name', 'product_id',
    ];
    public function getAll($input)
    {
       
        if (request()->dropdown) {
            $result = $this->latest()->where('product_id', $input)->get();
        } 
        return $result;
    }
}
