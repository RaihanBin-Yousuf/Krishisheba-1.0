@extends('backend.layouts.master')
@section('content')
<!-- Content Header (Page header) -->
<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">My</a></li>
              <li class="breadcrumb-item active">Posts Table</li>
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
                <h3>Post Table
                <a class="btn btn-info float-right btn-sm"  href="{{route('manage_posts.create')}}"><i class="fa fa-plus"></i> Add Post </a>
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr> 
                    <th>Product Image</th> 
                    <th>Product Name</th>
                    <th>category</th>
                    <th>Sub Category</th>
                    <th>divisions</th>
                    <th>district</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>

                  @foreach($data as $posts)
                      <tr>
                      <td class="text-center py-0 align-middle"><img src="{{asset('storage/posts/'.$posts->product_image)}}" style="width:121px; height:121px; border-radius:50%;"></td>
                        <td class="text-center py-0 align-middle">{{ $posts->product_name }}</td>
                        <!-- <td>{{ Storage::url('/posts/'.$posts["product_image"]) }}</td> -->
                        <td class="text-center py-0 align-middle">{{ $posts->category }}</td>
                        <td class="text-center py-0 align-middle">{{ $posts->sub_category }}</td>
                        <td class="text-center py-0 align-middle">{{ $posts->divisions }}</td>
                        <td class="text-center py-0 align-middle">{{ $posts->district }}</td>
                         <td class="text-center py-0 align-middle">
                            <div class=" btn-group-sm">
                              <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-edit"></i></a>
                              <a href="#" class="btn btn-danger"><i class="fas fa-trash"></i></a>
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
