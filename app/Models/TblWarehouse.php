<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TblWarehouse extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'code',
        'name',
        'full_address',
        'latitude',
        'longitude',
        'phone',
        'cell',
        'email',
        'manager_name',
        'manager_phone',
        'manager_cell',
        'manager_email',
        'capacity'
    ];
}
