@extends('backend.layouts.master')
@section('content')

<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="{{route('users.index')}}">Admin</a></li>
              <li class="breadcrumb-item active">profile</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <div class="row ">
          <!-- left column -->
          <div class="col-md-6">
            <!-- general form elements -->
            <div class="card card-info">
              <div class="card-header">
              <a style="font-size: 20px;" class="btn btn float-left">Admin Profile</a>
                <!-- <a class="btn btn-outline-primary float-right" href="{{route('users.index')}}"><i class="fas fa-sign-in-alt"></i>  Users Table </a> -->
              </div>
              <!-- /.card-header -->
              <!-- form start -->

                <div class="card-body">
                    <div class="row">
                        <div class="col-md-12 form-group text-center">
                            <label for="profile_image">Profile Picture</label>
                            <div>
                                <img style="height: 150px; width: 150px; border-radius: 50%;" src="{{asset('/storage/profile/'.$viewadmin->profile_img)}}"/>
                            </div>
                        </div>
                    </div>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="exampleProductName">Name:</label>
                        <div>
                        {{$viewadmin['name']}}
                        </div>
                        
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleProductCategory ">Email:</label>
                        <div>{{$viewadmin['email']}}</div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="exampleProductCategory ">Contact NO:</label>
                        <div>{{$viewadmin['mobile']}}</div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="exampleProductCategory ">ROLE:</label>
                        <div>{{$viewadmin['role']}}</div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleProductCategory ">ADDRESS:</label>
                        <div>{{$viewadmin['address']}}</div>
                      </div>
                    </div>
                    
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="exampleProductCategory ">NID NO:</label>
                        <div>{{$viewadmin['nid']}}</div>
                      </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="nid image">এনআইডি ছবি</label>
                            <div>
                                <img style="height: 200px; width: 350px;" class="nidimg" src="{{asset('/storage/nidcard/'.$viewadmin->nid_front_img)}}" alt="nid image" />
                                <!-- <img style="height: 200px; width: 350px;" class="profileimg" id="profileimage" alt="your image" /> -->
                              </div>
                        </div>
                    </div>
              
                </div>
                <form action="{{ route('users.store') }}" method="Post">
                    @csrf
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="exampleProductCategory ">ACCESS TO:</label>
                        <input type="checkbox" value="{{$viewadmin['id']}}" name="access_to"/>
                      </div>
                    </div>
                <!-- /.card-body -->
                <div>
                  <button type="submit" class="btn btn-info btn-lg">Submit</button>
                </div>
              </form>
              <div>       
              </div>
            </div>
            <!-- /.card -->
          </div>
          <!--/.col (left) -->
        </div>
          <div class="row float right">
              <div class="col-md-12">
                  <form action="mailto:{{$viewadmin['email']}}" method="post" enctype="text/plain">
                        <div class="card card-info">
                            <div class="card-header">
                              <a style="font-size: 20px;" class="btn btn float-left">SEND MAIL</a>                            
                              <!-- <a class="btn btn-outline-primary float-right" href="{{route('users.index')}}"><i class="fas fa-sign-in-alt"></i>  Users Table </a> -->
                              <div class="card-body">                                 
                                <div>
                                  <label for="name">Name:
                                    <input type="text" name="name" id="name" value="{{$viewadmin['name']}}" />
                                  </label>
                                </div>
                                <div>
                                  <label for="email">Email:
                                    <input type="text" name="email" id="email" value="{{$viewadmin['email']}}" />
                                  </label>
                                </div>
                                <div>
                                  <label>Comments:</label>
                                  <br />
                                  <textarea name="comments" rows="12" cols="35"></textarea><br>
                                  <input type="submit" value="Send">
                                  <input type="reset" value="Reset">
                                </div>
                              </div>
                            </div>
                        </div>
                  </form>
              </div>
          </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
@endsection

