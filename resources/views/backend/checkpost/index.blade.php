@extends('backend.layouts.master')
@section('title','All Posts')
@section('content')
<!-- Content Header (Page header) -->
<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">All</a></li>
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
                <h3>All Post Table
                <a class="btn btn-info float-right btn-sm"  href="{{route('allposts.create')}}"><i class="fa fa-plus"></i> Add Post </a>
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>  
                    <!-- <th>User Id</th> -->
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

                  @foreach($allposts as $allpost)
                      <tr>
                        <!-- <td class="text-center py-0 align-middle">{{ $allpost->user_id }}</td> -->
                        <td class="text-center py-0 align-middle"><img src="{{asset('storage/posts/'.$allpost->product_image)}}" style="width:121px; height:121px; border-radius:50%;"></td>
                        <td class="text-center py-0 align-middle">{{ $allpost->product_name }}</td>
                        <td class="text-center py-0 align-middle">{{ $allpost->category }}</td>
                        <td class="text-center py-0 align-middle">{{ $allpost->sub_category }}</td>
                        <td class="text-center py-0 align-middle">{{ $allpost->divisions }}</td>
                        <td class="text-center py-0 align-middle">{{ $allpost->district }}</td>
                         <td class="text-center py-0 align-middle">
                            <div class=" btn-group-sm">
                              <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                              <a href="#" class="btn btn-success"><i class="fas fa-edit"></i></a>
                              <a href={{"deletePost/".$allpost->id }} class="btn btn-danger"><i class="fas fa-trash"></i></a>
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
