<?php

namespace App\Http\Controllers;
use App\Traits\CommonTrait;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use CommonTrait;
    public function __construct(Category $category,Product $product,Category $AllCategories)
    {
     $this->category = $category;
     $this->product = $product;
     $this->AllCategories = $AllCategories;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        // $categories = Category::orderBy('id','ASC')->get();
        $categories = $this->AllCategories->getAllCategories();
        $product=$this->product->getAll();
        if (request()->ajax()) {
            $input=request()->product_id;
            $categories = $this->category->getAll($input);
            return $this->sendResponse(['data'=>$categories]);
        }
        return view('backend.product.category',compact('categories','product'));
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
        $category = $this->category->saveCategory($input);
        return $this->index();
    }

    public function deleteCategoryById($id)
	{
		$data=Category::find($id);
        $data->delete();

        $notification=array(
            'messege'=>'Successfully Deleted',
            'alert-type'=>'success'
             );
             return Redirect()->back()->with($notification);
	}
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        //
    }
}
