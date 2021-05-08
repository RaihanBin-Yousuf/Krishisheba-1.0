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
            [ "name" => "ধান","product_img"=>"paddy-1.jpg"],
            [ "name" => "চাউল","product_img"=>"rice.jpg"],
            [ "name" => "শীতকালীন সবজি","product_img"=>"winter vegitables.jpg"],
            [ "name" => "গ্রীষ্মকালীন সবজি","product_img"=>"summer vegitable.jpg"],
            [ "name" => "গ্রীষ্মকালীন ফলমূল","product_img"=>"summer food.jpg"],
            [ "name" => "শীতকালীন ফলমূল ","product_img"=>"winter food.jpg"],
            [ "name" => "বারোমাসি ফল","product_img"=>"all time food.png"],
            [ "name" => "ফুল","product_img"=>"flowers.jpg"],
        ];
            foreach($products as $prod) {
            $product = new Product();
            $product->name = $prod['name'];
            $product->product_img = $prod['product_img'];
            $product->save();
        }
    }
}
