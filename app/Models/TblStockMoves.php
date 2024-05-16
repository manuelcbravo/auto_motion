<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TblStockMoves extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'type',
        'id_item',
        'id_warehouses',
        'id_warehouses_location',
        'lot',
        'series',
        'quantity_income',
        'unit_measure_income',
        'quantity_storage',
        'unit_measure_storage',
        'id_currency',
        'exchange_rate',
        'price_unit',
        'total',
        'account_inventory',
        'code',
        'id_transaction'
    ];
}
