<div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 ">
        <div class="text-center">
          <h4 class="text-white" href="login.html"> DESHBOARD</h4>
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
          @if(auth()->user()->role == 'admin')
          <li class="nav-item">
            <a href="{{route('deshboard')}}" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Deshboard
              </p>
            </a>
          </li>
          @endif
          @if(auth()->user()->role == 'seller')
          <li class="nav-item">
            <a href="#" class="nav-link">
            <i class="nav-icon fas fa-users-cog"></i>
            <p>
              Manage commodities
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{route('product.index')}}" class="nav-link ">
                  <i class="fas fa-users nav-icon"></i>
                  <p>All commodities</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{route('product.create')}}" class="nav-link">
                  <i class="fas fa-users nav-icon"></i>
                  <p>Add commodities</p>
                </a>
              </li>
            </ul>
          </li>
          @endif
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
              <a href="" class="nav-link ">
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
        <li class="nav-item">
          <a href="#" class="nav-link">
          <i class="nav-icon fas fa-users-cog"></i>
          <p>
             Manage Product Posts
              <i class="right fas fa-angle-left"></i>
            </p>
          </a>
          <ul class="nav nav-treeview">
            <li class="nav-item">
              <a href="{{route('manage_posts.index')}}" class="nav-link ">
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
        <li class="nav-item">
               <a class="nav-link" href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
                    <i class="nav-icon fas fa-sign-out-alt"></i><p>Logout</p>
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                    @csrf
                </form>
          </a>
        </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>