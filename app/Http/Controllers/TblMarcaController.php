<?php

namespace App\Http\Controllers;

use App\Models\tbl_marca;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

// TRAITS
use App\Http\Traits\VehiculosTrait;

// REQUEST
use App\Http\Requests\MarcaRequest;

class TblMarcaController extends Controller
{

    use VehiculosTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Vehículos"],
            ["id" => 2, "name" => "Marcas"],
        ];

        $DataTableHeader = [
            ["id" => 1, "name" => "Nombre"],
            ["id" => 2, "name" => "Acciones"],
        ];

        return Inertia::render('Vehiculos/Marcas/index', [
            'RouteTrace' => $RouteTrace,
            'RouteNew' => 'marcas.create',
            'RouteEdit' => 'marcas.edit',
            'DataTableHeader' => $DataTableHeader,
            'DATA' => $this -> getDataMarcas()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): \Inertia\Response
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Vehículos"],
            ["id" => 2, "name" => "Marcas"],
            ["id" => 3, "name" => "Nuevo"],
        ];

        return Inertia::render('Vehiculos/Marcas/create', [
            'getData' => [],
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'marcas.store',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MarcaRequest $request)
    {
        // VALIDATION
        $request->validated();

        // DATA
        $DATA = $request->except('id');

        // STORE
        $instance = tbl_marca::firstOrNew(['id' => $request->id]);
        $instance->fill($DATA);
        $instance->save();

        // MSJ
        if ($request->id){
            $msg = 'Marca actualizado exitosamente';
        } else {
            $msg = 'Marca creado exitosamente';
        }

        return Redirect::route('marcas.index')->with('success', $msg);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(tbl_marca $tbl_marca, $id)
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Vehículos"],
            ["id" => 2, "name" => "Marcas"],
            ["id" => 3, "name" => "Editar"],
        ];

        return Inertia::render('Vehiculos/Marcas/create', [
            'getData' => tbl_marca::find($id),
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'marcas.store',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(tbl_marca $tbl_marca)
    {
        //
    }
}
