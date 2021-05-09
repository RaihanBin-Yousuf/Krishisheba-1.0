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
    public function filterPage()
    {
        if(request()->byProductName) {
            $productName = request()->byProductName;
            return $this->where('product_name', $productName)->get();
        }
    }

    public function getAll()
    {
        return $this->latest()->get();
        // dd($Post);
    }

    public function homePage()
    {  
        if(request()->type == "feature") {
           $feature = $this->skip(0)->take(10)->get();
            $onSale = $this->skip(10)->take(10)->get();
            $newArrival = $this->skip(20)->take(10)->get();
        }
        $data = ['feature'=>$feature, 'sale'=>$onSale, 'new'=>$newArrival];
        return $data;
    }

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
