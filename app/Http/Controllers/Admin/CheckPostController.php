<?php

namespace App\Http\Controllers\Admin;

use App\Models\ManagePost;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class CheckPostController extends Controller
{
    public function __construct(ManagePost $manage_post) {
        $this->manage_post = $manage_post;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        // $allposts = ManagePost::where('product_name','চাউল')->get();
        // return view('backend.checkpost.index',compact('allposts'));
        // $allposts = $this->manage_post->getAll();
        $allposts = ManagePost::orderBy('id','ASC')->get();
        return view('backend.checkpost.index',compact('allposts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.checkpost.create');
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data=ManagePost::find($id);
        $data->delete();

        $notification=array(
            'messege'=>'Post Data Successfully Deleted',
            'alert-type'=>'success'
             );
             return Redirect()->back()->with($notification);
    }
}