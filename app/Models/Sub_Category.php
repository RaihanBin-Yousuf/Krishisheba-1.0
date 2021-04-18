<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sub_Category extends Model
{
    protected $fillable = [
        'name', 'category_id',
    ];
}
