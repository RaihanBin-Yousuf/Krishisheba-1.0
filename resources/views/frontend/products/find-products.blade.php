@extends('frontend.home.master')
@section('home')
 <!-- ======= Top Bar and header ======= -->

 @include('frontend.includes.topbar-and-header')

 <!-- =======End Top Bar and header ======= -->


<div class="content">
	<div id="product-family__div" class="container-commodity">
		<div class="container">
		</br></br>
		<h2 class="commodity__title white">কেনার জন্য একটি পণ্য নির্বাচন করুন</h2>
		<div class="family-button__div">
		<button id="button_1" 
		type="button" 
		class="family__button" 
		onClick="familyButtonClick([1, 2, 3, 5], '1')">
		<img class="family__white-circle" src="{{ asset('frontend-asset/market/icons/Agroimp__0017_cerealsb4c3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=1669b47b71de2e48a475a1841f1f220a6aca8f7cf5208894d02c002624eecb8b') }}" alt="786d4fafae0d05be446f8777d717dcc7" />
		শস্য
		</button> 

		<button id="button_2" 
		type="button" 
		class="family__button" 
		onClick="familyButtonClick([1, 2, 3, 5], '2')">
		<img class="family__white-circle" src="{{ asset('frontend-asset/market/icons/Agroimp__0016_nuts28f11.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=3d5b9638cf6998aab15d7314745fb6953c33605017dd817c1f1296926b04dcc4') }}" alt="3381c880c95e5690ddb81c7b8d12eae4" />
        ফুল
		
	    </button> 

		<button id="button_3" 
		type="button" 
		class="family__button" 
		onClick="familyButtonClick([1, 2, 3, 5], '3')">
		<img class="family__white-circle" src="{{ asset('frontend-asset/market/icons/Agroimp__0009_coffee2b52.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=317282848525cd416ec4399f447f4f2408a7d748dab4b460d0f8319427d30d86') }}" alt="D48f6971502cf70138d938cd80cbea9a" />
		শাকসবজি
	    </button> 

		<button id="button_5" 
		type="button" 
		class="family__button" 
		onClick="familyButtonClick([1, 2, 3, 5], '5')">
		<img class="family__white-circle" src="{{ asset('frontend-asset/market/icons/Azeite23c0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=265e491d4c1b93d0ab12b87dc34eac31893aeb44ce9fcd21a15a0540bd1c28ae') }}" alt="B06c0c8d2abf53da897c36716ebaccf6" />
		ফলমূল
		</button> 

</div>

<hr class="hr_separator">

<div id="product_1" class="col-md-12 d-none">
	<a href="{{ route('paddy.index') }}">  
	<div class="col-md-2">
		<div class="circle-white--big">
			<img class="product-img-big" src="{{ asset ('frontend-asset/market/icons/Agroimp__0017_cerealsf69c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=f2f5d468dbbeaf38f37cd69eb85d41b4180d571e8d552647b9ae2e1e9112da5b') }}" alt="1bff36c19728eb694011bf6a5ace32a5" />
			<p class="product__text__services">ধান</p>
		</div>
	</div>
</a>

<a href="products/চাল/filter.html">
<div class="col-md-2">
	<div class="circle-white--big">
		<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/Barleyaf6c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=4f98e95cc4ad1131173b38000a255bd481cd4c8eb876db52e875f98023011aac') }}" alt="8f76dcc85e5b3391b78cf5b8d1b6eaa2" />
		<p class="product__text__services">চাল</p>
	</div>
</div>
</a>

<a href="products/গম/filter.html">
	<div class="col-md-2">
		<div class="circle-white--big">
			<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/2591fa81cf29ff7bd588c662fd620b1e0637.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=7c80c7d7ab98b016bea33ab6280543d68f2b56e8a3b8f3da7ff97b31475fc074') }}" alt="2591fa81cf29ff7bd588c662fd620b1e" />
			<p class="product__text__services">গম</p>
		</div>
	</div>
	</a>
</div>




<div id="product_2" class="col-md-12 d-none">
	<a href="products/গোলাপ/filter.html">
	<div class="col-md-2">
		<div class="circle-white--big">
			<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/rose_PNG67024.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=c91afec5c8d6f5efdf15632216e97780b33a45f755d3a70d2e367af48a26d673') }}" alt="90bc7532d5fc281124569e8c7bd43f97" />
			<p class="product__text__services">গোলাপ</p>
		</div>
	</div>
</a>	


<a href="products/ডালিয়া/filter.html">
<div class="col-md-2">
	<div class="circle-white--big">
		<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/ecf0d562-7f7a-49eb-9e21-4a2941d23cb2_1.9e22381afe73377a79f274fc51a26bff.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=8bf1131b25e8145168ea43c893ee108285a3bf4b7ca6f053929f093dda36462f') }}" alt="7cfff81b5ebb9d119cf8fd5dd9167818" />
		<p class="product__text__services">ডালিয়া</p>
	</div>
</div>
</a>

<a href="products/অর্কিড/filter.html">
<div class="col-md-2">
	<div class="circle-white--big">
		<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/d313f0236585ab4cdf6a8f82a590920d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=b0dd26710eae73aeb74868211015851b9afe39107581ba594435c7507657167b') }}" alt="915fc1a8c3ec3ca36827b61a1ee3fc99" />
		<p class="product__text__services">অর্কিড</p>
	</div>
