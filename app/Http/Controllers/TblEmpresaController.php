<?php

namespace App\Http\Controllers;

use App\Models\tbl_empresa;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

// TRAITS
use App\Http\Traits\ConfigTrait;
use App\Http\Traits\CataloguesTrait;

// REQUEST
use App\Http\Requests\EmpresaRequest;
use App\Http\Requests\UserRequest;

//TOOLS
use Hash;
use DB;
use Str;

class TblEmpresaController extends Controller
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
            ["id" => 2, "name" => "Empresas"],
        ];

        $DataTableHeader = [
            ["id" => 1, "name" => "Empresa"],
            ["id" => 2, "name" => "Dirección"],
            ["id" => 3, "name" => "Encargado"],
            ["id" => 4, "name" => "Usuarios"],
            ["id" => 5, "name" => "Estatus"],
            ["id" => 6, "name" => "Acciones"],
        ];

        return Inertia::render('Config/Empresas/index', [
            'RouteTrace' => $RouteTrace,
            'RouteNew' => 'empresas.create',
            'RouteEdit' => 'empresas.edit',
            'RouteUsers' => 'empresas_users',
            'DataTableHeader' => $DataTableHeader,
            'DATA' => $this -> getEmpresas(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Configuración"],
            ["id" => 2, "name" => "Empresas"],
            ["id" => 3, "name" => "Nuevo"],
        ];

        return Inertia::render('Config/Empresas/create', [
            'getData' => [],
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'empresas.store',
            'SelectYesNo' => $this -> cat_yes_no(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EmpresaRequest $request)
    {
        // VALIDATION
        $request->validated();

        // dd($request->all());

        // DATA
        $DATA = $request->except('id');

        // STORE
        $instance = tbl_empresa::firstOrNew(['id' => $request->id]);
        $instance->fill($DATA);
        $instance->save();

        // MSJ
        if ($request->id){
            $msg = 'Empresa actualizada exitosamente';
        } else {
            $msg = 'Empresa creada exitosamente';
        }

        return Redirect::route('empresas.index')->with('success', $msg);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(tbl_empresa $tbl_empresa, $id)
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Configuración"],
            ["id" => 2, "name" => "Empresas"],
            ["id" => 3, "name" => "Editar"],
        ];

        return Inertia::render('Config/Empresas/create', [
            'getData' => tbl_empresa::find($id),
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'empresas.store',
            'SelectYesNo' => $this -> cat_yes_no(),
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(tbl_empresa $tbl_empresa)
    {
        //
    }

    public function index_users ($id) {
        
        $RouteTrace = [
            ["id" => 1, "name" => "Configuración"],
            ["id" => 2, "name" => "Empresas"],
            ["id" => 3, "name" => "Usuarios"],
        ];

        $DataTableHeader = [
            ["id" => 1, "name" => "Nombre"],
            ["id" => 2, "name" => "Apellidos"],
            ["id" => 3, "name" => "Empresa"],
            ["id" => 4, "name" => "Email"],
            ["id" => 5, "name" => "Rol"],
            ["id" => 6, "name" => "Estatus"],
            ["id" => 7, "name" => "Acciones"],
        ];

        return Inertia::render('Config/Empresas/Usuarios/index', [
            'RouteTrace' => $RouteTrace,
            'RouteNew' => 'empresas_users.create',
            'RouteEdit' => 'empresas_users.edit',
            'DataTableHeader' => $DataTableHeader,
            'DATA' => $this -> getEmpresaUsers($id),
            'id' => $id
        ]); 
    }

    public function users_create($id) {
        $RouteTrace = [
            ["id" => 1, "name" => "Configuración"],
            ["id" => 2, "name" => "Empresas"],
            ["id" => 3, "name" => "Usuarios"],
            ["id" => 4, "name" => "Nuevo"],
        ];

        return Inertia::render('Config/Empresas/Usuarios/create', [
            'getData' => [],
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'empresas_users.store',
            'SelectRol' => $this -> getRol(),
            'SelectYesNo' => $this -> cat_yes_no(),
            'id' => $id
        ]);
    }

    public function users_store(UserRequest $request)
    {
        // VALIDATION
        $request->validated();

         // DATA
         $DATA = $request->except('id');
         $DATA['password'] = Hash::make($request->password_plain);
         $DATA['api_token'] = Str::random(60);
         $DATA['id_empresa'] = $request->id_empresa;

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
 
         return Redirect::route('empresas_users', $request->id_empresa)->with('success', $msg);
    }

    public function users_edit(string $id)
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Configuración"],
            ["id" => 2, "name" => "Empresas"],
            ["id" => 3, "name" => "Usuarios"],
            ["id" => 4, "name" => "Nuevo"],
        ];

        return Inertia::render('Config/Empresas/Usuarios/create', [
            'getData' => User::find($id),
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'usuarios.store',
            'SelectRol' => $this -> getRol(),
            'SelectYesNo' => $this -> cat_yes_no(),
        ]);
    }

}
