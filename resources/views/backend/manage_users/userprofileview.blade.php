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
                            <label for="profile_image">প্রোফাইল ছবি</label>
                            <div>
                                <img style="height: 100px; width: 100px; border-radius: 50%;" src="{{asset('/storage/profile/'.$viewuser->profile_img)}}"/>
                            </div>
                        </div>
                    </div>
                  <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="exampleProductName">Name:</label>
                        <div>
                        {{$viewuser['name']}}
                        </div>
                        
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleProductCategory ">Email:</label>
                        <div>{{$viewuser['email']}}</div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="exampleProductCategory ">Contact NO:</label>
                        <div>{{$viewuser['mobile']}}</div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="exampleProductCategory ">ROLE:</label>
                        <div>{{$viewuser['role']}}</div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="exampleProductCategory ">ADDRESS:</label>
                        <div>{{$viewuser['address']}}</div>
                      </div>
                    </div>
                    
                    <div class="col-md-3">
                      <div class="form-group">
                        <label for="exampleProductCategory ">NID NO:</label>
                        <div>{{$viewuser['nid']}}</div>
                      </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="nid image">এনআইডি ছবি</label>
                            <div>
                                <!-- <img style="height: 200px; width: 350px;" class="profileimg" id="profileimage" src="{{ asset('frontend-asset/nid.png') }}" alt="your image" /> -->
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
                        <input type="checkbox" value="{{$viewuser['id']}}" name="access_to"/>
                      </div>
                    </div>
                <!-- /.card-body -->
                <div>
                  <button type="submit" class="btn btn-info">Submit</button>
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
                  <form action="mailto:info@w3docs.com" method="get" enctype="text/plain">
                        <div class="card card-info">
                            <div class="card-header">
                              <a style="font-size: 20px;" class="btn btn float-left">SEND MAIL</a>                            
                              <!-- <a class="btn btn-outline-primary float-right" href="{{route('users.index')}}"><i class="fas fa-sign-in-alt"></i>  Users Table </a> -->
                              <div class="card-body">                                 
                                <div>
                                  <label for="name">Name:
                                    <input type="text" name="name" id="name" />
                                  </label>
                                </div>
                                <div>
                                  <label for="email">Email:
                                    <input type="text" name="email" id="email" />
                                  </label>
                                </div>
                                <div>
                                  <label>Comments:</label>
                                  <br />
                                  <textarea name="comments" rows="12" cols="35"></textarea>
                                </div>
                                <div>
                                  <input type="submit" name="submit" value="Send" />
                                  <input type="reset" name="reset" value="Clear Form" />
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

