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
        <div class="row">
          <!-- left column -->
          <div class="col-md-9">
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
                        <div class="col-md-6 form-group">
                            <label for="profile_image">প্রোফাইল ছবি</label>
                            <div>
                                <img style="height: 100px; width: 100px; border-radius: 50%;" src="{{asset('/storage/profile/'.$viewadmin->profile_img)}}"/>
                            </div>
                        </div>
                    </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="exampleProductName">Name:</label>
                        <div>
                        {{$viewadmin['name']}}
                        </div>
                        
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="exampleProductCategory ">Email:</label>
                        <div>{{$viewadmin['email']}}</div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="exampleProductCategory ">Contact NO:</label>
                        <div>{{$viewadmin['mobile']}}</div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="exampleProductCategory ">ROLE:</label>
                        <div>{{$viewadmin['role']}}</div>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="exampleProductCategory ">ADDRESS:</label>
                        <div>{{$viewadmin['address']}}</div>
                      </div>
                    </div>
                    
                    <div class="col-md-4">
                      <div class="form-group">
                        <label for="exampleProductCategory ">NID NO:</label>
                        <div>{{$viewadmin['nid']}}</div>
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
                        <input type="hidden" value="{{$viewadmin['id']}}">
                        <input type="checkbox" value="1" name="access_to"/>
                      </div>
                    </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-info">Submit</button>
                </div>

              </form>
              <div>
              <form action="mailto:{{$viewadmin['email']}}" method="post" enctype="text/plain">
              <h4>MAIL FROM</h4>
              <div class="col-md-9 form-group">
                  <label for="user-name">NAME*</label>
                  <input id="name" type="text" class="form-control" name="name" value="{{$viewadmin['name']}}" autofocus>
              </div> 
              <div class="col-md-9 form-group">
                  <label for="user-name">EMAIL*</label>
                  <input id="email" type="email" class="form-control" name="email" value="{{$viewadmin['email']}}" required autocomplete="name" autofocus>
              </div> 
              <div class="col-md-9 form-group">
                  <label for="user-name">COMMENT*</label>
                  <div className="form-group">
                      <textarea className="form-control" id="description"  onChange={this.handleInputChange} rows="5" column="5"></textarea>
                  </div>
              </div>   
              <button type="submit" class="btn btn-info">Submit</button>
              </form>
              </div>
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

