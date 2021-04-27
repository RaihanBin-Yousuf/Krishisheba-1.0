<?php

use App\Http\Controllers\Admin\CheckPostController;
use App\Http\Controllers\FrontTestController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Commodities\PaddysController;
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
//homepage
Route::get('/',[FrontTestController::class,'index'])->name('home-page-index');
Route::get('/team',[FrontTestController::class,'team'])->name('team');
Route::get('/faq',[FrontTestController::class,'faq'])->name('faq');
Route::get('/findproduct',[FrontTestController::class,'findproduct'])->name('findproduct');


// Home Page Commodities Rooute
Route::resource('paddy', PaddysController::class);
Route::get('/paddy_detailspage/{id}',[PaddysController::class,'paddy_detailspage']);



//Admin Route

Route::resource('product', ProductController::class);
Route::get('/names',[ProductController::class,'names'])->name('names');
Route::get('deleteproduct/{id}',[ProductController::class,'deleteProducById'])->name('deleteProducById');

Route::resource('categories', CategoryController::class);
// Route::get('/category',[CategoryController::class,'category'])->name('category');

Route::resource('subcategories', SubCategoryController::class);
// Route::get('/subcategory',[SubCategoryController::class,'subcategory'])->name('subcategory');


// manage Users Route
Route::prefix('ManageUsers')->group(function () 
{
Route::resource('users', UsersController::class);
Route::get('/seller',[UsersController::class,'seller'])->name('seller');
Route::get('deleteuser/{id}',[UsersController::class,'deleteUserById'])->name('deleteUserById');
});



Route::resource('manage_posts', ManagePostController::class);



//Seller route

Route::resource('allposts', CheckPostController::class);
Route::view('/profile/updateprofile', 'auth.profile.updateprofile')->name('updateprofile')->middleware('auth');
Route::view('/profile/password', 'auth.profile.updatepassword')->name('updatepassword')->middleware('auth');
// project task list
// https://docs.google.com/document/d/1oRWt5Q99Nt1JjVuZOKuSTNge8wEcKWHlPjGEhPHrqmU/edit