<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sub_Category extends Model
{
    protected $fillable = [
        'name', 'category_id',
    ];
    public function getAll($input)
    {
       
        if (request()->dropdown) {
            $result = $result->latest()->where('category_id', $category_id)->get();  
        } 
        return $result;
    }
}

