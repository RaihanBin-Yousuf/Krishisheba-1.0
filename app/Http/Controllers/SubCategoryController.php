<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Sub_Category;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{

    public function __construct(Sub_Category $sub_category,Category $category)
    {
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
        $subcategories = Sub_Category::orderBy('id','ASC')->get();
        $category=$this->category->getAllCategories();
       
        if (request()->ajax()) {
            $input=request()->category_id;
            $sub_categories = $this->sub_category->getAll($input);
            return $this->sendResponse(['data'=>$sub_categories]);
        }
        return view('backend.product.sub-category',compact('subcategories','category'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();
        $subcategory = $this->subcategory->saveSubCategory($input);
        return $this->index();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sub_Category  $sub_Category
     * @return \Illuminate\Http\Response
     */
    public function show(Sub_Category $sub_Category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sub_Category  $sub_Category
     * @return \Illuminate\Http\Response
     */
    public function edit(Sub_Category $sub_Category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sub_Category  $sub_Category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sub_Category $sub_Category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sub_Category  $sub_Category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sub_Category $sub_Category)
    {
        //
    }
}
