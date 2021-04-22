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
            // dd($input);
            $result = $this->latest()->where('category_id', $input)->get();
            // dd($result);

        return $result;
    }

    public function getbySubCategoryId($input)
    {
        $sub_category = $this->where('id', $input)->get()->first();
        return $sub_category;
    }
}

