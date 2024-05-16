<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TblStockMaster extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'code',
        'description',
        'category',
        'type_tax',
        'taxes',
        'type_item',
        'unit_measure',
        'account_sales',
        'account_inventory',
        'account_expense_cost',
        'account_inventory_adjustment',
        'code_bar',
        'code_alternate',
        'brand',
        'manufacturer',
        'manufacturer_number',
        'status',
        //nuevo
        'imagen',
        'id_abc_value',
        'id_costo_model',
        'density',
        'id_inventory_type',
        'itemdimcostprice',
        'namealias',
        'id_packing',
        'taraweight',
        'unidad_PO',
        'unidad_IN',
        'unidad_SA',
        'lead_time',
        'loteserie',
        'death_time',
        'id_primary_vendor',
        //nuevo parte 2
        'forecast',
        'safety_stock_minus',
        'safety_stock_max',
        'lot',
        'series'
    ];

}
