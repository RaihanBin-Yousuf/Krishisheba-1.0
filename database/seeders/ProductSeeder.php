<?php

namespace Database\Seeders;
use Illuminate\Database\Seeder;
// use app\Models\Product;
use  App\Models\Product;
class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products=[
            [ "name" => "ধান", "category" => "আউশ ধান", "sub_category" => "(চান্দিনা-আউশ ধান)"], 
            [ "name" => "ধান", "category" => "বোরো ধান", "sub_category" => "(চান্দিনা-বোরো ধান)"],
            [ "name" => "ধান", "category" => "আউশ ধান", "sub_category" => "(মালা-আউশ ধান)"], 
            [ "name" => "ধান", "category" => "বোরো ধান", "sub_category" => "(মালা-বোরো ধান)"],
            [ "name" => "ধান", "category" => "আউশ ধান", "sub_category" => "(বিপ্লব-আউশ ধান)"], 
            [ "name" => "ধান", "category" => "আমন ধান", "sub_category" => "(বিপ্লব-আমন ধান)"],
            [ "name" => "ধান", "category" => "বোরো ধান", "sub_category" => "(বিপ্লব-বোরো ধান)"],
            [ "name" => "ধান", "category" => "আমন ধান", "sub_category" => "(নয়া পাজাম-আমন ধান)"],
            [ "name" => "ধান", "category" => "আউশ ধান", "sub_category" => "(নিজামী-আউশ ধান)"],
            [ "name" => "ধান", "category" => "বোরো ধান", "sub_category" => "(মঙ্গল-বোরো ধান)"],
            [ "name" => "ধান", "category" => "বোরো ধান", "sub_category" => "(শাহজালাল-বোরো ধান)"],
            [ "name" => "ধান", "category" => "বোরো ধান", "sub_category" => "(শাহী বালাম-বোরো ধান)"],
        ];
        // $products=[
        //     [ "name" => "rice", "category" => "data", "sub_category" => "summy1"], 
        //     [ "name" => "rice", "category" => "data2", "sub_category" => "dummyy2"],
            
        // ];
        foreach($products as $pro) {
            $product = new product();
            $product->name = $pro['name'];
            $product->category = $pro['category'];
            $product->sub_category = $pro['sub_category'];
            $product->save();
        }

    }
}
