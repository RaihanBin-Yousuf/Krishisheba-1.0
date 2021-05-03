<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>@yield('title')</title>
 <!-- Google Font: Source Sans Pro -->
 <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- SweetAlert2 -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css') }}">
  <!-- Toastr -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/toastr/toastr.min.css') }}">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/fontawesome-free/css/all.min.css') }}">
  <!-- DataTables -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css') }}">
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/datatables-responsive/css/responsive.bootstrap4.min.css') }}">
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/datatables-buttons/css/buttons.bootstrap4.min.css') }}">
  <!-- Google Font: Source Sans Pro -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/fontawesome-free/css/all.min.css') }}">
  <!-- Ionicons -->
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
  <!-- Tempusdominus Bootstrap 4 -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
  <!-- iCheck -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/icheck-bootstrap/icheck-bootstrap.min.css')}}">
  <!-- JQVMap -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/jqvmap/jqvmap.min.css')}}">
  <!-- Theme style -->
  <link rel="stylesheet" href="{{ asset('backend-asset/dist/css/adminlte.min.css')}}">
  <!-- overlayScrollbars -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/overlayScrollbars/css/OverlayScrollbars.min.css')}}">
  <!-- Daterange picker -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/daterangepicker/daterangepicker.css')}}">
  <!-- summernote -->
  <link rel="stylesheet" href="{{ asset('backend-asset/plugins/summernote/summernote-bs4.min.css')}}">
   <!-- Scripts -->
   <!-- <script src="{{ mix('js/app.js') }}" defer></script> -->
   <style>
.h4post{
    color: #6d6d61eb;
    font-size: 20px
}
</style>
</head>
<body class="hold-transition sidebar-mini layout-fixed">
<div class="wrapper">
  <!-- Navbar -->
  @include('backend.includes.navbar')
  <!-- /.navbar -->
  <main>
                <div class="wrapper">
                    <!-- Main Sidebar Container -->
                    <aside class="main-sidebar sidebar-dark-primary elevation-4">
                     
                  <!-- {{-- sidebar --}} -->
                  @include('backend.includes.sidebar')
                     <!-- {{-- sidebar --}} -->
                    </aside>
                    <!-- Content Wrapper. Contains page content -->
                    <div class="content-wrapper">
                        <!-- Content Header (Page header) -->
                        
                        @yield('content')
                    <!-- /.control-sidebar -->             
            </main>

  <!-- Content Wrapper. Contains page content -->
 
  <!-- Control Sidebar -->
 
</div>
<!-- ./wrapper -->

<!-- jQuery -->
<script src="{{ asset('backend-asset/plugins/jquery/jquery.min.js')}}"></script>
<!-- jQuery UI 1.11.4 -->
<script src="{{ asset('backend-asset/plugins/jquery-ui/jquery-ui.min.js')}}"> </script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>
<!-- Bootstrap 4 -->
<script src="{{ asset('backend-asset/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<!-- SweetAlert2 -->
<script src="{{ asset('backend-asset/plugins/sweetalert2/sweetalert2.min.js') }}"></script>
<!-- Toastr -->
<script src="{{ asset('backend-asset/plugins/toastr/toastr.min.js') }}"></script>
<!-- DataTables  & Plugins -->
<script src="{{ asset('backend-asset/plugins/datatables/jquery.dataTables.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/datatables-responsive/js/dataTables.responsive.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/datatables-responsive/js/responsive.bootstrap4.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/datatables-buttons/js/dataTables.buttons.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/datatables-buttons/js/buttons.bootstrap4.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/jszip/jszip.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/pdfmake/pdfmake.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/pdfmake/vfs_fonts.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/datatables-buttons/js/buttons.html5.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/datatables-buttons/js/buttons.print.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/datatables-buttons/js/buttons.colVis.min.js')}}"></script>

<!-- Page specific script -->
<script>
  $(function () {
    $("#example1").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
      "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  });
</script>

<!-- ChartJS -->
<script src="{{ asset('backend-asset/plugins/chart.js/Chart.min.js')}}"></script>
<!-- Sparkline -->
<!-- <script src="{{ asset('backend-asset/plugins/sparklines/sparkline.js')}}"></script> -->
<!-- JQVMap -->
<script src="{{ asset('backend-asset/plugins/jqvmap/jquery.vmap.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/jqvmap/maps/jquery.vmap.usa.js')}}"></script>
<!-- jQuery Knob Chart -->
<script src="{{ asset('backend-asset/plugins/jquery-knob/jquery.knob.min.js')}}"></script>
<!-- daterangepicker -->
<script src="{{ asset('backend-asset/plugins/moment/moment.min.js')}}"></script>
<script src="{{ asset('backend-asset/plugins/daterangepicker/daterangepicker.js')}}"></script>
<!-- Tempusdominus Bootstrap 4 -->
<script src="{{ asset('backend-asset/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js')}}"></script>
<!-- Summernote -->
<script src="{{ asset('backend-asset/plugins/summernote/summernote-bs4.min.js')}}"></script>
<!-- overlayScrollbars -->
<script src="{{ asset('backend-asset/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js')}}"></script>
<!-- AdminLTE App -->
<script src="{{ asset('backend-asset/dist/js/adminlte.js')}}"></script>

<script>
     @if(Session::has('messege'))
          var type="{{Session::get('alert-type','info')}}"
          switch(type){
              case 'info':
                   toastr.info("{{ Session::get('messege') }}");
                   break;
              case 'success':
                  toastr.success("{{ Session::get('messege') }}");
                  break;
              case 'warning':
                 toastr.warning("{{ Session::get('messege') }}");
                  break;
              case 'error':
                  toastr.error("{{ Session::get('messege') }}");
                  break;
          }
        @endif
        
  </script>

      <script>
            $(document).on("click", "#delete", function(e){
                e.preventDefault();
                 var link = $(this).attr("href");
                 swal({
                  title: "Are you sure?",
                  text: "You will not be able to recover this imaginary file!",
                  type: "warning",
                  showCancelButton: true,
                  confirmButtonClass: "btn-danger",
                  confirmButtonText: "Yes, delete it!",
                  cancelButtonText: "No, cancel!",
                },
                function(isConfirm) {
                  if (isConfirm) {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    window.location.href = link;
                  } else {
                    swal("Cancelled", "Your imaginary file is safe :)", "error");
                  }
                });
               });
      </script>
      <script>
      // product pic upload
        function readURL(input) {
          if (input.files && input.files[0]) {
              var reader = new FileReader();

              reader.onload = function (e) {
                  $('#productimage')
                      .attr('src', e.target.result);
              };

              reader.readAsDataURL(input.files[0]);
          }
        }

      </script>
</body>
</html>
