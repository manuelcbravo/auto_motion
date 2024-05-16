<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class tbl_exchange extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'exchange_rate',
        'start_date',
        'id_coin'
    ];
}
