@php
   $prefix = Request::route()->getPrefix();
   $route = Route::current()->getName();
 @endphp
 <!-- <a href="index3.html" class="brand-link">
      <img src="backend-asset/logo.jpg" alt="krishisheva Logo" style="width:40px; height:40px; border-radius:50%;">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a> -->
<div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 ">
        <div class="text-center">
          <h4 class="text-white"> {{ Auth::user()->name }}</h4>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

       <!-- Sidebar Menu -->
       <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->

                @if(auth()->user()->role == 'admin' or auth()->user()->role == 'sadmin' )
                <li class="nav-item">
                  <a href="{{route('dashboard')}}" class="nav-link {{($route=='dashboard') ?'active':''}}">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                    Dashboard
                    </p>
                  </a>
                </li>
                @endif

                <!-- Super Admin Access -->
                @if(auth()->user()->role == 'sadmin')

                <li class="nav-item">
                  <a href="{{route('alladmin')}}" class="nav-link {{($route=='alladmin') ?'active':''}}">
                    <i class="fas fa-th nav-icon"></i>
                    <p>Access Admin</p>
                  </a>
                </li>
                @endif
                
                <!-- Admin Access -->
                @if(auth()->user()->role == 'admin' or auth()->user()->role == 'sadmin' )
                <li class="nav-item">
                  <a href="{{route('names')}}" class="nav-link {{($route=='names') ?'active':''}}">
                    <i class="fas fa-th nav-icon"></i>
                    <p>Product Name</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="{{route('categories.index')}}" class="nav-link {{($route=='categories.index') ?'active':''}}">
                    <i class="fas fa-th nav-icon"></i>
                    <p>Category</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="{{route('subcategories.index')}}"  class="nav-link {{($route=='subcategory') ?'active':''}}">
                    <i class="fas fa-th nav-icon"></i>
                    <p>Sub Cayegory</p>
                  </a>
                </li>
                <li class="nav-item {{ ($prefix == "/ManageUsers") ? 'menu-open':''}}">
                  <a href="#" class="nav-link">
                  <i class="nav-icon fas fa-users-cog"></i>
                  <p>
                    User Management
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <a href="{{route('users.index')}}" class="nav-link {{($route=='users.index') ?'active':''}}">
                        <i class="fas fa-users nav-icon"></i>
                        <p>All Users</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="{{route('seller')}}" class="nav-link {{($route=='seller') ?'active':''}}">
                        <i class="fas fa-users nav-icon"></i>
                        <p>Sellers</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="{{route('buyer')}}" class="nav-link {{($route=='buyer') ?'active':''}}">
                        <i class="fas fa-users nav-icon"></i>
                        <p>Buyers</p>
                      </a>
                    </li>
                  </ul>
                </li>

                <li class="nav-item ">
                  <a href="#" class="nav-link">
                  <!-- <i class="nav-icon fas fa-users-cog"></i> -->
                  <i class="nav-icon fas fa-tasks"></i>
                  <p>
                    Manage Posts
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul class="nav nav-treeview">
                    <li class="nav-item">
                      <a href="{{route('allposts.index')}}" class="nav-link">
                        <i class="fas fa-users nav-icon"></i>
                        <p>All Post</p>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="{{route('allposts.create')}}" class="nav-link">
                          <i class="fas fa-users nav-icon"></i>
                          <p>Create Post</p>
                        </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="" class="nav-link">
                  <i class="nav-icon fas fa-inbox"></i>
                  <p>
                      Orders
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="{{route('googlemap.index')}}" class="nav-link">
                  <i class="nav-icon fas fa-inbox"></i>
                  <p>
                      Google Map
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="{{route('payment.index')}}" class="nav-link">
                  <i class="nav-icon fas fa-inbox"></i>
                    <p>
                      Product Payment
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="{{route('transport.index')}}" class="nav-link">
                  <i class="nav-icon fas fa-inbox"></i>
                    <p>
                      Transport Payment
                    </p>
                  </a>
                </li>

                <li class="nav-item">
                      <a class="nav-link" href="{{ route('logout') }}"
                          onclick="event.preventDefault();
                          document.getElementById('logout-form').submit();">
                          <i class="nav-icon fas fa-sign-out-alt"></i><p>Logout</p>
                      </a>
                      <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                          @csrf
                      </form>
                </li> 
                @endif
                <!-- Admin Access -->

                <!-- seller Access -->
                @if(auth()->user()->role == 'seller' or auth()->user()->role == 'farmer')
                <li class="nav-item">
                  <a href="{{route('dashboard')}}" class="nav-link {{($route=='dashboard') ?'active':''}}">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                    ড্যাশবোর্ড
                    </p>
                  </a>
                </li>
                  <li class="nav-item">
                    <a href="{{route('updateprofile')}}" class="nav-link {{($route=='updateprofile') ?'active':''}}">
                    <i class="nav-icon fas fa-user-secret"></i>
                    <p>
                    আমার প্রোফাইল
                      </p>
                    </a>
                  </li>
                
                  <li class="nav-item">
                    <a href="{{route('updatepassword')}}" class="nav-link {{($route=='updatepassword') ?'active':''}}">
                    <i class="nav-icon  fab fa-product-hunt"></i>
                    <p>
                    পাসওয়ার্ড পরিবর্তন করুন
                      </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="{{route('manage_posts.create')}}" class="nav-link {{($route=='manage_posts.create') ?'active':''}}">
                    <i class="nav-icon fa fa-plus"></i>
                    <p>
                    পণ্য যুক্ত করুন
                      </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="{{route('manage_posts.index')}}" class="nav-link {{($route=='manage_posts.index') ?'active':''}}">
                    <i class="nav-icon  fab fa-product-hunt"></i>
                    <p>
                        আমার পণ্য
                      </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon fas fa-dollar-sign"></i>
                    <p>
                        লেনদেনের অবস্থা
                      </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon fas fa-save"></i>
                    <p>
                        সংরক্ষিত তালিকা
                      </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon fas fa-bullhorn"></i>
                    <p>
                        নোটিফিকেশন
                      </p>
                    </a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="{{ route('logout') }}"
                          onclick="event.preventDefault();
                          document.getElementById('logout-form').submit();">
                          <i class="nav-icon fas fa-sign-out-alt"></i><p>লগ আউট</p>
                      </a>
                      <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                          @csrf
                      </form>
                </li> 
                @endif
                <!-- seller Access -->

                <!-- buyer Access -->
                @if(auth()->user()->role == 'buyer')
                <li class="nav-item">
                  <a href="{{route('dashboard')}}" class="nav-link {{($route=='dashboard') ?'active':''}}">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                    ড্যাশবোর্ড
                    </p>
                  </a>
                </li>
                  <li class="nav-item">
                    <a href="{{route('updateprofile')}}" class="nav-link {{($route=='updateprofile') ?'active':''}}">
                      <i class="nav-icon fas fa-user-secret"></i>
                      <p>
                      আমার প্রোফাইল
                        </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="{{route('updatepassword')}}" class="nav-link {{($route=='updatepassword') ?'active':''}}">
                    <i class="nav-icon  fab fa-product-hunt"></i>
                    <p>
                    পাসওয়ার্ড পরিবর্তন করুন
                      </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="{{route('manage_posts.index')}}" class="nav-link {{($route=='manage_posts.index') ?'active':''}}">
                    <i class="nav-icon  fab fa-product-hunt"></i>
                    <p>
                        আমার পণ্য
                      </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon fas fa-dollar-sign"></i>
                    <p>
                        লেনদেনের অবস্থা
                      </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon fas fa-save"></i>
                    <p>
                        সংরক্ষিত তালিকা
                      </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon fas fa-bullhorn"></i>
                    <p>
                        নোটিফিকেশন
                      </p>
                    </a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="{{ route('logout') }}"
                          onclick="event.preventDefault();
                          document.getElementById('logout-form').submit();">
                          <i class="nav-icon fas fa-sign-out-alt"></i><p>লগ আউট</p>
                      </a>
                      <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                          @csrf
                      </form>
                </li> 
                @endif
                <!-- buyer Access -->

                <!-- transport Access -->
                @if(auth()->user()->role == 'transport')
                  <li class="nav-item">
                    <a href="{{route('updateprofile')}}" class="nav-link {{($route=='updateprofile') ?'active':''}}">
                      <i class="nav-icon fas fa-user-secret"></i>
                      <p>
                      আমার প্রোফাইল
                        </p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="{{route('updatepassword')}}" class="nav-link {{($route=='updatepassword') ?'active':''}}">
                    <i class="nav-icon  fab fa-product-hunt"></i>
                    <p>
                    পাসওয়ার্ড পরিবর্তন করুন
                      </p>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon fas fa-registered"></i>
                    <p>
                    যানবাহন নিবন্ধন করুন
                      </p>
                    </a>
                  </li>
                  <!-- <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon  fab fa-product-hunt"></i>
                    <p>
                        আমার পণ্য
                      </p>
                    </a>
                  </li> -->
                  <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon fas fa-dollar-sign"></i>
                    <p>
                        লেনদেনের অবস্থা
                      </p>
                    </a>
                  </li>
                  <!-- <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon fas fa-save"></i>
                    <p>
                        সংরক্ষিত তালিকা
                      </p>
                    </a>
                  </li> -->
                  <li class="nav-item">
                    <a href="" class="nav-link">
                    <i class="nav-icon fas fa-bullhorn"></i>
                    <p>
                        নোটিফিকেশন
                      </p>
                    </a>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="{{ route('logout') }}"
                          onclick="event.preventDefault();
                          document.getElementById('logout-form').submit();">
                          <i class="nav-icon fas fa-sign-out-alt"></i><p>লগ আউট</p>
                      </a>
                      <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                          @csrf
                      </form>
                </li> 
                @endif
                <!-- transport Access -->

                <!-- <li class="nav-item">
                      <a class="nav-link" href="{{ route('logout') }}"
                          onclick="event.preventDefault();
                          document.getElementById('logout-form').submit();">
                          <i class="nav-icon fas fa-sign-out-alt"></i><p>লগ আউট</p>
                      </a>
                      <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                          @csrf
                      </form>
                </li>          -->
          </ul>
       </nav>
          <!-- /.sidebar-menu -->
</div>