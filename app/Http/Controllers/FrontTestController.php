<?php

namespace App\Http\Controllers;

use App\Models\FrontTest;
use Illuminate\Http\Request;

class FrontTestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        return view("frontend.home.index");
    }
    public function team(){
        return view("frontend.includes.team");
    }
    public function faq(){
        return view("frontend.includes.faq");
    }
    public function findproduct(){
        return view("frontend.products.find-products");
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
     * @param  \App\Models\FrontTest  $frontTest
     * @return \Illuminate\Http\Response
     */
    public function show(FrontTest $frontTest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FrontTest  $frontTest
     * @return \Illuminate\Http\Response
     */
    public function edit(FrontTest $frontTest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FrontTest  $frontTest
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FrontTest $frontTest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FrontTest  $frontTest
     * @return \Illuminate\Http\Response
     */
    public function destroy(FrontTest $frontTest)
    {
        //
    }
}
