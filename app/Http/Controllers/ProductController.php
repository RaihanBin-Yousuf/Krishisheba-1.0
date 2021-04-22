<?php

namespace App\Http\Controllers;
use App\Traits\CommonTrait;

use App\Models\Product;
use Illuminate\Http\Request;

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
    public function index()
    {
       
        // if (request()->ajax()) {
            $products = $this->product->getAll();
            // if(request()->dropdown) {
                // dd($products);

                return $this->sendResponse(['data'=>$products]);
            // }
            // return $this->sendResponse(['data'=>$products, 'pages' => [
            //     'total'=> $products->total(),
            //     'next_page_url' => $products->nextPageUrl(),
            //     'prev_page_url' => $products->previousPageUrl(),
            //     'last_page' 	=> $products->lastPage(),
            //     'current_page' 	=> $products->currentPage(),
            // ]]);
        // }
        // return view('backend.product.index');
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
        //
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
