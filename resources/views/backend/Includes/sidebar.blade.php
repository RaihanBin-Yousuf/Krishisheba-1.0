@php
   $prefix = Request::route()->getPrefix();
   $route = Route::current()->getName();
 @endphp

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
          <li class="nav-item">
          <a href="{{route('dashboard')}}" class="nav-link {{($route=='dashboard') ?'active':''}}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Deshboard
              </p>
            </a>
          </li>
          <!-- Admin Access -->
        @if(auth()->user()->role == 'admin')
        <li class="nav-item">
            <a href="#" class="nav-link">
            <!-- <i class="nav-icon fas fa-users-cog"></i> -->
            <i class="nav-icon fas fa-tasks"></i>
            <p>
              Manage Product
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{route('product.index')}}" class="nav-link">
                  <i class="fas fa-users nav-icon"></i>
                  <p>All Product</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{route('product.create')}}" class="nav-link">
                  <i class="fas fa-users nav-icon"></i>
                  <p>Add Product</p>
                </a>
              </li>
            </ul>
        </li>
        
        <li class="nav-item">
          <a href="#" class="nav-link">
          <i class="nav-icon fas fa-users-cog"></i>
          <p>
            Manage Users
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
          <li class="nav-item">
            <a href="{{route('users.index')}}" class="nav-link">
            <i class="fas fa-users nav-icon"></i>
              <p>
              All Users
              </p>
            </a>
          </li>
            <li class="nav-item">
              <a href="{{route('seller')}}" class="nav-link ">
                <i class="fas fa-users nav-icon"></i>
                <p>Sellers</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                <i class="fas fa-users nav-icon"></i>
                <p>Buyers</p>
              </a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link">
                <i class="fas fa-users nav-icon"></i>
                <p>Transport Owners</p>
              </a>
            </li>
          </ul>
        </li>
        
        <li class="nav-item ">
          <a href="#" class="nav-link">
          <!-- <i class="nav-icon fas fa-users-cog"></i> -->
          <i class="nav-icon fas fa-tasks"></i>
          <p>
             Manage Product Posts
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="{{route('manage_posts.index')}}" class="nav-link">
                <i class="fas fa-users nav-icon"></i>
                <p>All Product Posts</p>
              </a>
            </li>
            <li class="nav-item">
            <a href="{{route('manage_posts.create')}}" class="nav-link">
                <i class="fas fa-users nav-icon"></i>
                <p>Add Product Posts</p>
              </a>
            </li>
          </ul>
        </li>
        @endif
        <!-- Admin Access -->

        <!-- seller Access -->
        @if(auth()->user()->role == 'seller')
        <li class="nav-item">
          <a href="" class="nav-link">
          <i class="nav-icon fas fa-user-secret"></i>
          <p>
              Account Information
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
          <i class="nav-icon  fab fa-product-hunt"></i>
          <p>
              My Product
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
          <i class="nav-icon fas fa-dollar-sign"></i>
          <p>
              Payment Status
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
          <i class="nav-icon fas fa-save"></i>
          <p>
              Saved List
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
          <i class="nav-icon fas fa-bell"></i>
          <p>
              Notifications
            </p>
          </a>
        </li>
        @endif
        <!-- seller Access -->

        <!-- Buyer Access -->
        @if(auth()->user()->role == 'buyer')
        <li class="nav-item">
          <a href="" class="nav-link">
          <i class="nav-icon fas fa-user-secret"></i>
          <p>
              Account Information
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
          <i class="nav-icon fas fa-dollar-sign"></i>
          <p>
              Payment Status
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
          <i class="nav-icon fas fa-save"></i>
          <p>
              Saved List
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
          <i class="nav-icon fas fa-bell"></i>
          <p>
              Notifications
            </p>
          </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link">
          <!-- <i class="nav-icon fas fa-user-secret"></i> -->
          <i class="nav-icon fas fa-plus-square"></i>
          <p>
            গাড়ি নিবন্ধন করুন
            </p>
          </a>
        </li>
        @endif
        <!-- Buyer Access -->


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
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>