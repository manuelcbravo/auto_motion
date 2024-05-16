<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class tbl_accounting_account extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'account_code', 
        'tax_code', 
        'name', 
        'id_group', 
        'status',
        'bank'
    ];
}
