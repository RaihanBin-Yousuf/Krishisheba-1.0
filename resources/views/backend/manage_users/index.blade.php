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
              <li class="breadcrumb-item"><a href="#">Useres</a></li>
              <li class="breadcrumb-item active">Users Table</li>
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
                <h3>All Users Table
                <a class="btn btn-info float-right" href="{{route('users.create')}}"><i class="fa fa-plus"> </i> Add New User </a>
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>  
                    <th class="text-center">Id</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Contact</th>
                    <th class="text-center">NID NO</th>
                    <th class="text-center">Birth Date</th>
                    <th class="text-center">Address</th>
                    <th class="text-center">Rule</th>
                    <th class="text-center">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      @foreach($allusers as $users)
                      <td>{{ $users->id }}</td>
                      <td>{{ $users->name }}</td>
                      <td>{{ $users->email }}</td>
                      <td>{{ $users->mobile }}</td>
                      <td>{{ $users->nid }}</td>
                      <td>{{ $users->birth_date }}</td>
                      <td>{{ $users->address }}</td>
                      <td>{{ $users->role }}</td>
                      <td class="text-center py-0 align-middle">
                          <div class=" btn-group-sm">
                            <a href="#" class="btn btn-info"><i class="fas fa-eye"></i></a>
                            <a href="#" class="btn btn-success"><i class="fas fa-edit"></i></a>
                            <a href={{"deleteuser/".$users->id }} class="btn btn-danger"><i class="fas fa-trash"></i></a>
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
