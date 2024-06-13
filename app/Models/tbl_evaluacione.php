<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes; //línea necesaria
use App\Http\Traits\Uuids;

class tbl_evaluacione extends Model
{
    use HasFactory;
    use SoftDeletes, Uuids;

    protected $fillable = [
        'id_vendedor',
        'id_cliente',
        'id_tipo_evaluacion',
        'id_estatus_evaluacion',
        'id_modelo',
        'id_marca',
        'id_version',
        'vin',
        'dinero_expectativa',
        'observacion_primer_comentario',
    ];
}
