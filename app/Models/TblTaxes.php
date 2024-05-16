<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TblTaxes extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'rate',
        'tax_rate',
        'account_sales',
        'account_sales_paid',
        'account_purchases_expenses',
        'account_purchases_expenses_paid',
        'account_tax',
    ];
}
