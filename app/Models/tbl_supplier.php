<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_supplier extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'name',
        'short_name',
        'tax_code',
        'currency_id',
        'customer_number',
        'customer_category',
        'delivery_time',
        'payable_account',
        'primary_purchase_expense_account',
        'secondary_purchase_expense_account',
        'discount_account',
        'postal_code',
        'fiscal_address',
        'contact_person',
        'primary_phone',
        'secondary_phone',
        'mobile_phone',
        'email',
    ];
}
