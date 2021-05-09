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
              <li class="breadcrumb-item"><a href="#">buyers</a></li>
              <li class="breadcrumb-item active">buyers Table</li>
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
                <h3>Buyers Table
                <a class="btn btn-info float-right" href="{{route('users.create')}}"><i class="fa fa-plus"> </i> Add New User </a>
                </h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <table id="example1" class="table table-bordered table-striped">
                  <thead>
                  <tr>
                    <th class="text-center">Access Seller</th>
                    <th class="text-center">Image</th>
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
                      @foreach($allbuyers as $buyers)
                        <tr>               
                          <td>
                              @if($buyers->access_to>0)
                                <input type="checkbox" checked>
                              @else
                                <input type="checkbox">
                              @endif
                          </td>
                          <td class="text-center py-0 align-middle"><img src="{{asset('storage/profile/'.$buyers->profile_img)}}" style="width:50px; height:50px; border-radius:50%;"></td>
                          <td>{{ $buyers->name }}</td>
                          <td>{{ $buyers->email }}</td>
                          <td>{{ $buyers->mobile }}</td>
                          <td>{{ $buyers->nid }}</td>
                          <td>{{ $buyers->birth_date }}</td>
                          <td>{{ $buyers->address }}</td>
                          <td>{{ $buyers->role }}</td>
                          <td class="text-center py-0 align-middle">
                              <div class=" btn-group-sm">
                                <a href="viewuser/{{$buyers['id']}}" class="btn btn-info"><i class="fas fa-eye"></i></a>
                                <a href={{"deleteuser/".$buyers->id }} class="btn btn-danger"><i class="fas fa-trash"></i></a>
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
