@extends('backend.layouts.master')
@section('content')

<style>
.product-color{
color: #17a2b8;
font-weight: bold;
}
.subh4{
    color: #6d6d61eb;
    font-size: 20px
}
.thispahelavels{
  font-weight: 200;
}
</style>

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
        <div class="container">  
          <a class="btn btn-info float-right btn-sm" href="#"><i class="fa fa-list"> </i> Add New User</a>
            <div class="text-center">
                  <h2 class="product-color">নতুন পণ্য যোগ করুন</h2>
            </div><br>
            <form >
              <div>
                <h4 class="subh4">পণ্য সম্পর্কে</h4>
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <label1 for="">পণ্য</label1>
                      <select class="form-control select2bs4" required="required">
                        <option disabled selected value="">নির্বাচন করুন</option>                        
                        <option selected value="1">ধান</option>
                        <option value="4">চাল</option>
                        <option value="13">গম</option>
                        <option value="17">ভুট্টা</option>
                        <option value="12">কাজুবাদাম</option>
                        <option value="8">চা পাতা</option>
                      </select>
                    </div>
                  </div>
                </div>
    
                <div class="row">
                  <div class="col-md-3">
                    <div class="form-group">
                      <label1 for="">মোট ওজন* </label1>
                      <input class="form-control values-input" step="any" required="required" id="total-weight" type="number" name="" />
                    </div>
                  </div>
    
                  <div class="col-md-3">
                    <div class="form-group" >
                      <label1 for="weight_unit">ওজন ইউনিট</label1>*
                      <select class="form-control">
                        <option disabled selected value="">নির্বাচন করুন</option>       
                        <option value="MT">মেট্রিক টন</option>
                        <option value="T">টন</option>
                        <option value="KG">কেজি</option>
                      </select>
                    </div>
                  </div>
    
                  <div class="col-md-3">
                    <div class="form-group">
                      <label1 for="">ইউনিট প্রতি মূল্য (৳)</label1>*
                      <input class="form-control values-input" step="any" required="required"  type="number"  />
                    </div>
                  </div>
    
                  <div class="col-md-3">
                    <div class="form-group" >
                      <label1 id="advance-label1" for="">অগ্রিম পরিশোধ (%)*</label1>
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
               
                <h4 class="subh4">পণ্যের বিবরণ</h4>
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                        <label1 class="thispahelavels" for=""> পণ্যের প্রকার</label1>*
                        <select class="form-control" required="required">
                            <option disabled selected value="">নির্বাচন করুন</option>  
                            <option value="5">আউশ ধান</option>
                            <option value="4">আমন ধান</option>
                            <option value="25">বোরো ধান</option></select>
                        </div>
                    </div>

                    <div class="col-md-4">
                    <div class="form-group">
                        <label1>পণ্যের জাত সমূহ</label1>*
                        <select class="form-control">
                        <option disabled selected value="">নির্বাচন করুন</option>  
                        <option value="111">বিআর১ (চান্দিনা)</option>
                        <option value="136">বিআর২ (মালা)</option>
                        <option value="135">বিআর৩ (বিপ্লব)</option>
                        <option value="134">বিআর৪ (ব্রিশাইল)</option>
                        <option value="133">বিআর৫ (দুলাভোগ)</option>
                        <option value="132">বিআর৬</option>
                        <option value="131">বিআর৭(ব্রি বালাম)</option>
                        <option value="130">বিআর৮ (আশা)</option>
                        <option value="129">বিআর৯ (সুফলা)</option>
                        <option value="128">বিআর১৯ (মঙ্গল)</option>
                        <option value="54">বিআর২৩ (দিশারী)</option>
                        <option value="979">বিআর২৫ (নয়াপাজাম)</option>
                        <option value="775">ব্রি ধান২৮</option>
                        <option value="774">ব্রি ধান২৯</option>                       
                        <option value="772">ব্রি ধান৬১</option>
                        <option value="771">ব্রি ধান৬২</option>
                        <option value="770">ব্রি ধান৬৪</option>
                        <option value="769">ব্রি ধান৭৪</option>
                        <option value="768">ব্রি ধান৭৫</option>
                        <option value="767">ব্রি ধান৮৩</option>
                        <option value="400">ব্রি ধান৮৫</option>
                        <option value="112">ব্রি হাইব্রিড ধান১</option>
                        <option value="773">ব্রি ধান হাইব্রিড৩</option>
                        <option value="923">ব্রি ধান হাইব্রিড২</option>
                        </select>
                    </div>
                    </div>

                    <div class="col-md-4">
                    <div class="form-group">
                        <label1>উৎপাদনের ধরন</label1>
                        <select class="form-control">
                        <option disabled selected value="">নির্বাচন করুন</option>
                        <option value="1">প্রচলিত উৎপাদন </option>
                        <option value="3">জৈব উৎপাদন</option>
                        <option value="2">রাসায়নিক উৎপাদন</option>
                        </select>
                    </div>
                    </div>

                    <div class="col-md-4">
                    <div class="form-group">
                        <label1 for=""> ফসল উৎপাদন সাল</label1>
                        <input class="form-control" step="any" type="date"/>
                    </div>
                    </div>

                    <div class="col-md-4">
                    <div class="form-group">
                        <label1 for="">প্যাকেজিং পদ্ধতি</label1>
                        <select class="form-control">
                        <option disabled selected value="">নির্বাচন করুন</option>                          
                        <option value="800">40 কেজি ব্যাগ</option>
                        <option value="803">50 কেজি ব্যাগ</option>
                        <option value="809">1 মেট্রিক টন</option>
                        <option value="807">1 টন</option>
                        <option value="810">অন্য প্যাকেজিং পদ্ধতি(মন্তব্যে উল্লেখ করুন)</option></select>
                        </div>
                    </div>
                    </div>
                </div>
                   
    
                      
                    <h4 class="subh4">অফার সম্পর্কে*</h4>
                      <div class="row">
                        <div class="col-md-4">
                          <div class="form-group">
                            <div class="form-group"> 
                              <label1 for="" class="control-label1">প্রাথমিক বিতরণ তারিখ*</label1> 
                              <input type="date" class="form-control" id="date" value="" required> 
                            </div> 
                          </div>
                        </div>
    
                        <div class="col-md-4">
                          <div class="form-group">
                            <div class="form-group"> 
                              <label1 for="finaldeliverydate" class="control-label1"> চূড়ান্ত বিতরণ তারিখ*</label1> 
                              <input type="date" class="form-control" value="" required> 
                            </div> 
                          </div>
                        </div>
    
                        <div class="col-md-4">
                          <div class="form-group">
                            <div class="form-group"> 
                              <label1 for="" class="control-label1"> অফার শেষ হওয়ার তারিখ*</label1> 
                              <input type="date" class="form-control" id="date" value="" required> 
                            </div> 
                          </div>
                        </div>
    
                      </div>
    
                      <div class="row">
                        <div class="col-md-12">
                          <h4 class="subh4">নিজস্ব যানবাহন আছে?</h4>
                          <input id="quotation-yes" class="quotation-btn" type="radio" name="service-quotation" value="yes" ><span class="translation_missing" title="translation missing: en.bids.show_logistic.yes">  হ্যাঁ</span>
                          <input id="quotation-no" class="quotation-btn" type="radio" name="service-quotation" value="no" checked><span class="translation_missing" title="translation missing: en.bids.show_logistic.no">  না</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-6" style='margin-top: 20px'>
                          <h4 class="subh4">আরো কিছু তথ্য দিন</h4>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-4">
                         <div class="form-group"> 
                          <label1 class="control-label1">বিভাগ*</label1> 
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
                        <label1 class="control-label1">জেলা</label1> 
                        <select class="form-control input-lg" name="" id="distr" onchange="thanaList();">
                          <option disabled selected value="">নির্বাচন করুন</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-group"> 
                        <label1 for="field-5" class="control-label1">থানা</label1> 
                        <select class="form-control input-lg" name="Police Station" id="polic_sta">
                          <option disabled selected>নির্বাচন করুন</option>
                        </select>
                      </div>
                    </div>
                  </div>
    
                <div class="row">
                    <div class="col-md-4">
                      <label1 for="address" class="control-label1">গ্রাম/মহল্লা</label1> 
                      <input type="text" class="form-control" id="address" placeholder="গ্রাম/মহল্লা" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                      <div class="form-group" style="margin-top: 10px;">
                        <h4 class="subh4" for="additional_comments">সংযোজিত মন্তব্য</h4>
                        <textarea class="form-control" ></textarea>
                      </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <h4 class="subh4" for="files"> চিত্র আপলোড করুন:</h4>
                        <input type="file" id="files" name="files" multiple>                     
                      </div>
                </div>
                <div class="row">
                    <div class="col-md-9" style="margin-top:20px;">
                      <input name="" type="hidden" value="0" /><input class="inline-block" required="required" type="checkbox" value="1" />
                      পণ্য কেনা বেচার জন্য <a class="link-green inline-block" target="_blank" href="#">কৃষিসেবার শর্তাবলীর সাথে</a> একমত পোষণ করছি
                    </div>
                    <div class="col-md-3">
                        <button type="submit" class="btn btn-info btn-block">SUBMIT</button>
                    </div>
                </div>
                <br><br>
                  </div>
                </div>
              </div>
            </form>
        </div>
    </div>
    
          <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
    <!-- /.content -->
<!-- Template Main JS File -->
<script src="{{ asset('homepage-asset/home_page/js/main.js') }}"></script>

@endsection
