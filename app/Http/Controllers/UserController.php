<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

//MODELS
use App\Models\User;

// TRAITS
use App\Http\Traits\ConfigTrait;
use App\Http\Traits\CataloguesTrait;

// REQUEST
use App\Http\Requests\UserRequest;

//TOOLS
use Hash;
use DB;
use Str;

class UserController extends Controller
{

    use ConfigTrait;
    use CataloguesTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Configuración"],
            ["id" => 2, "name" => "Usuarios"],
        ];

        $DataTableHeader = [
            ["id" => 1, "name" => "Nombre"],
            ["id" => 2, "name" => "Apellidos"],
            ["id" => 3, "name" => "Email"],
            ["id" => 4, "name" => "Rol"],
            ["id" => 5, "name" => "Estatus"],
            ["id" => 6, "name" => "Acciones"],
        ];

        return Inertia::render('Config/Users/index', [
            'RouteTrace' => $RouteTrace,
            'RouteNew' => 'usuarios.create',
            'RouteEdit' => 'usuarios.edit',
            'DataTableHeader' => $DataTableHeader,
            'DATA' => $this -> getUsers(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Configuración"],
            ["id" => 2, "name" => "Usuarios"],
            ["id" => 3, "name" => "Nuevo"],
        ];

        return Inertia::render('Config/Users/create', [
            'getData' => [],
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'usuarios.store',
            'SelectRol' => $this -> getRol(),
            'SelectYesNo' => $this -> cat_yes_no(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        // VALIDATION
        $request->validated();

         // DATA
         $DATA = $request->except('id');
         $DATA['password'] = Hash::make($request->password_plain);
         $DATA['api_token'] = Str::random(60);

         // STORE
         $instance = User::firstOrNew(['id' => $request->id]);
         $instance->fill($DATA);
         $instance->save();
 
         // MSJ
         if ($request->id){
             $msg = 'Usuario actualizado exitosamente';
         } else {
             $msg = 'Usuario creado exitosamente';
         }
 
         return Redirect::route('usuarios.index')->with('success', $msg);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Configuración"],
            ["id" => 2, "name" => "Usuarios"],
            ["id" => 3, "name" => "Editar"],
        ];

        return Inertia::render('Config/Users/create', [
            'getData' => User::find($id),
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'usuarios.store',
            'SelectRol' => $this -> getRol(),
            'SelectYesNo' => $this -> cat_yes_no(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
