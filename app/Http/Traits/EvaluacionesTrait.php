<?php
namespace App\Http\Traits;

use Illuminate\Support\Facades\Request;

// Models
use App\Models\tbl_evaluacione;

trait EvaluacionesTrait{

    public function getEvaluacion()
    {
        return tbl_evaluacione::selectRaw('tbl_evaluaciones.*')->
        paginate(10)->
        appends(Request::all());
    }
}
