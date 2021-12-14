
@extends('backend.layouts.master')
@section('title','Add New Admin Page')
@section('content')
<style>
    .profileimage{
  height: 100px;
  width: 100px;
  border-radius: 50%;
  }
</style>
<section><br>
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"> নিবন্ধন করুন</div>
                    <div class="card-body">
                        <form>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                <label for="profile_image">প্রোফাইল ছবি</label>
                                <div>
                                    <img class="profileimage" id="profileimage" src="{{ asset('frontend-asset/demoprofile.jpg') }}" alt="your image"  />
                                    </div>
                                    <input type='file' class="@error('profile_img') is-invalid @enderror" name="profile_img" onchange="readURL(this);" />
                                    @error('profile_img')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="user-name">নাম</label>
                                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                                        @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                </div>   
                            
                                <div class="col-md-6 form-group">
                                    <label for="mobile">মোবাইল</label>
                                    <input id="phone" type="tel" class="form-control @error('mobile') is-invalid @enderror" name="mobile" value="{{ old('mobile') }}" required autofocus>
                                        @error('mobile')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4 form-group">
                                    <label for="address">স্থায়ী ঠিকানা</label>
                                    <input id="address" type="string" class="form-control" name="address" value="{{ old('address') }}" autocomplete="address" autofocus>
                                </div>
                                <div class="col-md-4 form-group">
                                    <label for="password">পাসওয়ার্ড</label>
                                    <input id="password-field" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="**********">
                                </div>
                                <div class="col-md-4 form-group">
                                    <label for="password">User Role</label>
                                   <select class="form-control">
                                       <option value="admin">Admin</option>
                                       <option value="farmer">Farmer</option>
                                       <option value="farmer">Seller</option>
                                       <option value="farmer">Transport Owner</option>
                                   </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 form-group">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Register') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection
