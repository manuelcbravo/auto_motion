<?php
namespace App\Http\Traits;

use Illuminate\Support\Facades\Request;

// Models
use App\Models\cat_estatus_evaluacione;
use App\Models\cat_tipo_evaluacione;

trait CataloguesTrait{

    public function cat_yes_no(): array
    {
        return [
            ["id" => 1, "name" => "Si"],
            ["id" => 2, "name" => "No"]
        ];
    }

    public function cat_status(): array
    {
        return [
            ["id" => 1, "name" => 'Activo'],
            ["id" => 2, "name" => 'Inactivo']
        ];
    }
    
    public function cat_estatus_evaluacione(): array
    {
        return cat_estatus_evaluacione::selectRaw("id, nombre as name")->
        orderBy('id')->
        get()->
        toArray();
    }
    
    public function cat_tipo_evaluacione(): array
    {
        return cat_tipo_evaluacione::selectRaw("id, nombre as name")->
        orderBy('id')->
        get()->
        toArray();
    }
    
}
