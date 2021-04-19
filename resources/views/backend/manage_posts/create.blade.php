@extends('backend.layouts.master')
@section('content')
<link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div> 
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Add Product</a></li>
              <li class="breadcrumb-item active">page</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <!-- Main content -->
    <div style="padding: 0 2rem;" class="content">
        <div class="container"> <!-- <a class="btn btn-info float-right btn-sm" href="#"><i class="fa fa-list"> </i> Add New User</a> -->
            <div class="text-center">
                  <h2 style="color: #17a2b8;font-weight: bold;">নতুন পণ্য যোগ করুন</h2>
            </div><br>
            <div class="managePostCreate" id="react_manage_posts"></div>
            
            {{-- <form >
                <h4 class="h4post">পণ্য সম্পর্কে</h4>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <h7 for="commidities">পণ্য</h7>
                      <select class="form-control select2bs4" required="required">
                        <option disabled selected value="">নির্বাচন করুন</option>                        
                        <option selected value="ধান">ধান</option>
                        <option value="চাল">চাল</option>
                        <option value="গম">গম</option>
                        <option value="ভুট্টা">ভুট্টা</option>
                      </select>
                    </div>
                  </div>
                </div>
    done
                <div class="row">
                    <div class="col-md-3">
                      <div class="form-group">
                        <h7 for="">মোট ওজন* </h7>
                        <input class="form-control values-input" step="any" required="required" id="total-weight" type="number" name="" />
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="form-group" >
                        <h7 for="weight_unit">ওজন ইউনিট</h7>*
                        <select class="form-control">
                          <option disabled selected value="">নির্বাচন করুন</option>       
                          <option value="মেট্রিক টন">মেট্রিক টন</option>
                          <option value="টন">টন</option>
                          <option value="কেজি">কেজি</option>
                          <option value="কেজি">কেজি</option>
                          <option value="পিস">পিস</option>
                        </select>
                      </div>
                    </div>
      
                    <div class="col-md-3">
                      <div class="form-group">
                        <h7 for="">ইউনিট প্রতি মূল্য (৳)</h7>*
                        <input class="form-control values-input" required="required"  type="number"  />
                      </div>
                    </div>
      
                    <div class="col-md-3">
                      <div class="form-group" >
                        <h7 for="advance_paid">অগ্রিম পরিশোধ (%)*</h7>
                        <select class="form-control">
                          <option selected="selected" value="0">0 (%)</option>
                          <option value="5">5 (%)</option>
                          <option value="10">10 (%)</option>
                          <option value="15">15 (%)</option>
                          <option value="20">20 (%)</option>
                          <option value="25">25 (%)</option>
                          <option value="30">30 (%)</option>
                        </select>
                      </div>
                    </div>
                </div>
            done    
                <h4 class="h4post">পণ্যের বিবরণ</h4>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                        <h7 for="category"> পণ্যের প্রকার</h7>*
                        <select class="form-control" required="required">
                            <option disabled selected value="">নির্বাচন করুন</option>  
                            <option value="আউশ ধান">আউশ ধান</option>
                            <option value="আমন ধান">আমন ধান</option>
                            <option value="বোরো ধান">বোরো ধান</option></select>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <h7 for="sub_category">পণ্যের জাত সমূহ</h7>*
                            <select class="form-control">
                              <option disabled selected value="">নির্বাচন করুন</option>  
                              <option value="বিআর১ (চান্দিনা)">বিআর১ (চান্দিনা)</option>
                              <option value="বিআর২ (মালা">বিআর২ (মালা)</option>
                              <option value="বিআর৩ (বিপ্লব)">বিআর৩ (বিপ্লব)</option>
                              <option value="বিআর৪ (ব্রিশাইল)">বিআর৪ (ব্রিশাইল)</option>
                              <option value="বিআর৫ (দুলাভোগ)">বিআর৫ (দুলাভোগ)</option>
                              <option value="বিআর৬">বিআর৬</option>
                              <option value="বিআর৭(ব্রি বালাম)">বিআর৭(ব্রি বালাম)</option>
                              <option value="বিআর৮ (আশা)">বিআর৮ (আশা)</option>
                              <option value="বিআর৯ (সুফলা)">বিআর৯ (সুফলা)</option>
                              <option value="বিআর১৯ (মঙ্গল)">বিআর১৯ (মঙ্গল)</option>
                              <option value="বিআর২৩ (দিশারী)">বিআর২৩ (দিশারী)</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="form-group">
                            <h7>উৎপাদনের ধরন</h7>
                            <select class="form-control">
                            <option disabled selected value="">নির্বাচন করুন</option>
                            <option value="প্রচলিত উৎপাদন">প্রচলিত উৎপাদন </option>
                            <option value="জৈব উৎপাদন">জৈব উৎপাদন</option>
                            <option value="রাসায়নিক উৎপাদন">রাসায়নিক উৎপাদন</option>
                            </select>
                        </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                          <h7 for=""> ফসল উৎপাদন সাল</h7>
                          <input class="form-control" type="date"/>
                      </div>
                    </div>

                    <div class="col-md-4">
                      <div class="form-group">
                          <h7 for="">প্যাকেজিং পদ্ধতি</h7>
                          <select class="form-control">
                            <option disabled selected value="">নির্বাচন করুন</option>
                            <option disabled selected value="">নির্বাচন করুন</option>                          
                            <option value="40 কেজি ব্যাগ">40 কেজি ব্যাগ</option>
                            <option value="50 কেজি ব্যাগ">50 কেজি ব্যাগ</option>
                            <option value="1 মেট্রিক টন">1 মেট্রিক টন</option>
                            <option value="1 টন">1 টন</option>
                            <option disabled>অন্য প্যাকেজিং পদ্ধতি(মন্তব্যে উল্লেখ করুন)</option>
                          </select>
                        </div>
                    </div>
                </div>
done 
                <h4 class="h4post">অফার সম্পর্কে*</h4>
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group">
                      <div class="form-group"> 
                        <h7 for="" class="control-h7">প্রাথমিক বিতরণ তারিখ*</h7> 
                        <input type="date" class="form-control" value="" required> 
                      </div> 
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <div class="form-group"> 
                        <h7 for="finaldeliverydate" class="control-h7"> চূড়ান্ত বিতরণ তারিখ*</h7> 
                        <input type="date" class="form-control" value="" required> 
                      </div> 
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="form-group">
                      <div class="form-group"> 
                        <h7 for="" class="control-h7"> অফার শেষ হওয়ার তারিখ*</h7> 
                        <input type="date" class="form-control" id="date" value="" required> 
                      </div> 
                    </div>
                  </div>

                </div>
done 
                <h4 class="h4post">নিজস্ব যানবাহন আছে?</h4>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <input id="quotation-yes" class="quotation-btn" type="radio" name="service-quotation" value="yes" ><span class="translation_missing" title="translation missing: en.bids.show_logistic.yes">  হ্যাঁ</span>
                      <input id="quotation-no" class="quotation-btn" type="radio" name="service-quotation" value="no" checked><span class="translation_missing" title="translation missing: en.bids.show_logistic.no">  না</span>
                    </div>
                  </div>
                </div>
done
                <h4 class="h4post">আরো কিছু তথ্য দিন</h4>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <h7 class="control-h7">বিভাগ*</h7> 
                            <select name="divisions" id="divisions" required="required" class="form-control input-lg" onchange="divisionsList();" >
                              <option disabled selected value="">নির্বাচন করুন</option>
                              <option value="Barishal">বরিশাল</option>
                              <option value="Chattogram">চট্টগ্রাম</option>
                              <option value="Dhaka">ঢাকা</option>
                              <option value="Khulna">খুলনা</option>
                              <option value="Mymensingh">ময়মনসিংহ</option>
                              <option value="Rajshahi">রাজশাহী</option>
                              <option value="Rangpur">রংপুর</option>
                              <option value="Sylhet">সিলেট</option>
                            </select>
                        </div>
                    </div>

                    
                    <div class="col-md-4"> 
                      <div class="form-group">
                          <h7 class="control-h7">জেলা</h7>
                        <select class="form-control input-lg" name="" id="distr" onchange="thanaList();">
                          <option disabled selected value="">নির্বাচন করুন</option>
                        </select>
                      </div>
                    </div>
                    
                    <div class="col-md-4">
                      <div class="form-group"> 
                        <h7 for="field-5" class="control-h7">থানা</h7> 
                        <select class="form-control input-lg" name="Police Station" id="polic_sta">
                          <option disabled selected>নির্বাচন করুন</option>
                        </select>
                      </div>
                    </div>
                </div>
    done
                <div class="row">
                    <div class="col-md-4">
                      <h7 for="address" class="control-h7">গ্রাম/মহল্লা</h7> 
                      <input type="text" class="form-control" id="address" placeholder="গ্রাম/মহল্লা" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                      <div class="form-group" style="margin-top: 10px;">
                        <h4 class="h4post" for="additional_comments">সংযোজিত মন্তব্য</h4>
                        <textarea class="form-control" ></textarea>
                      </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <h4 class="h4post" for="files"> চিত্র আপলোড করুন:</h4>
                        <input type="file" id="files" name="files" multiple>                     
                      </div>
                </div>
                done
                <div class="row">
                    <div class="col-md-9" style="margin-top:20px;">
                        <div class="form-group">
                          <input name="" type="hidden" value="0" /><input class="inline-block" required="required" type="checkbox" value="1" />
                          পণ্য কেনা বেচার জন্য <a class="link-green inline-block" target="_blank" href="#">কৃষিসেবার শর্তাবলীর সাথে</a> একমত পোষণ করছি
                        </div>
                    </div>
                    <div class="col-md-3">
                        <button type="submit" class="btn btn-info btn-block">SUBMIT</button>
                    </div>
                </div>
            </form> --}}
        </div>
    </div>
    <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
    <!-- /.content -->
@endsection
<!-- Js files for this page -->
<script src="{{ asset('frontend-asset/home_page/js/main.js') }}"></script>
<script src="{{ mix('js/app.js') }}" defer></script>