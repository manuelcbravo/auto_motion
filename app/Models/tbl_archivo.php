<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; //línea necesaria

class tbl_archivo extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'nombre',
        'nombre_original',
        'direccion',
        'descripcion',
        'id_tipo',
        'id_usuario_reg',
        'tamano',
        'tipo',
        'id_asociado',
        'tabla',
        'id_cat_folder_personal',
        'id_cat_documento'
    ];
}
