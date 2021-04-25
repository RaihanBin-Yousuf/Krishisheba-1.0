<?php

namespace Database\Seeders;

use App\Models\Sub_Category;
use Illuminate\Database\Seeder;

class Sub_CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sub_categories=[  
            //paddy
            [ "name" => "চান্দিনা(আউশ ধান)", 'category_id' => 1],
            [ "name" => "চান্দিনা(বোরো ধান)", 'category_id' => 3],
            [ "name" => "মালা(আউশ ধান)", 'category_id' => 1],
            [ "name" => "মালা(বোরো ধান)", 'category_id' => 3],
            [ "name" => "বিপ্লব(আউশ ধান)", 'category_id' => 2],
            [ "name" => "বিপ্লব(আমন ধান)", 'category_id' => 2],
            [ "name" => "বিপ্লব(বোরো ধান)", 'category_id' => 3],
            [ "name" => "দুলাভোগ(আমন ধান)", 'category_id' => 2],
            [ "name" => "ব্রিশাইল(আমন ধান)", 'category_id' => 2],
            [ "name" => "ব্রি বালাম(বোরো ধান)", 'category_id' => 3],
            [ "name" => "ব্রি বালাম(আউশ ধান)", 'category_id' => 1],
            [ "name" => "শাহী বালাম(বোরো ধান)", 'category_id' => 3],
            [ "name" => "নয়া পাজাম(আমন ধান)", 'category_id' => 1],
            //rice
            [ "name" => "মিনিকেট", 'category_id' => 4],
            [ "name" => "স্বর্ণা-৫", 'category_id' => 4],
            [ "name" => "গুটি স্বর্ণা", 'category_id' => 4],
            [ "name" => "২৮ নং মিনিকেট", 'category_id' => 4],
            [ "name" => "২৯ নং মিনিকেট", 'category_id' => 4],
            [ "name" => "মোটা সিদ্ধ", 'category_id' => 4],
            [ "name" => "কাঠারী ", 'category_id' => 4],
            [ "name" => "বাসমতি", 'category_id' => 4],
            [ "name" => "বেতী", 'category_id' => 5],
            [ "name" => "ইরি", 'category_id' => 5],
            [ "name" => "কাঠারী ", 'category_id' => 5],
            [ "name" => "মিনিকেট", 'category_id' => 5],
            [ "name" => "২৮ নং আতপ", 'category_id' => 5],
            [ "name" => "চিনিগুড়া", 'category_id' => 5],
            [ "name" => "পাইজাম", 'category_id' => 5],
        ];
            foreach($sub_categories as $subcategory) {
            $sub_category = new Sub_Category();
            $sub_category->name = $subcategory['name'];
            $sub_category->category_id = $subcategory['category_id'];
            $sub_category->save();
        }
    }
}
