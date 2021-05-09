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
              <li class="breadcrumb-item"><a href="#">Posts</a></li>
              <li class="breadcrumb-item active">Post Table</li>
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
                <h3>My Post Table
                <a class="btn btn-info float-right btn-sm"  href="{{route('manage_posts.create')}}"><i class="fa fa-plus"></i> Add Post </a>
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
                    <!-- <th>পণ্যের জাত</th> -->
                    <th>বিভাগ</th>
                    <th>জেলা</th>
                    <!-- <th>থানা</th> -->
                    <th>অ্যাকশন </th>
                  </tr>
                  </thead>
                  <tbody>

                  @foreach($data as $posts)
                      <tr>
                        <!-- <td class="align-middle">{{ $posts->user_id }}</td> -->
                        <td class="text-center py-0 align-middle"><img src="{{asset('storage/posts/'.$posts->product_image)}}" style="width:100px; height:100px; border-radius:50%;"></td>
                        <td class="align-middle">{{ $posts->product_name }}</td>
                        <td class="align-middle">{{ $posts->category }}</td>
                        <!-- <td class="align-middle">{{ $posts->sub_category }}</td> -->
                        <td class="align-middle">{{ $posts->divisions }}</td>
                        <td class="align-middle">{{ $posts->district }}</td>
                        <td class="align-middle">
                            <div class=" btn-group-sm">
                              <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href={{"deletePost/".$posts->id }} class="btn btn-danger"><i class="fas fa-trash"></i></a>

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
    @endsection
