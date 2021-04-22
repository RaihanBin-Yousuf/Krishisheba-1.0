<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ManagePost extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id','product_name','total_weight','weight_unit',
        'price_per_unit','advance_payment','category','sub_category',
        'production_type','product_production_year','packaging_method','initial_delivery_date',
        'final_delivery_date','offer_end_date','own_vehicle','divisions',
        'district','thana','villege','comments' ,'product_image',
    ];

    public function savePost($input, $post=null)
    {
        if (empty($post)) {
            $managePost = $this->create($input);
        } else {
            $managePost = $this->updateOrCreate(['id'=>$post->id], $input);
            $managePost->save();
        }
        return $managePost;
    }
}
