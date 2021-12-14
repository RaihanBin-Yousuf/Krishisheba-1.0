@extends('backend.layouts.master')
@section('title','My post Details page')
@section('content')
    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-center ">
                <div class="col-md-8"><br>
                    <!-- general form elements -->
                    <div class="card card-info">
                        <div class="card-header">
                            <a style="font-size: 20px;" class="btn btn float-left">পণ্যের বিবরণ</a>
                            <a class="btn btn-outline-info float-right" href="{{route('manage_posts.index')}}"><i class="fas fa-sign-in-alt"></i>  আমার পণ্য </a>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-12 form-group text-center">
                                    <label for="profile_image">পণ্যের ছবি</label>
                                    <div>
                                    <img src="{{asset('storage/posts/'.$viewmypost->product_image)}}" style="width:200px; height:200px; border-radius:50%">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductCategory ">পণ্যের আইডি:</label>
                                    <div> {{$viewmypost['id']}}</div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductName">পণ্যের নাম:</label>
                                    <div>
                                    {{$viewmypost['product_name']}}
                                    </div>                     
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductCategory ">পণ্যের প্রকার:</label>
                                    <div> {{$viewmypost['category']}}</div>
                                </div>
                                </div>
                                
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductCategory ">পণ্যের জাত:</label>
                                    <div> {{$viewmypost['sub_category']}}</div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductType">উৎপাদনের ধরন:</label>
                                    <div>{{$viewmypost['production_type']}}</div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductCategory ">পণ্যটি বিক্রয় হয়েছে:</label>
                                    <div>{{$viewmypost['count_buy_product']}} বার</div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductCategory ">সর্বমোট বিক্রয়ের পরিমাণ:</label>
                                    <div>{{$viewmypost['weight_count']}} {{$viewmypost['weight_unit']}}</div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductCategory ">অবশিষ্ট ওজন:</label>
                                    <div>{{$viewmypost['total_weight']}} {{$viewmypost['weight_unit']}}</div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductCategory ">ইউনিট প্রতি মূল্য:</label>
                                    <div>{{$viewmypost['price_per_unit']}} taka</div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductCategory ">প্যাকেজিং পদ্ধতি:</label>
                                    <div>{{$viewmypost['packaging_method']}}</div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductCategory ">আপলোড করা হয়েছে:</label>
                                    <div>{{\Carbon\Carbon::parse($viewmypost['created_at'])->diffForHumans()}}</div>
                                </div>
                                </div>
                                <div class="col-md-4">
                                <div class="form-group">
                                    <label for="exampleProductCategory ">সর্বশেষ আপডেট:</label>
                                    <div>{{\Carbon\Carbon::parse($viewmypost['updated_at'])->diffForHumans()}}</div>
                                </div>
                                </div>
                            </div>
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

