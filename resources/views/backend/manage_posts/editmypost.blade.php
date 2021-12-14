@extends('backend.layouts.master')
@section('title','My product update page')
@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row ">
                <div class="col-md-8"><br>
                    <!-- general form elements -->
                    <div class="card card-info">
                        <div class="card-header">
                            <a style="font-size: 20px;" class="btn btn float-left">পণ্য আপডেট করুন</a>
                            <a class="btn btn-outline-info float-right" href="{{route('manage_posts.index')}}"><i class="fas fa-sign-in-alt"></i>  আমার পণ্য </a>
                        </div>
                        <div class="card-body">
                            <!-- <form method="POST" action="{{ url ('/editmypost/'.$managePost->id) }}" enctype="multipart/form-data">    
                            @csrf
                                @method('PUT') -->
                                <form method="POST" action="{{ route('updatemypost') }}" enctype="multipart/form-data">    
                                @csrf
                                <input type="hidden" name="id" value="{{$managePost->id}}">
                                <div class="row">
                                    <div class="col-md-12 form-group text-center">
                                        <label for="profile_image">পণ্যের ছবি</label>
                                        <div>
                                        <img src="{{asset('storage/posts/'.$managePost->product_image)}}" style="width:300px; height:200px;">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="exampleProductName">পণ্যের নাম:</label>
                                        <div>
                                        {{$managePost['product_name']}}
                                        </div>                     
                                    </div>
                                    </div>

                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="exampleProductCategory ">পণ্যের প্রকার:</label>
                                        <div> {{$managePost['category']}}</div>
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="exampleProductType">উৎপাদনের ধরন:</label>
                                        <div>{{$managePost['production_type']}}</div>
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="exampleProductCategory ">বাকি ওজন:</label>
                                        <!-- <div>{{$managePost['total_weight']}} {{$managePost['weight_unit']}}</div> -->
                                        <input type="number" min="0" class="form-control" name="total_weight" placeholder="{{$managePost['total_weight']}} {{$managePost['weight_unit']}}">
                                    </div>
                                    </div>
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="exampleProductCategory ">ইউনিট প্রতি মূল্য:</label>
                                        <input type="number" min="0" class="form-control" name="price_per_unit" placeholder="{{$managePost['price_per_unit']}} ">
                                    </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group" >
                                            <label for="offer_weight_unit">ওজন ইউনিট</label>
                                            <select class="form-control" name="weight_unit">
                                            <option disabled selected value="">{{$managePost['weight_unit']}}</option> 
                                            <option value="কেজি">কেজি</option>  
                                            <option value="টন">টন</option>    
                                            <option value="মেট্রিক টন">মেট্রিক টন</option>
                                            
                                            </select>
                                        </div>
                                    </div>
                                   
                                    <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="exampleProductCategory ">ছাড় মূল্য (শতকরা হার):</label>
                                        <input type="number" min="0" max="100" class="form-control" name="discount_price" placeholder="{{$managePost['discount_price']}}">
                                    </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group"> 
                                          <label for="offerexpirationdate" class="control-label"> অফার শেষ হওয়ার তারিখ</label> 
                                          <input type="date" class="form-control" id="date" placeholder="{{$managePost['offer_end_date']}} "> 
                                        </div>
                                    </div>
                                    
                                    <!-- <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="exampleProductCategory ">প্যাকেজিং পদ্ধতি:</label>
                                        <div>{{$managePost['packaging_method']}}</div>
                                    </div>
                                    </div> -->
                                    <div class="col-md-8 offset-md-8">
                                        <button type="submit" class="btn btn-info">
                                            Update Post
                                        </button>
                                    </div>
                                </div>
                            </form>
                        <div>       
                    </div>
                </div>
                <!-- /.card -->
            </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
@endsection

