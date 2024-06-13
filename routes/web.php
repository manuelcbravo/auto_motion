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

// CONTROLLERS GENERALES
use App\Http\Controllers\MasterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TblEmpresaController;

// CONTROLLERS USO
use App\Http\Controllers\TblArchivoController;
use App\Http\Controllers\TblClienteController;
use App\Http\Controllers\TblMarcaController;
use App\Http\Controllers\TblModeloController;
use App\Http\Controllers\TblVersioneController;
use App\Http\Controllers\TblEvaluacioneController;


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

    //CONGIF
    Route::resource('usuarios', UserController::class)->name('usuarios', '*');
    Route::resource('empresas', TblEmpresaController::class)->name('empresas', '*');
    Route::get('empresas_users/{id}', [TblEmpresaController::class, 'index_users'])->name('empresas_users');
    Route::post('empresas_users_store', [TblEmpresaController::class, 'users_store'])->name('empresas_users.store');
    Route::get('empresas_users_edit/{id}', [TblEmpresaController::class, 'users_edit'])->name('empresas_users.edit');
    Route::get('empresas_users_create/{id}', [TblEmpresaController::class, 'users_create'])->name('empresas_users.create');

    //CLIENTES
    Route::resource('clientes', TblClienteController::class)->name('clientes', '*');

    //ARCHIVOS
    Route::resource('archivos', TblArchivoController::class)->name('archivos', '*');
    Route::get('archivosL/{id}/{car}/{table}', 'TblArchivoController@getArchivo');
    Route::get('archivos/{id}', 'TblArchivoController@getArchivoT');
    Route::post('archivos_rename', 'TblArchivoController@setRename');
    Route::post('archivos_tipo', 'TblArchivoController@setTipo');
    Route::get('documentos/{path}/{filename}', 'TblArchivoController@getDocumentos');


    //GESTION DE VEHICULOS
    Route::resource('marcas', TblMarcaController::class)->name('marcas', '*');
    Route::resource('modelos', TblModeloController::class)->name('modelos', '*');
    Route::resource('versiones', TblVersioneController::class)->name('versiones', '*');
    Route::get('versiones/{id_modelo}/{id_marca}', [TblVersioneController::class, 'getVersion'])->name('versiones.all', '*');

    //EVALUACIONES
    Route::resource('evaluaciones', TblEvaluacioneController::class)->name('evaluaciones', '*');

});

require __DIR__.'/auth.php';
