<?php

namespace App\Http\Controllers;

use App\Models\tbl_versione;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

// TRAITS
use App\Http\Traits\VehiculosTrait;

// REQUEST
use App\Http\Requests\VersioneRequest;

class TblVersioneController extends Controller
{

    use VehiculosTrait;

    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Vehículos"],
            ["id" => 2, "name" => "Versiones"],
        ];

        $DataTableHeader = [
            ["id" => 1, "name" => "Marca"],
            ["id" => 2, "name" => "Modelo"],
            ["id" => 3, "name" => "Nombre"],
            ["id" => 4, "name" => "Acciones"],
        ];

        return Inertia::render('Vehiculos/Versiones/index', [
            'RouteTrace' => $RouteTrace,
            'RouteNew' => 'versiones.create',
            'RouteEdit' => 'versiones.edit',
            'DataTableHeader' => $DataTableHeader,
            'DATA' => $this -> getDataVersiones(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Vehículos"],
            ["id" => 2, "name" => "Versiones"],
            ["id" => 3, "name" => "Nuevo"],
        ];

        return Inertia::render('Vehiculos/Versiones/create', [
            'getData' => [],
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'versiones.store',
            'SelectMarcaModelo' => $this -> getModeloMarca()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(VersioneRequest $request)
    {
        // VALIDATION
        $request->validated();

         // DATA
         $DATA = $request->except('id');

         // STORE
         $instance = tbl_versione::firstOrNew(['id' => $request->id]);
         $instance->fill($DATA);
         $instance->save();
 
         // MSJ
         if ($request->id){
             $msg = 'Marca actualizado exitosamente';
         } else {
             $msg = 'Marca creado exitosamente';
         }
 
         return Redirect::route('versiones.index')->with('success', $msg);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(tbl_versione $tbl_versione, $id)
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Vehículos"],
            ["id" => 2, "name" => "Versiones"],
            ["id" => 3, "name" => "Editar"],
        ];

        return Inertia::render('Vehiculos/Versiones/create', [
            'getData' => tbl_versione::find($id),
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'versiones.store',
            'SelectMarcaModelo' => $this -> getModeloMarca()
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(tbl_versione $tbl_versione)
    {
        //
    }

    public function getVersion($id_modelo, $id_marca) {
        return $this -> catVersiones($id_modelo, $id_marca);
    }
}
