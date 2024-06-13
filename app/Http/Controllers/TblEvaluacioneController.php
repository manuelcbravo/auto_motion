<?php

namespace App\Http\Controllers;

use App\Models\tbl_evaluacione;
use App\Models\tbl_cliente;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

// TRAITS
use App\Http\Traits\CataloguesGeneralTrait;
use App\Http\Traits\CataloguesTrait;
use App\Http\Traits\EvaluacionesTrait;

//REQUEST
use App\Http\Requests\EvaluacionRequest;

class TblEvaluacioneController extends Controller
{
    use CataloguesGeneralTrait;
    use CataloguesTrait;
    use EvaluacionesTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Evaluaciones"],
            ["id" => 2, "name" => "Lista"],
        ];

        $DataTableHeader = [
            ["id" => 1, "name" => "Imagen"],
            ["id" => 2, "name" => "Estatus"],
            ["id" => 3, "name" => "Empresa"],
            ["id" => 4, "name" => "Fecha"],
            ["id" => 5, "name" => "Solicitante/Evaluador/Fijador de precio"],
            ["id" => 6, "name" => "Reparaciones"],
            ["id" => 7, "name" => "Evaluación"],
            ["id" => 8, "name" => "Total"],
            ["id" => 9, "name" => "Acciones"],
        ];

        return Inertia::render('Evaluaciones/Lista/index', [
            'RouteTrace' => $RouteTrace,
            'RouteEdit' => 'marcas.edit',
            'DataTableHeader' => $DataTableHeader,
            'DATA' => $this -> getEvaluacion()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $RouteTrace = [
            ["id" => 1, "name" => "Evaluaciones"],
            ["id" => 2, "name" => "Nueva"],
        ];


        return Inertia::render('Evaluaciones/Generar/index', [
            'getData' => [],
            'CatTipoCompra' => $this -> cat_tipo_evaluacione(),
            'CatVendedores' => $this -> cat_vendedores(),
            'CatMarca' => $this -> cat_marca(),
            'CatModelo' => $this -> cat_modelo(),
            'CatVersion' => [],
            'RouteTrace' => $RouteTrace,
            'RouteStore' => 'evaluaciones.store',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(EvaluacionRequest $request)
    {
        //VALIDATION
        $request->validated();

        //GUARDAR CLIENTE
        $cliente_data = $request->only('nombre', 'email', 'celular');
        $cliente = tbl_cliente::create($cliente_data);

        // DATA
        $DATA = $request->except('nombre', 'email', 'celular');
        $DATA['id_cliente'] = $cliente->id;
        $DATA['id_estatus_evaluacion'] = 1;

        // STORE
        $instance = tbl_evaluacione::firstOrNew(['id' => $request->id]);
        $instance->fill($DATA);
        $instance->save();

        // MSJ
        if ($request->id){
            $msg = 'Evaluación actualizado exitosamente';
        } else {
            $msg = 'Evaluación creado exitosamente';
        }

        return Redirect::route('evaluaciones.index')->with('success', $msg);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(tbl_evaluacione $tbl_evaluacione)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(tbl_evaluacione $tbl_evaluacione)
    {
        //
    }
}
