<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories=[  
            [ "name" => "আউশ ধান", 'product_id' => 1],
            [ "name" => "আমন ধান", 'product_id' => 1],
            [ "name" => "বোরো ধান", 'product_id' => 1],
            [ "name" => "সিদ্ধ",'product_id' => 2],
            [ "name" => "আতপ", 'product_id' => 2],
            [ "name" => "আপ", 'product_id' => 2],
            [ "name" => "ফুলকপি",'product_id' => 3],
            [ "name" => "বাঁধাকপি", 'product_id' => 3],
            [ "name" => "টমেটো", 'product_id' => 3]
        ];
            foreach($categories as $cat) {
            $category = new Category();
            $category->name = $cat['name'];
            $category->product_id = $cat['product_id'];
            $category->save();
        }
    }
}


