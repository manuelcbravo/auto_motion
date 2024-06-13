<?php
namespace App\Http\Traits;

use Illuminate\Support\Facades\Request;

// Models
use App\Models\User;
use App\Models\cat_role;
use App\Models\tbl_empresa;

trait ConfigTrait{

    public function getUsers()
    {
        return User::selectRaw('users.*, cat_roles.nombre as rol')->
        join('cat_roles', 'cat_roles.id','=', 'users.id_rol')->
        orderBy('nombres')->
        where('id_rol', '!=', 0)->
        paginate(10)->
        appends(Request::all());
    }
    
    public function getEmpresaUsers($id)
    {
        return User::selectRaw('users.*, cat_roles.nombre as rol, tbl_empresas.nombre as empresa')->
        join('cat_roles', 'cat_roles.id','=', 'users.id_rol')->
        join('tbl_empresas', 'tbl_empresas.id','=', 'users.id_empresa')->
        orderBy('nombres')->
        where('id_rol', '!=', 0)->
        where('id_empresa', $id)->
        paginate(10)->
        appends(Request::all());
    }
    
    public function getEmpresas()
    {
        return tbl_empresa::selectRaw('tbl_empresas.*, 
        (select count(id) from users where id_empresa = tbl_empresas.id) as usuarios')->
        orderBy('nombre')->
        paginate(10)->
        appends(Request::all());
    }
    
    public function getRol(): array
    {
        return cat_role::selectRaw("id, nombre as name")->
        orderBy('nombre')->
        where('id', '!=', 0)->
        get()->
        toArray();
    }
    
}
