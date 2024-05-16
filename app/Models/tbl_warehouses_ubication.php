<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class tbl_warehouses_ubication extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'id_wherehouse',
        'name',
        'code',
        'description',
    ];
}
