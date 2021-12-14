@extends('backend.layouts.master')
@section('title','My Posts')
@section('content')
<!-- Content Header (Page header) -->
<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">হোম</a></li>
              <li class="breadcrumb-item active">আমার পণ্যের তালিকা</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- /.card -->
            <div class="card">
              <div class="card-header">
                <h3>আমার পণ্যের তালিকা
                <a class="btn btn-info float-right btn-sm"  href="{{route('manage_posts.create')}}"><i class="fa fa-plus"></i> পণ্য যুক্ত করুন </a>
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <!-- <th>My_Id</th> -->
                    <th>পণ্যের ছবি</th>
                    <th>পণ্যের নাম</th>
                    <th>পণ্যের প্রকার</th>
                    <th>অবশিষ্ট ওজন</th>
                    <th>বিক্রয়ের পরিমাণ</th>
                    <th>অ্যাকশন </th>
                  </tr>
                  </thead>
                  <tbody>

                  @foreach($data as $posts)
                      <tr>
                        <!-- <td class="align-middle">{{ $posts->user_id }}</td> -->
                        <td class="text-center py-0 align-middle"><img src="{{asset('storage/posts/'.$posts->product_image)}}" style="width:50px; height:50px; border-radius:50%;"></td>
                        <td class="align-middle">{{ $posts->product_name }}</td>
                        <td class="align-middle">{{ $posts->category }}</td>
                        <td class="align-middle">{{ $posts->total_weight }} {{ $posts->weight_unit }}</td>
                        <td class="align-middle">{{ $posts->weight_count }} {{ $posts->weight_unit }}</td>
                        <td class="align-middle">
                            <div class=" btn-group-sm">
                            <!-- <a href="#" class="btn btn-info" data-toggle="modal" data-target="#modal-default"><i class="fas fa-eye"></i></a> -->
                              <a href="viewmypost/{{$posts['id']}}" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href="{{route('manage_posts.edit',$posts->id)}}" class="btn btn-primary"><i class="fas fa-pen-alt"></i></a>
                              <a href={{'deleteUserPost/'.$posts->id }} class="btn btn-danger"><i class="fas fa-trash"></i></a>
                            </div>
                        </td>
                    </tr>
                  @endforeach
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    <!-- /.content -->
    <!-- /.content -->
    @endsection