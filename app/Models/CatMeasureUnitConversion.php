<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CatMeasureUnitConversion extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'unit_measure_from',
        'unit_measure_to',
        'value',
    ];
}
