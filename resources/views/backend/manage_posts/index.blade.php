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
                <h3>All Post Table
                <a class="btn btn-info float-right btn-sm"  href="{{route('manage_posts.create')}}"><i class="fa fa-plus"> </i> Add </a>
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>  
                    <th>Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Address</th>
                    <th>Mobile</th>
                    <th>NID NO</th>
                    <th>Rule</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
               <tr>
                  <td>rice</td>
                  <td>boiled</td>
                  <td>eri</td>
                  <td>rice</td>
                  <td>boiled</td>
                  <td>eri</td>
                  <td>rice</td>
                  <td class="text-center py-0 align-middle">
                      <div class=" btn-group-sm">
                        <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                        <a href="#" class="btn btn-success"><i class="fas fa-edit"></i></a>
                        <a href="#" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                      </div>
                  </td>
                </tr>
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
