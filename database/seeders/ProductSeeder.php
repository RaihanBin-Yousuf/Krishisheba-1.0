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
            [ "name" => "ধান"],
            [ "name" => "চাউল"],
            [ "name" => "শীতকালীন সবজি"],

            // [ "name" => "চান্দিনা(আউশ ধান)", 'product_id' => 1],
            // [ "name" => "চান্দিনা(বোরো ধান)", 'product_id' => 3],
            // [ "name" => "মালা(আউশ ধান)", 'product_id' => 1],
            // [ "name" => "মালা(বোরো ধান)", 'product_id' => 3],
            // [ "name" => "বিপ্লব(আউশ ধান)", 'product_id' => 2],
            // [ "name" => "বিপ্লব(আমন ধান)", 'product_id' => 2],
            // [ "name" => "বিপ্লব(বোরো ধান)", 'product_id' => 3],
            // [ "name" => "দুলাভোগ(আমন ধান)", 'product_id' => 2],
            // [ "name" => "ব্রিশাইল(আমন ধান)", 'product_id' => 2],
            // [ "name" => "ব্রি বালাম(বোরো ধান)", 'product_id' => 3],
            // [ "name" => "ব্রি বালাম(আউশ ধান)", 'product_id' => 1],
            // [ "name" => "শাহী বালাম(বোরো ধান)", 'product_id' => 3],
            // [ "name" => "নয়া পাজাম(আমন ধান)", 'product_id' => 1],
            
        ];
            foreach($products as $prod) {
            $product = new Product();
            $product->name = $prod['name'];
            $product->save();
        }
    }
}
