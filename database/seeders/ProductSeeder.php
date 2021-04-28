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
            [ "name" => "গ্রীষ্মকালীন শাকসবজি"],
            [ "name" => "গ্রীষ্মকালীন ফলমূল"],
            [ "name" => "শীতকালীন ফলমূল "],
            [ "name" => "বারোমাসি ফল"],
            [ "name" => "ফুল"],
        ];
            foreach($products as $prod) {
            $product = new Product();
            $product->name = $prod['name'];
            $product->save();
        }
    }
}