</div>
</a>	

<a href="products/চন্দ্রমল্লিকা/filter.html">
<div class="col-md-2">
	<div class="circle-white--big">
		<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/chirusthyum-500x500.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=f0b9b55bfad04f93feea384003b7106fdf71c2398d176efadc65c70d0ea22479') }}" alt="D2663088252e544a8934d0aa7d4b25f7" />
		<p class="product__text__services">চন্দ্রমল্লিকা</p>
	</div>
</div>
</a>




<a href="products/গাঁদা/filter.html">		
<div class="col-md-2">
	<div class="circle-white--big">
		<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/29091-5-marigold-transparent-thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=ad04e15385f856ac91e7240b0bdf968e239a3feaddad501751175ac16b9487a3') }}" alt="94e90abde9c4b9796f405ddbf09685c0" />
		<p class="product__text__services">গাঁদা</p>
	</div>
</div>
</a>


<a href="products/সূর্যমুখী/filter.html">		
<div class="col-md-2">
	<div class="circle-white--big">
		<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/sunflower_PNG13409.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=f393a538657dacb9137af6150ace596a20ee761d9fbd69ab5ba7269dc954f766') }}" alt="1582e7eb54ab2af78ab0666e53fb970e" />
		<p class="product__text__services">সূর্যমুখী</p>
	</div>
</div>
</a>

<a href="products/রজনীগন্ধা/filter.html">
<div class="col-md-2">
	<div class="circle-white--big">
		<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/tuberose.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=f393a538657dacb9137af6150ace596a20ee761d9fbd69ab5ba7269dc954f766') }}" alt="1582e7eb54ab2af78ab0666e53fb970e" />
		<p class="product__text__services">রজনীগন্ধা</p>
	</div>
</div>
</a>			
</div>



<div id="product_3" class="col-md-12 d-none">

	<a href="products/গ্রীষ্মকালীন শাকসবজি/filter.html">
	<div class="col-md-2">
		<div class="circle-white--big">
			<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/fresh-vegetables_181303-2392.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=f36eead52fb4bc3d7cb65b5c0864a5356c3d088fe2e437e48bb00baf32e1df70') }}" alt="76ba659c9b1b929e5b912b4d64741828" />
			<p class="product__text__services">গ্রীষ্মকালীন শাকসবজি</p>
		</div>
	</div>
</a>


<a href="products/শীতকালীন শাকসবজি/filter.html">		
<div class="col-md-2">
	<div class="circle-white--big">
		<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/fresh-vegetables_181303-1579.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=cd2f9a9bf94f1e1a8c278763848911594e20c5ea9893640759c655af3cc322e9') }}" alt="E395140250e47327a509b6b7eb26c654" />
		<p class="product__text__services">শীতকালীন শাকসবজি</p>
	</div>
</div>
</a>
</div>


<div id="product_5" class="col-md-12 d-none">

	<a href="products/গ্রীষ্ম ফল/filter.html">
	<div class="col-md-2">
		<div class="circle-white--big">
			<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/fruit_vector_286991.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=f36eead52fb4bc3d7cb65b5c0864a5356c3d088fe2e437e48bb00baf32e1df70') }}" alt="76ba659c9b1b929e5b912b4d64741828" />
			<p class="product__text__services">গ্রীষ্মকালীন ফলমূল</p>
		</div>
	</div>
</a>

<a href="products/শীত ফল/filter.html">
	<div class="col-md-2">
		<div class="circle-white--big">
			<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/4-2-fruit-png-image-thumb.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=2eb6699dc92cb80b8b7bedc4c3a4f5dcefc513fd566b0e35dca7b7a36203f3e8') }}" alt="F52b518514d2dfcf258e3be6d852668b" />
			<p class="product__text__services">শীতকালীন ফলমূল </p>
		</div>
	</div>
</a>

<a href="products/বারোমাসি ফল/filter.html">
	<div class="col-md-2">
		<div class="circle-white--big">
			<img class="product-img-big" src="{{ asset('frontend-asset/market/icons/fruits-png-image-fruits-png-image-download-39.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJWG275EEAJRI5EDQ%2F20201129%2Feu-central-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20201129T172307Z&amp;X-Amz-Expires=900&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=2eb6699dc92cb80b8b7bedc4c3a4f5dcefc513fd566b0e35dca7b7a36203f3e8') }}" alt="F52b518514d2dfcf258e3be6d852668b" />
			<p class="product__text__services">বারোমাসি ফল</p>
		</div>
	</div>
</a>

</div>

<hr class="hr_bottom">

</div>
<div class="btn__container">
	<div class="container-banner-talk-us-label commodity-text">আপনি যে পণ্যটি সন্ধান করছেন তা খুঁজে পাচ্ছেন না?</div>
	<button class="btn-talk-to-us"><a class="green" href="mailto:krishisheva@gmail.com">TALK TO US</a>
	</button>
</div>
</div>
</div>

<!-- ======= Footer ======= -->

@include('frontend.includes.footer')

<!-- End Footer -->
  @endsection