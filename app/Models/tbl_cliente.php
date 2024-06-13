<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Traits\Uuids;

class tbl_cliente extends Model
{
    use HasFactory;
    use Uuids;

    protected $fillable = [
        'nombre',
        'fecha_nacimiento',
        'estado',
        'municipio',
        'colonia',
        'calle',
        'interior',
        'exterior',
        'cp',
        'celular',
        'oficina',
        'casa',
        'email',
        'correo2',
        'imagen_perfil',
        'id_usuario_reg',
        'comentario',
        'genero',
    ];
}
