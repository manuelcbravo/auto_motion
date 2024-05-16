<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class tbl_coin extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'abbreviation', 
        'symbol', 
        'currency_name', 
        'cent_name', 
        'country', 
        'update_interval',
        'banxico_code',
        'static'
    ];
}
