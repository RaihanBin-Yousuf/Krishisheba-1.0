<?php
use App\Http\Controllers\FrontTestController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ManagePostController;
use App\Http\Controllers\SubCategoryController;
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

Route::get('/',[FrontTestController::class,'index'])->name('home-page-index');
Route::get('/team',[FrontTestController::class,'team'])->name('team');
Route::get('/faq',[FrontTestController::class,'faq'])->name('faq');
Route::get('/findproduct',[FrontTestController::class,'findproduct'])->name('findproduct');
Route::get('/filter-paddy',[FrontTestController::class,'filterpaddy'])->name('filter-paddy');//
Route::get('/paddy_product_detailspage',[FrontTestController::class,'paddy_product_detailspage'])->name('paddy_product_detailspage');



Route::resource('product', ProductController::class);

Route::resource('categories', CategoryController::class);

Route::resource('subcategories', SubCategoryController::class);

Route::resource('users', UsersController::class);
Route::get('/seller',[UsersController::class,'seller'])->name('seller');

Route::resource('manage_posts', ManagePostController::class);



// project task list
// https://docs.google.com/document/d/1oRWt5Q99Nt1JjVuZOKuSTNge8wEcKWHlPjGEhPHrqmU/edit