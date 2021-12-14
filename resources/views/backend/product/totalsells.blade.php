
@extends('backend.layouts.master')
@section('title','Totalsells')
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
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Total Sells</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

          <div class="card">
            <div class="card-header">
              <h3 class="text-center"> Total Sells</h3>
             </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>               
                  <th class="text-center">Id </th>
                  <th class="text-center">Product Name</th>
                  <th class="text-center">Quantity </th>
                  <th class="text-center">Ordered </th>
                  <th class="text-center">Delivered</th>
                  <th class="text-center">Total </th>
                  <th class="text-center">Payment </th>
                  <th class="text-center">Revenue </th>
                </tr>
                </thead>
                <tbody>
                @foreach($sells as $totalsells)
                <tr>
                  <td class="text-center">{{ $totalsells->id }}</td>
                  <td class="text-center">{{ $totalsells->category }}</td>
                  <td class="text-center">{{ $totalsells->total_weight }} {{ $totalsells->weight_unit }}</td>
                      <!-- F - A full textual representation of a month (January through December)
                      M - A short textual representation of a month (Jan through Dec) -->
                  <td class="text-center">{{\Carbon\Carbon::parse($totalsells->created_at)->format('d-F-Y')}}</td>
                  <td class="text-center">{{\Carbon\Carbon::parse($totalsells->updated_at)->format('d-F-Y')}}</td>
                  <!-- <td class="text-center">Nothing</td> -->
                  <td class="text-center">৳{{ $totalsells->total_amount }}</td>
                  <td class="text-center" style="color: red;">৳{{ $totalsells->total_amount - $totalsells->service_fee }}</td>
                  <td class="text-center" style="color: #45ADA8 ;">৳{{ $totalsells->service_fee }}</td>
                </tr>
                @endforeach
                </tbody>
                <tfoot>
                    <tr>
                        <td class="text-center" colspan="8" style="font-weight:bold;color: #5cb874;">Total Revenue: {{$totalsells->sum('service_fee')}}</td>
                    </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
@endsection
