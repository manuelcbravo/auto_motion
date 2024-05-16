<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// CONTROLLERS
use App\Http\Controllers\MasterController;
use App\Http\Controllers\UsersController;


// Ocultar index guest
Route::get('/', function () {
    return redirect('/home');
});

Route::get('/home', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {

    //HOME
    Route::get('/home', [MasterController::class, 'index'])->name('home');


    Route::get('/pdf_demo', [PdfController::class, 'generarPDF'])->name('pdf_demo');

});

require __DIR__.'/auth.php';
