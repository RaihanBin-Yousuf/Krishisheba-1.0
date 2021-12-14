@extends('frontend.home.master')
@section('title','Registration Page')
@section('home')
 <!-- ======= Top Bar and header ======= -->

@include('frontend.includes.topbar-and-header')
<section><br><br>
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">নিবন্ধন করুন</div>
                    <div class="card-body">
                        <form method="POST" action="{{ route('registration') }}" enctype='multipart/form-data'>
                            @csrf
                            <div class="row">
                                <div class="col-md-6">
                                    <label required="required" for="user_user_type">আমি একজন*</label>
                                </div>
                            </div>
                            <hr class="mt-0">
                            <div class="row">
                                <div class="col-lg-2 col-md-12 form-group">
                                    <input required="required" type="radio" value="farmer" name="role" id="user_type_farmer" />
                                    <label for="user_type_farmer">কৃষক</label>
                                </div>
                                <div class="col-lg-2 col-md-12 form-group">
                                    <input required="required" type="radio" value="seller" name="role" id="user_type_buyer" />
                                    <label for="user_type_buyer">বিক্রেতা</label>
                                </div>
                                <div class="col-lg-2 col-md-12 form-group">
                                    <input required="required" type="radio" value="buyer" name="role" id="user_type_seller" />
                                    <label for="user_type_seller">ক্রেতা</label>
                                </div>
                                <div class="col-lg-3 col-md-12 form-group">
                                    <input required="required" type="radio" value="transport" name="role" id="user_type_both" />
                                    <label for="user_type_both">পরিবহনের মালিক</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                <label for="profile_image">প্রোফাইল ছবি</label>
                                <div>
                                    <img class="profileimg" id="profileimage" src="{{ asset('frontend-asset/demoprofile.jpg') }}" alt="your image"  />
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
                                    <label for="user-name">নাম*</label>
                                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                                        @error('name')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                </div>   
                            
                                <div class="col-md-6 form-group">
                                    <label for="mobile">মোবাইল*
                                        <div class="tool-tip">
                                            <i class="tool-tip__icon-info">i</i>
                                            <p class="tool-tip__hidden-top">
                                                <span class="info">
                                                <span class="info__title">তথ্য: </span>
                                                <span class="info__text"> আপনার লেনদেনের সুবিধার্থে আপনার যে নাম্বারে বিকাশ আছে সেটি প্রদান করুন </span>
                                                </span>
                                            </p>
                                        </div>
                                    </label>
                                    <input id="phone" type="tel" class="form-control @error('mobile') is-invalid @enderror" name="mobile" value="{{ old('mobile') }}" required autofocus>
                                        @error('mobile')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="birthday">জন্ম তারিখ*</label>
                                    <input id="birthday" type="date" max='2005-01-30' class="form-control" name="birth_date" value="{{ old('birth_date') }}" autocomplete="birth_date">
                                </div>
                                <div class="col-md-6 form-group">
                                    <label for="address">স্থায়ী ঠিকানা</label>
                                    <input id="address" type="string" class="form-control" name="address" value="{{ old('address') }}" autocomplete="address" autofocus>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="user-name">ইমেইল*</label>
                                    <input id="email" type="text" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" autocomplete="email" autofocus>
                                        @error('email')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="password">পাসওয়ার্ড*</label>
                                    <em>(সর্বনিম্ন আট অক্ষরের পাসওয়ার্ড)</em>
                                    <input id="password-field" type="password" class="form-control @error('password') is-invalid @enderror" name="password" value="{{ old('password') }}" required autocomplete="new-password" placeholder="**********">
                                    <span toggle="#password-field" class="fa fa-fw fa-eye-slash fa-lg field-icon toggle-password"></span>
                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            
                                <div class="col-md-6 form-group">
                                    <label for="password-confirm">পাসওয়ার্ড নিশ্চিতকরণ *</label>
                                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="password" value="{{ old('password_confirmation') }}" placeholder="**********">
                                    <!-- <span toggle="#password-field" class="fa fa-fw fa-eye-slash fa-lg field-icon toggle-password"></span> -->
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="nid_image">এনআইডি ছবি</label>
                                    <div>
                                            <img class="nidimg" id="nidimage"/>
                                    </div>
                                    <input type='file' class="@error('nid_front_img') is-invalid @enderror" name="nid_front_img"  onchange="readnidimage(this);" />
                                    @error('nid_front_img')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                </div>

                                <div class="col-md-6 form-group">
                                        <label for="nid">এনআইডি নাম্বার*</label>
                                        <input id="nid" type="nid" class="form-control @error('nid') is-invalid @enderror" name="nid" value="{{ old('nid') }}" required placeholder="**********">
                                            @error('nid')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                </div> 
                            </div>
                            <div class="seller section" style="display:none"> 
                                <h4 class="green">শুধুমাত্র বিক্রেতাদের জন্য</h4>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                            <label for="trade_lisence_no">ট্রেড লাইসেন্স নাম্বার*</label>
                                            <input id="trade_lisence_no" type="trade" class="form-control @error('trade_lisence_no') is-invalid @enderror" name="trade_lisence_no" value="{{ old('trade_lisence_no') }}" placeholder="**********">
                                            @error('trade_lisence_no')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                    </div> 
                                </div>
                            </div>

                            <div class="transport section" style="display:none"> 
                                <h4 class="green">শুধুমাত্র পরিবহনের মালিকদের জন্য</h4>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                            <label for="Vehicle license number">গাড়ির লাইসেন্স নাম্বার</label>
                                            <input id=" lisence" type="trade" class="form-control @error('Vehicle license number') is-invalid @enderror" name="vehicle_license_no" value="{{ old('vehicle_license_no') }}" placeholder="**********">
                                            @error('Vehicle license number')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror
                                    </div> 
                                </div>
                            </div>

                           <div class="farmer section" style="display:none"> 
                                <h4 class="green">শুধুমাত্র কৃষকদের জন্য</h4>
                                <div class="row">
                                    <div class="col-md-6 form-group">
                                        <label for="fid_image">আইডি কার্ডের ছবি</label>
                                        <div>
                                            <img class="nidimg" id="fidimage"/>
                                        </div>
                                        <input type='file' class="@error('fid_front_img') is-invalid @enderror" name="fid_front_img" onchange="readfidimage(this);" />
                                        @error('fid_front_img')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div>

                                    <div class="col-md-6 form-group">
                                        <label for="farmer_id_no">আইডি কার্ডের নাম্বার*</label>
                                        <input id="farmer_id_no" type="farmer_id_no" class="form-control @error('farmer_id_no') is-invalid @enderror" name="farmer_id_no" value="{{ old('farmer_id_no') }}" placeholder="**********">
                                        @error('farmer_id_no')
                                            <span class="invalid-feedback" role="alert">
                                                <strong>{{ $message }}</strong>
                                            </span>
                                        @enderror
                                    </div> 
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-3 form-group">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('নিবন্ধন') }}
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
<script>
      function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#profileimage')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

        function readnidimage(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#nidimage')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
        function readfidimage(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#fidimage')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
</script>
@endsection
