<?php

namespace Database\Seeders;
use App\Models\Product;
use Illuminate\Database\Seeder;

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

            [ "name" => "ধান", "category" => "আউশ ধান","sub_category" => "চান্দিনা(আউশ ধান)"],
            [ "name" => "ধান", "category" => "বোরো ধান","sub_category" => "চান্দিনা(বোরো ধান)"],
            [ "name" => "ধান", "category" => "আউশ ধান","sub_category" => "মালা(আউশ ধান)"],
            [ "name" => "ধান", "category" => "বোরো ধান","sub_category" => "মালা(বোরো ধান)"],
            [ "name" => "ধান", "category" => "আউশ ধান","sub_category" => "বিপ্লব(আউশ ধান)"],
            [ "name" => "ধান", "category" => "আমন ধান","sub_category" => "বিপ্লব(আমন ধান)"],
            [ "name" => "ধান", "category" => "বোরো ধান","sub_category" => "বিপ্লব(বোরো ধান)"],
            [ "name" => "ধান", "category" => "আমন ধান","sub_category" => "দুলাভোগ(আমন ধান)"],
            [ "name" => "ধান", "category" => "আমন ধান","sub_category" => "ব্রিশাইল(আমন ধান)"],
            [ "name" => "ধান", "category" => "বোরো ধান","sub_category" => "ব্রি বালাম(বোরো ধান)"],
            [ "name" => "ধান", "category" => "আউশ ধান","sub_category" => "ব্রি বালাম(আউশ ধান)"],
            [ "name" => "ধান", "category" => "বোরো ধান","sub_category" => "শাহী বালাম(বোরো ধান)"],
            [ "name" => "ধান", "category" => "আমন ধান","sub_category" => "নয়া পাজাম(আমন ধান)"],
            
        ];
            foreach($products as $prod) {
            $product = new Product();
            $product->name = $prod['name'];
            $product->category = $prod['category'];
            $product->sub_category = $prod['sub_category'];
            $product->save();
        }
    }
}
