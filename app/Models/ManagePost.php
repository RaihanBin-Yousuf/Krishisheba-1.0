<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use App\Abstracts\Model;


class ManagePost extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id', 'user_role','product_name','total_weight','weight_unit',
        'price_per_unit','advance_payment','category','sub_category',
        'production_type','product_production_year','packaging_method','initial_delivery_date',
        'final_delivery_date','offer_end_date','own_vehicle','divisions',
        'district','thana','villege','comments' ,'product_image','discount_price', 'count_buy_product'
    ];
    public function filterPage()
    {
        if(request()->query) {
            // $data = request()->query;
            $data = request()->all();
            $objData = json_decode($data['query']);// convert string into object
            $arrData = (array)$objData; //convert object into array
            $result = array_filter($arrData); //remove empty value in array
            // dd($result);

            if($arrData['start_price'] && empty($arrData['end_price'])) {
                // echo "start price";
                // print_r($result['start_price']);
                unset($result['start_price']);
                // dd($result);
                return $this->where($result)->where('price_per_unit','>=',$arrData['start_price'])->paginate(6);
                // exit;
            } else if($arrData['end_price'] && empty($arrData['start_price'])) {
                // echo "end price";
                // print_r($result['end_price']);
                // exit;
                unset($result['end_price']);
                return $this->where($result)->where('price_per_unit','<=',$arrData['end_price'])->paginate(6);

            } else if($arrData['start_price'] && $arrData['end_price']) {
                // echo "find both";
                // exit;
                unset($result['start_price']);
                unset($result['end_price']);
                // return $this->where($result)->where('price_per_unit','BETWEEN',$arrData['start_price'],'AND',$arrData['end_price'])->paginate(6);
                return $this->where($result)->whereBetween('price_per_unit', [$arrData['start_price'], $arrData['end_price']])->paginate(6);

            } else {
                // dd($result);
                return $this->where($result)->paginate(6);

            }
            return $this->where($result)->paginate(6);
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
           $feature = $this->latest()->take(10)->get();
        //    dd($feature);
            $onSale = $this->orderBy('count_buy_product', 'desc')->take(10)->get();
            $discount = $this->where('discount_price','>','0')->take(10)->get();
            $farmerlist = $this->where('user_role', 'farmer')->get();
        }
        $data = ['feature'=>$feature, 'sale'=>$onSale, 'new'=>$discount, 'farmer'=> $farmerlist];
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

    public function updatePost($input, $id)
    {
        
        $managePost = $this->updateOrCreate(['id'=>$id], $input);
        $managePost->save();
        return $managePost;
    }


}
