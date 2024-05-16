<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_coin_historical extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_currency',
        'modification_date',
        'exchange_rate',
    ];
}
