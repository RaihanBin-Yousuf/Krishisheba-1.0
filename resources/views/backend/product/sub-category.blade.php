
@extends('backend.layouts.master')
@section('title','Category')
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark"></h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Sub-Category Table</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

          <div class="card">
            <div class="card-header">
                <h3>Sub Category Table
                <button class="btn btn-info float-right" style="float: right;"  data-toggle="modal" data-target="#modal-default"><i class="fa fa-plus"> </i> Add SubCategory</button>
                
                </h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <!-- <th>Id </th> -->
                  <th>Name </th>
                  <th>Category id </th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>

                @foreach($subcategories as $sub_category)
                <tr>
                  <!-- <td>{{ $sub_category->id }}</td> -->
                  <td>{{ $sub_category->name }}</td>
                  <td>{{ $sub_category->sub_category->name }}</td>
                  <td>
                  	  <a href="" class="btn btn-info"> <i class="fa fa-edit"></i> </a>
                      <a href={{"deletesubcategory/".$sub_category->id }} class="btn btn-danger"> <i class="fa fa-trash"></i> </a>

                  </td>
                </tr>
                @endforeach
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>

<!--category added modal-->
      <div class="modal fade" id="modal-default">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Insert SubCategory</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body">
               <form action="{{ route('subcategories.store') }}" method="Post">
               @csrf
               <div class="form-group">
                   <label for="Category Name">Category Name </label>
                   <select class="form-control" name="category_id">
                   @foreach($category as $categories)  
                    <option value="{{$categories->id}}">{{$categories->name}}</option>     
                   @endforeach
                  </select>
                 </div>

                 <div class="form-group">
                   <label for="exampleInputEmail1">SubCategory Name </label>
                   <input type="text" class="form-control" name="name" required="">
                 </div>
                 <button type="submit" class="btn btn-info btn-block">Submit</button>
               </form>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>

@endsection
