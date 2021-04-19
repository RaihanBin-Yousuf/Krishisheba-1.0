<?php

namespace App\Http\Controllers;

use App\Models\Sub_Category;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{

    public function __construct(Sub_Category $sub_category)
    {
     $this->sub_category = $sub_category;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        if (request()->ajax()) {
            $sub_categoies = $this->sub_category->getAll();
            if(request()->dropdown) {
                return $this->sendResponse(['data'=>$sub_categoies]);
            }
            return $this->sendResponse(['data'=>$sub_categoies, 'pages' => [
                'total'=> $sub_categoies->total(),
                'next_page_url' => $sub_categoies->nextPageUrl(),
                'prev_page_url' => $sub_categoies->previousPageUrl(),
                'last_page' 	=> $sub_categoies->lastPage(),
                'current_page' 	=> $sub_categoies->currentPage(),
            ]]);
        }
        return view('settings.categories.index');
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
        //
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
