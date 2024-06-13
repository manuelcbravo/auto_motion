<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; //línea necesaria
use App\Http\Traits\Uuids;

class tbl_empresa extends Model
{
    use HasFactory;
    use SoftDeletes, Uuids;

    protected $fillable = [
        'nombre',
        'direccion',
        'telefono',
        'email',
        'encargado',
        'encargado_telefono',
        'encargado_email',
        'estatus',
    ];

}
