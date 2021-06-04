<?php

use App\Http\Controllers\SuperAdminController;
use App\Http\Controllers\Admin\CheckPostController;
use App\Http\Controllers\FrontTestController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Commodities\PaddysController;
use App\Http\Controllers\Commodities\RiceController;
use App\Http\Controllers\GoogleMapController;
use App\Http\Controllers\ManagePostController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\SubCategoryController;
use App\Http\Controllers\TransportController;
use App\Models\GoogleMap;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });


Route::get('home', function () {
    return view('backend.dashboard');
})->name('dashboard');
//homepage
Route::get('/',[FrontTestController::class,'index'])->name('home-page-index');
Route::get('/team',[FrontTestController::class,'team'])->name('team');
Route::get('/faq',[FrontTestController::class,'faq'])->name('faq');
Route::get('/findproduct',[FrontTestController::class,'findproduct'])->name('findproduct');


// Home Page Commodities Rooute
Route::resource('paddy', PaddysController::class);
Route::get('/paddy_detailspage/{id}',[PaddysController::class,'paddy_detailspage']);

Route::resource('rice', RiceController::class);
Route::get('/rice_detailspage/{id}',[RiceController::class,'rice_detailspage']);


//Super Admin Route
// Route::resource('superadmin', SuperAdminController::class);
Route::get('/alladmin',[UsersController::class,'AllAdmin'])->name('alladmin');
Route::get('/viewadmin/{id}',[UsersController::class,'viewadmin'])->name('viewadmin');

Route::post('users', [UsersController::class,'notify'])->name('users.notify');

Route::get('/verify', function () {
    return view('auth.verify');
})->name('verify');


Route::get('/registration', function () {
    return view('auth.register');
})->name('registration');

Route::post('/verify', [UsersController::class, 'verify'])->name('verify');

Route::post('/registration', [UsersController::class, 'newuser'])->name('registration');

//Admin Route
Route::resource('allposts', CheckPostController::class);
Route::get('/deletePost/{id}',[CheckPostController::class,'destroy'])->name('deletePost');
Route::resource('product', ProductController::class);
Route::get('/names',[ProductController::class,'names'])->name('names');
Route::get('deleteproduct/{id}',[ProductController::class,'deleteProducById'])->name('deleteProducById');

Route::resource('categories', CategoryController::class);
// Route::get('/categories/dropdown', )
Route::get('/deletecategory/{id}',[CategoryController::class,'deleteCategoryById'])->name('deleteCategoryById');

Route::resource('subcategories', SubCategoryController::class);
// Route::get('/subcategory',[SubCategoryController::class,'subcategory'])->name('subcategory');
Route::get('/deletesubcategory/{id}',[SubCategoryController::class,'deleteSubCategoryById'])->name('deleteSubCategoryById');

// manage Users Route
Route::prefix('ManageUsers')->group(function () 
{
Route::resource('users', UsersController::class);
Route::get('/authUser', [UsersController::class, 'authuser']);
Route::get('/access/admin', [UsersController::class, 'accessadmin']);

Route::get('/count/users', [UsersController::class, 'countUsers']);
Route::get('/tranportall', [UsersController::class, 'alltransport']);
Route::post('location', [UsersController::class, 'location'])->name('location');
Route::get('/seller',[UsersController::class,'seller'])->name('seller');
Route::get('/buyer',[UsersController::class,'buyer'])->name('buyer');
Route::get('deleteuser/{id}',[UsersController::class,'deleteUserById'])->name('deleteUserById');
Route::get('/viewuser/{id}',[UsersController::class,'viewuser'])->name('viewuser');
});
//End Admin route


//Seller and buyer route
Route::resource('manage_posts', ManagePostController::class);
// Route::get('/deleteUserPost/{id}',[ManagePostController::class,'deleteUserPost'])->name('deleteUserPost');

Route::view('/profile/updateprofile', 'auth.profile.updateprofile')->name('updateprofile')->middleware('auth');
Route::view('/profile/password', 'auth.profile.updatepassword')->name('updatepassword')->middleware('auth');
// project task list
// https://docs.google.com/document/d/1oRWt5Q99Nt1JjVuZOKuSTNge8wEcKWHlPjGEhPHrqmU/edit
Route::resource('googlemap', GoogleMapController::class);

//payment all information
Route::get('/payment/history', [PaymentController::class, 'paymenthistory'])->name('selfarmer');
Route::get('/payment/buyer/history', [PaymentController::class, 'buyerpayment'])->name('buyerpaymentlist');

Route::resource('payment', PaymentController::class);

// Route::get('/payment/sellerfarmer', [PaymentController::class, 'sellerfarmer']);

Route::post('/accept/payment', [PaymentController::class, 'acceptpayment']);
Route::get('/transport/payment', [TransportController::class, 'paymenthistory'])->name('transporter');
Route::get('/transport/buyer/payment', [TransportController::class, 'buytranpayhis'])->name('buyertransportlist');


Route::resource('transport', TransportController::class);

Route::post('/accept/transport', [TransportController::class, 'acceptpayment']);
Route::post('/delivered/buyer/transport', [TransportController::class, 'deliveredtransport']);
