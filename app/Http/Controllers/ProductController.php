<?php

namespace App\Http\Controllers;
use App\Traits\CommonTrait;
use App\Models\Product;
use Illuminate\Http\Request;
use DB;

class ProductController extends Controller
{
    use CommonTrait;
    public function __construct(Product $product)
    {
     $this->product = $product;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * 
     */
    public function names()
    {
        $names = $this->product->getAll();
        return view('backend.product.names',compact('names'));

    }
    public function index()
    {
        $products = $this->product->getAll();
        return $this->sendResponse(['data'=>$products]);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.product.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $data=array();
    	//  $data['name']=$request->name;
    	//  DB::table('products')->insert($data);
        $product = new Product();
    	$product->name = $request->name;
        $product->save();
           $notification=array(
                       'messege'=>'Successfully Added',
                       'alert-type'=>'success'
                        );
           return Redirect()->back()->with($notification);
    }

    public function deleteProducById($id)
	{
		$data=Product::find($id);
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
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        //
    }
}
