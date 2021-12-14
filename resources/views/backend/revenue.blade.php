
@extends('backend.layouts.master')
@section('title','Revenue')
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
              <li class="breadcrumb-item active">Revenue</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

          <div class="card">
            <div class="card-header">
              <h3 class="text-center"> Revenue</h3>
             </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                <tr>               
                  <th class="text-center">Type </th>
                  <th class="text-center">Date</th>
                  <th class="text-center">Revenue </th>
                </tr>
                </thead>
                <tbody>
                @foreach($revenue as $revenues)
                <tr>
                  <td class="text-center">{{ $revenues->type }}</td>
                    <!-- F - A full textual representation of a month (January through December)
                    M - A short textual representation of a month (Jan through Dec) -->
                 <td class="text-center">{{\Carbon\Carbon::parse($revenues->created_at)->format('d-F-Y')}}</td>
                 <td class="text-center">{{$revenues->amount}}</td>
                </tr>
                @endforeach
                </tbody>
                <tfoot>
                    <tr>
                        <!-- <td colspan="2">Total Revenue</td> -->
                        <td class="text-center" colspan="3" style="font-size:25px;font-weight:bold;color: #5cb874;">Total Revenue: {{$revenues->sum('amount')}}</td>
                    </tr>
                </tfoot>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
@endsection
