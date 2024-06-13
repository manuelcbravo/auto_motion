<?php

namespace App\Http\Controllers;

use App\Models\tbl_modelo;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

// TRAITS
use App\Http\Traits\VehiculosTrait;

// REQUEST
use App\Http\Requests\ModeloRequest;

class TblModeloController extends Controller
{

    use VehiculosTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Vehículos"],
            ["id" => 2, "name" => "Modelos"],
        ];

        $DataTableHeader = [
            ["id" => 1, "name" => "Nombre"],
            ["id" => 2, "name" => "Acciones"],
        ];

        return Inertia::render('Vehiculos/Modelos/index', [
            'RouteTrace' => $RouteTrace,
            'RouteNew' => 'modelos.create',
            'RouteEdit' => 'modelos.edit',
            'DataTableHeader' => $DataTableHeader,
            'DATA' => $this -> getDataModelos()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Vehículos"],
            ["id" => 2, "name" => "Modelos"],
            ["id" => 3, "name" => "Nuevo"],
        ];

        return Inertia::render('Vehiculos/Modelos/create', [
            'getData' => [],
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'modelos.store',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ModeloRequest $request)
    {
         // VALIDATION
         $request->validated();

         // DATA
         $DATA = $request->except('id');

         // STORE
         $instance = tbl_modelo::firstOrNew(['id' => $request->id]);
         $instance->fill($DATA);
         $instance->save();
 
         // MSJ
         if ($request->id){
             $msg = 'Modelo actualizado exitosamente';
         } else {
             $msg = 'Modelo creado exitosamente';
         }
 
         return Redirect::route('modelos.index')->with('success', $msg);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(tbl_modelo $tbl_modelo, $id)
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Vehículos"],
            ["id" => 2, "name" => "Modelos"],
            ["id" => 3, "name" => "Editar"],
        ];

        return Inertia::render('Vehiculos/Modelos/create', [
            'getData' => tbl_modelo::find($id),
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'modelos.store',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(tbl_modelo $tbl_modelo)
    {
        //
    }
}
