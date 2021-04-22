@extends('backend.layouts.master')
@section('content')
<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Product Form</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="{{route('product.index')}}">Product Information</a></li>
              <li class="breadcrumb-item active">Product Form</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <!-- left column -->
          <div class="col-md-9">
            <!-- general form elements -->
            <div class="card card-info">
            <div class="card-header">
              <a style="font-size: 25px;" class="btn btn float-left">Item Form</a>
                <a class="btn btn-outline-primary float-right" href="{{route('product.index')}}"><i class="fas fa-sign-in-alt"></i>  Items Table </a>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleProductName">Product Name</label>
                    <input type="text" class="form-control" placeholder="Enter Name">
                  </div>
                  <div class="form-group">
                    <label for="exampleProductCategory ">Product Category</label>
                    <input type="text" class="form-control" placeholder="Enter Category">
                  </div>
                  <div class="form-group">
                    <label for="exampleProductSub-Category1">Product Sub-Category</label>
                    <input type="text" class="form-control" placeholder="Enter Sub-Category">
                  </div>
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-info">Submit</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
          </div>
          <!--/.col (left) -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
@endsection

