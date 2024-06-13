<?php
namespace App\Http\Traits;

use Illuminate\Support\Facades\Request;

// Models
use App\Models\tbl_marca;
use App\Models\tbl_modelo;
use App\Models\tbl_version;
use App\Models\User;

trait CataloguesGeneralTrait{

    public function cat_marca(): array
    {
        return tbl_marca::selectRaw("id, nombre as name")->
        orderBy('nombre')->
        get()->
        toArray();
    }
    
    public function cat_modelo(): array
    {
        return tbl_modelo::selectRaw("id, nombre as name")->
        orderBy('nombre')->
        get()->
        toArray();
    }
    
    public function cat_version($id_marca, $id_modelo): array
    {
        return tbl_modelo::selectRaw("id, nombre as name")->
        orderBy('nombre')->
        where('id_marca', $id_marca)->
        where('id_modelo', $id_modelo)->
        get()->
        toArray();
    }
    
    public function cat_vendedores(): array
    {
        return User::selectRaw("users.id, concat_ws(' ', nombres, apellidos, ' (', cat_roles.nombre ,')') as name")->
        join('cat_roles', 'cat_roles.id','=', 'users.id_rol')->
        orderBy('nombres')->
        whereNotIn('id_rol', [0])->
        get()->
        toArray();
    }
    
}
