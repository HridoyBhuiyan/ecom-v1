<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductListController;
use App\Http\Controllers\SiteinfoController;
use App\Http\Controllers\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/visitor/{ip}', [VisitorController::class, "getVisitedData"]);

Route::post("/getContactDetails",[ContactController::class,"getContactDetail"]);
Route::get("/sendSiteInfo",[SiteinfoController::class,"sendSiteInfo"]);
Route::get("/categorydetails",[CategoryController::class,"sendCategoryDetails"]);
Route::get('/featured',[ProductListController::class,"getFeaturedProduct"]);
Route::get('/special',[ProductListController::class,"getSpecialProduct"]);
Route::get('/subcategoryProduct/{category}/{subCategory}',[ProductListController::class,"getSubCategoryProduct"]);
Route::get('/categoryProduct/{category}',[ProductListController::class,"getCategoryProduct"]);

Route::get('/newproduct',[ProductListController::class,"getNewProduct"]);
