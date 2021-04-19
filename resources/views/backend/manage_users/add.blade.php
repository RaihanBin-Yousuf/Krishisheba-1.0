@extends('backend.layouts.master')
@section('content')
<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="{{route('users.index')}}">User Information</a></li>
              <li class="breadcrumb-item active">User Form</li>
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
              <a style="font-size: 20px;" class="btn btn float-left">Users Form</a>
                <a class="btn btn-outline-primary float-right" href="{{route('users.index')}}"><i class="fas fa-sign-in-alt"></i>  Users Table </a>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form>
                <div class="card-body">
                  <div class="row">
                      <div class="col-md-12">
                        <label for="user_user_type">আমি একজন*</label>
                      </div>
                  </div>
                  <hr class="mt-0">
                  <div class="row">
                    <div class="col-lg-3 col-md-12 form-group">
                      <input required="required" type="radio" value="buyer" name="user[user_type]" id="user_user_type_buyer">
                      <label for="user_user_type_buyer">বিক্রেতা</label>
                    </div>
                    <div class="col-lg-3 col-md-12 form-group">
                      <input required="required" type="radio" value="seller" name="user[user_type]" id="user_user_type_seller">
                      <label for="user_user_type_seller">ক্রেতা</label>
                    </div>
                    <div class="col-lg-3 col-md-12 form-group">
                      <input required="required" type="radio" value="transport" name="user[user_type]" id="user_user_type_both">
                      <label for="user_user_type_both">পরিবহনের মালিক</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleProductName">Name</label>
                        <input type="text" class="form-control" placeholder="Enter Name" required="required">
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleProductCategory ">Email</label>
                        <input type="email" class="form-control" placeholder="Enter Email" required="required">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleProductCategory ">Contact NO</label>
                        <input type="number" class="form-control" placeholder="Enter Contact NO" required="required">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleProductCategory ">NID</label>
                        <input type="number" class="form-control" placeholder="Enter NID" max="12" required="required">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleProductCategory ">Birth Date</label>
                        <input type="date" class="form-control" placeholder="Enter Birth Date" required="required">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleProductCategory ">Address</label>
                        <input type="address" class="form-control" placeholder="Enter Address" required="required">
                      </div>
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

