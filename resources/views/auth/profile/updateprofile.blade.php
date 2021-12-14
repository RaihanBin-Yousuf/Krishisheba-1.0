@extends('backend.layouts.master')
@section('content')
<style>
    .profileimg{
  height: 100px;
   width: 100px;
  border-radius: 50%;
  }
</style>
<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="">প্রোফাইল পরিবর্তন করুন</a></li>
              <li class="breadcrumb-item active">হোম</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
</section>
<div class="container"> 
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card card-info">
                <!-- <div class="card-header">{{ __('Change Password') }}</div> -->
                <div class="card-header">{{ __('প্রোফাইল পরিবর্তন করুন') }}</div>
                <div class="card-body">
                    <form method="POST" action="{{ route('user-profile-information.update') }}">
                        @csrf
                        @method('PUT')
                        <!-- Profile Image -->
                        <div class="form-group row">
                            <label for="name" class="col-md-12 col-form-label text-center">{{ __('প্রোফাইল ছবি') }}</label>
                            <div class="col-md-12 text-center">
                                <img class="profileimg" id="updateprofileimage" src="{{asset('/storage/profile/'.auth()->user()->profile_img)}}" alt="your image"  />
                                    <br><input type='file' class="@error('profile_img') is-invalid @enderror" name="profile_img" onchange="readupdateprofileimgURL(this);" />
                            </div>
                            <!-- @error('profile_img')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                            @enderror -->
                        </div>
                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('নাম') }}</label>

                            <div class="col-md-6">
                                <input id="name" type="name" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') ?? auth()->user()->name }}" autocomplete="name" autofocus>

                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('ইমেইল') }}</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') ?? auth()->user()->email }}" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="address" class="col-md-4 col-form-label text-md-right">{{ __('বর্তমান ঠিকানা') }}</label>
                            <div class="col-md-6">
                                <input id="address" type="string" class="form-control" name="address" value="{{ old('address') ?? auth()->user()->address }}" autocomplete="address">
                            </div>
                        </div>
                        
                        <div class="mb-0 form-group row">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-info">
                                    {{ __('প্রোফাইল আপডেট করুন') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
      function readupdateprofileimgURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#updateprofileimage')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
</script>
@endsection


