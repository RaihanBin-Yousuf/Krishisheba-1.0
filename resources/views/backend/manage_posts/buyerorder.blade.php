
@extends('backend.layouts.master')
@section('title','buyerorders')
@section('content')
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark"></h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">হোম</a></li>
              <li class="breadcrumb-item active">আমার অর্ডার সমূহ</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

          <div class="card">
            <div class="card-header">
              <h3 class="text-center">আমার অর্ডার সমূহ</h3>
             </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th class="text-center">অর্ডার নম্বর</th>
                  <th class="text-center">পণ্যের নাম</th>
                  <th class="text-center">পণ্যের পরিমাণ </th>
                  <th class="text-center">অর্ডার তারিখ </th>
                  <th class="text-center">ঠিকানা </th>
                  <th class="text-center">লেনদেনের অবস্থা </th>
                  <th class="text-center">মোট </th>
                </tr>
                </thead>
                <tbody>
                @foreach($buyerorder as $buyerorders)
                <tr>
                  <td class="text-center">{{ $buyerorders->id }}</td>
                  <td class="text-center">{{ $buyerorders->product_name }}-( {{ $buyerorders->category }})</td>
                  <td class="text-center">{{ $buyerorders->total_weight }} {{ $buyerorders->weight_unit }}</td>
                      <!-- F - A full textual representation of a month (January through December)
                      M - A short textual representation of a month (Jan through Dec) -->
                  <td class="text-center">{{\Carbon\Carbon::parse($buyerorders->created_at)->format('d-F-Y')}}</td>
                  <td class="text-center">{{(Auth::user()->address) }}</td>
                  @if($buyerorders->accept_payment>0)
                                    <td class="text-center badge-success" style="vertical-align: middle;">Confirm</td>
                                  @else
                                    <td class="text-center badge-warning" style="vertical-align: middle;">Pending</td>
                  @endif
                  <td class="text-center">৳{{ $buyerorders->total_amount }}</td>
                </tr>
                @endforeach
                </tbody>
                </table>
            </div>
            <!-- /.card-body -->
          </div>
@endsection
