<?php

namespace App\Http\Controllers;

use App\Models\ManagePost;
use App\Models\Product;
use App\Models\Category;
use App\Models\Sub_Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ManagePostController extends Controller
{
    public function __construct(Product $product, Category $category, Sub_Category $sub_category, ManagePost $manage_post) {
        $this->product = $product;
        $this->category = $category;
        $this->sub_category = $sub_category;
        $this->manage_post = $manage_post;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(request()->ajax()) {
            if(request()->type) {
               $data = $this->manage_post->homePage();
               return $this->sendResponse($data);
            }
            if(request()->query) {
                $data = $this->manage_post->filterPage();
                // dd($data);
                return $this->sendResponse(['data'=>$data, 'pages' => [
                    'total'=> $data->total(),
                    'next_page_url' => $data->nextPageUrl(),
                    'prev_page_url' => $data->previousPageUrl(),
                    'last_page' 	=> $data->lastPage(),
                    'current_page' 	=> $data->currentPage(),
                ]]);
            }
        }
        $userId = Auth::user()->id;

        $data = ManagePost::where('user_id', $userId)->get();
        return view('backend.manage_posts.index',compact('data'));
        // return $this->sendResponse(['data'=>$data]);
        
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
        $input['user_id']=Auth::user()->id;
        $input['user_role']=Auth::user()->role;
        $product= $this->product->getbyProductId($input['product_id']);
        $input['product_name'] =$product->name;
        $category = $this->category->getbyCategoryId($input['category_id']);
        $input['category'] = $category->name;
        if($input['sub_category_id']!=0)
        {
            $sub_category = $this->sub_category->getbySubCategoryId($input['sub_category_id']);
            $input['sub_category'] = $sub_category->name;   
        }

        // dd($request->product_image);
        $imageName =time().'.'.$request->product_image->extension();
        $request->product_image->storeAs('public/posts', $imageName);
        $input['product_image'] =$imageName;
        $savePost = $this->manage_post->savePost($input);
        return $this->sendResponse(['data'=>$savePost]);

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
