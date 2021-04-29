<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
class Category extends Model
{
    protected $fillable = [
        'name', 'product_id',
    ];
    public function getAll($input)
    {
        $result = $this->latest()->where('product_id', $input)->get();
        return $result;
    }

    public function getAllCategories()
    {
        $result = $this->with('product')->get();
        // dd($result);
        return $result;
    }

    public function product()
    {
        return $this->belongsTo(Product::class,'product_id','id');
    }

    public function getbyCategoryId($input)
    {
        $category = $this->where('id', $input)->get()->first();
        return $category;
    }

    public function saveCategory($input)
    {
        $category = $this->create($input);
        return $category;
    }
    
}
