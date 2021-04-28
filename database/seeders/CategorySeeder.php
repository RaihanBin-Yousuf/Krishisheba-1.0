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
            [ "name" => "টমেটো", 'product_id' => 3],
            [ "name" => "শিম", 'product_id' => 3],
            [ "name" => "মূলা", 'product_id' => 3],
            [ "name" => "গাজর", 'product_id' => 3],

            [ "name" => "মিষ্টিকুমড়া", 'product_id' => 4],
            [ "name" => "কাঁকরোল", 'product_id' => 4],
            [ "name" => "শসা", 'product_id' => 4],
            [ "name" => "বেগুন", 'product_id' => 4],

            [ "name" => "জাম", 'product_id' => 5],
            [ "name" => "আম", 'product_id' => 5],
            [ "name" => "লিচু", 'product_id' => 5],
            [ "name" => "আমড়া", 'product_id' => 5],
            [ "name" => "কাঁঠাল", 'product_id' => 5],
            [ "name" => "আনারস", 'product_id' => 5],

            [ "name" => "বরই", 'product_id' => 6],
            [ "name" => "জলপাই", 'product_id' => 6],
            [ "name" => "কমলা", 'product_id' => 6],
            [ "name" => "জাম্বুরা", 'product_id' => 6],
            [ "name" => "সফেদা", 'product_id' => 6],

            [ "name" => "কলা", 'product_id' => 7],
            [ "name" => "তেঁতুল", 'product_id' => 7],
            [ "name" => "আঙুর", 'product_id' => 7],
            [ "name" => "মালটা", 'product_id' => 7],
            [ "name" => "পেঁপে", 'product_id' => 7],
            [ "name" => "পেয়ারা", 'product_id' => 7],
            
            [ "name" => "গোলাপ", 'product_id' => 8],
            [ "name" => "ডালিয়া", 'product_id' => 8],
            [ "name" => "অর্কিড", 'product_id' => 8],
            [ "name" => "চন্দ্রমল্লিকা", 'product_id' => 8],
            [ "name" => "গাঁদা", 'product_id' => 8],
            [ "name" => "সূর্যমুখী", 'product_id' => 8],
            [ "name" => "রজনীগন্ধা", 'product_id' => 8],
        ];
            foreach($categories as $cat) {
            $category = new Category();
            $category->name = $cat['name'];
            $category->product_id = $cat['product_id'];
            $category->save();
        }
    }
}


