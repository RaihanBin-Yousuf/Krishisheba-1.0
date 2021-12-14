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
              <li class="breadcrumb-item"><a href="#">AllAdmin</a></li>
              <li class="breadcrumb-item active">Table</li>
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
                <h3>All Admin Table
                <a class="btn btn-info float-right" href="{{route('addnewadmin')}}"><i class="fa fa-plus"> </i> Add New Admin </a>
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>  
                    <!-- <th class="text-center">Id</th> -->
                    <th class="text-center">Access Admin</th>
                    <th class="text-center">Image</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Contact</th>
                    <th class="text-center">NID NO</th>
                    <th class="text-center">Rule</th>
                    <th class="text-center">Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      @foreach($alladmin as $admins)
                      <!-- <td>{{ $admins->id }}</td> -->
                      <td>
                          @if($admins->access_to>0)
                            <input type="checkbox" checked>
                          @else
                            <input type="checkbox">
                          @endif
                      </td>
                      <td class="text-center py-0 align-middle"><img src="{{asset('storage/profile/'.$admins->profile_img)}}" style="width:50px; height:50px; border-radius:50%;"></td>
                      <td>{{ $admins->name }}</td>
                      <td>{{ $admins->email }}</td>
                      <td>{{ $admins->mobile }}</td>
                      <td>{{ $admins->nid }}</td>
                      <td>{{ $admins->role }}</td>
                      
                      <td class="text-center py-0 align-middle">
                          <div class=" btn-group-sm">
                            <a href="viewadmin/{{$admins['id']}}" class="btn btn-info"><i class="fas fa-eye"></i></a>
                            <a href={{"deleteuser/".$admins->id }} class="btn btn-danger"><i class="fas fa-trash"></i></a>
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
