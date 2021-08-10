<?php

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

Route::post('v1/login', 'V1\AuthController@login');
Route::get('v1/import', 'V1\ImporterController@index');

Route::group(['middleware' => 'auth:sanctum', 'prefix' => 'v1'], function(){
    Route::resources([
        'distributors' => 'V1\DistributorController',
        'users' => 'V1\UserController'
    ]);
});
