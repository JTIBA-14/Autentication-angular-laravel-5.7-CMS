<?php

//Route::group(['prefix' => 'auth', ], function () {
    Route::post('login', 'Admin\AuthController@login');
//});

Route::middleware('jwt.auth')->group(function () {
    Route::post('logout', 'Admin\AuthController@logout');
    Route::post('refresh', 'Admin\AuthController@refresh');
    Route::post('me', 'Admin\AuthController@me');
});