<?php

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

Route::get('/', function () {
    return view('welcome');
});


Route::get('home', function () {
    return view('backend.dashboard');
})->name('dashboard');;

// Route::get('/', function () {
//     return view('backend.dashboard');
// });


Route::resource('product', ProductController::class);


Route::resource('categories', CategoryController::class);

Route::resource('subcategories', SubCategoryController::class);

Route::resource('users', UsersController::class);

Route::prefix('Manage_Post')->group(function () 


{
Route::resource('manage_posts', ManagePostController::class);
});