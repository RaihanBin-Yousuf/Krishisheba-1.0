<?php

namespace App\Http\Controllers;

use App\Models\ManagePost;
use App\Models\Product;
use App\Models\Category;
use App\Models\Sub_Category;
use Illuminate\Http\Request;

class ManagePostController extends Controller
{
    public function __construct(Product $product, Category $category, Sub_Category $sub_category) {
        $this->product = $product;
        $this->category = $category;
        $this->sub_category = $sub_category;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $data=Auth::user()->role;
        return view('backend.manage_posts.index');
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.manage_posts.create');
    }
    public function store(Request $request)
    {
        $input = $request->all();
        $product= $this->product->getbyProductId($input['product_id']);
        $data['product_name'] =$product->name;
        $category = $this->category->getbyCategoryId($input['category_id']);
        $data['category'] = $category->name;
        $sub_category = $this->sub_category->getbySubCategoryId($input['sub_category_id']);
        $data['sub_category'] = $sub_category->name; 
        dd($data);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ManagePost  $managePost
     * @return \Illuminate\Http\Response
     */
    public function show(ManagePost $managePost)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ManagePost  $managePost
     * @return \Illuminate\Http\Response
     */
    public function edit(ManagePost $managePost)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ManagePost  $managePost
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ManagePost $managePost)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ManagePost  $managePost
     * @return \Illuminate\Http\Response
     */
    public function destroy(ManagePost $managePost)
    {
        //
    }
}
