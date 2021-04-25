
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
                  <th>Id </th>
                  <th>Category Id </th>
                  <th>Sub Category Name </th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
              
               
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
               <form action="" method="Post">
                 <div class="form-group">
                   <label for="exampleInputEmail1">Category Id </label>
                   <input type="number" class="form-control @error('product_name') is-invalid @enderror"  name="name" required="">
                    @error('category_id')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                 </div>
                 <div class="form-group">
                   <label for="exampleInputEmail1">SubCategory Name </label>
                   <input type="text" class="form-control @error('product_name') is-invalid @enderror"  name="name" required="">
                    @error('subcategory_name')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
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
