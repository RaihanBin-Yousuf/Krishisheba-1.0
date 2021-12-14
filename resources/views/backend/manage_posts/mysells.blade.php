
@extends('backend.layouts.master')
@section('title','myorder')
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
              <li class="breadcrumb-item active">বিক্রিত পণ্যের তালিকা</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

          <div class="card">
            <div class="card-header">
              <h3 class="text-center">বিক্রিত পণ্যের তালিকা</h3>
             </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>
                  <th class="text-center">পণ্যের নাম</th>
                  <th class="text-center">পণ্যের পরিমাণ </th>
                  <th class="text-center">অর্ডার তারিখ </th>
                  <th class="text-center">বিতরণ তারিখ</th>
                  <th class="text-center">লেনদেনের অবস্থা </th>
                  <th class="text-center">মূল্য </th>
                  <th class="text-center">পরিসেবা চার্জ  </th>
                  <th class="text-center">মোট </th>
                </tr>
                </thead>
                <tbody>
                @foreach($order as $myorder)
                <tr>
                  <td class="text-center">{{ $myorder->category }}</td>
                  <td class="text-center">{{ $myorder->total_weight }} {{ $myorder->weight_unit }}</td>
                      <!-- F - A full textual representation of a month (January through December)
                      M - A short textual representation of a month (Jan through Dec) -->
                  <td class="text-center">{{\Carbon\Carbon::parse($myorder->created_at)->format('d-M-Y')}}</td>
                  <td class="text-center">{{\Carbon\Carbon::parse($myorder->updated_at)->format('d-M-Y')}}</td>
                  @if($myorder->accept_payment>0)
                                    <td class="text-center text-info">Confirm</td>
                                  @else
                                    <td class="text-center text-warning">Pending</td>
                  @endif
                  <td class="text-center">৳{{ $myorder->total_amount }}</td>
                  <td class="text-center" style="color: #45ADA8 ;">৳{{ $myorder->service_fee }}</td>
                  @if($myorder->accept_payment>0)
                  <td class="text-center text-info">৳{{ $myorder->total_amount - $myorder->service_fee }}</td>
                  @else
                  <td class="text-center" style="color: red;">৳{{ $myorder->total_amount - $myorder->service_fee }}</td>
                  @endif
                </tr>
                @endforeach
                </tbody>
                <tfoot>
                    <tr>
                        <td class="text-center" colspan="8" style="font: size 20px; font-weight:bold;color: #5cb874;">সর্বমোট: {{ Auth::user()->amount }}</td>
                    </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
@endsection
