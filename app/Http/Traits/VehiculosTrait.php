<?php
namespace App\Http\Traits;

use Illuminate\Support\Facades\Request;



//MODELS
use App\Models\tbl_marca;
use App\Models\tbl_modelo;
use App\Models\tbl_versione;

trait VehiculosTrait
{

    public function getDataMarcas()
    {
        $data = tbl_marca::selectRaw("*")
        ->orderBy('nombre')
        ->paginate(5)
        ->appends(Request::all());

        return $data;
    }

    public function getDataModelos()
    {
        $data = tbl_modelo::selectRaw("*")
        ->orderBy('nombre')
        ->paginate(5)
        ->appends(Request::all());

        return $data;
    }

    public function getDataVersiones()
    {
        $data = tbl_versione::selectRaw("tbl_versiones.*, tbl_marcas.nombre as marca, tbl_modelos.nombre as modelo")
        ->join('tbl_marcas','tbl_marcas.id','=','tbl_versiones.id_marca')
        ->join('tbl_modelos','tbl_modelos.id','=','tbl_versiones.id_modelo')
        ->orderBy('nombre')
        ->paginate(5)
        ->appends(Request::all());

        return $data;
    }
    
    public function getModeloMarca()
    {
        $data = array();
        $data['marca'] = tbl_marca::selectRaw("id, nombre as name")->orderBy('nombre')->get();
        $data['modelo'] = tbl_modelo::selectRaw("id, nombre as name")->orderBy('nombre')->get();

        return $data;
    }

    public function catVersiones($id_modelo, $id_carca)
    {
        $data = tbl_versione::selectRaw("tbl_versiones.id, tbl_versiones.nombre as name")->
        where('id_marca', $id_carca)->
        where('id_modelo', $id_modelo)->
        orderBy('nombre')->
        get();

        return $data;
    }
}