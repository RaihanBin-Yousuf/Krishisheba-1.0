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
            [ "name" => "A1", 'category_id' => 1],
            [ "name" => "A2", 'category_id' => 1],
            [ "name" => "B1", 'category_id' => 2],
            [ "name" => "B2", 'category_id' => 2],
            [ "name" => "C1", 'category_id' => 3],
            [ "name" => "C2", 'category_id' => 3]
        ];
            foreach($sub_categories as $subcategory) {
            $sub_category = new Sub_Category();
            $sub_category->name = $subcategory['name'];
            $sub_category->category_id = $subcategory['category_id'];
            $sub_category->save();
        }
    }
}
