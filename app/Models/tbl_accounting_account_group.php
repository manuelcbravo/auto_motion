<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class tbl_accounting_account_group extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'id_class', 
        'name',
        'subgroup',
        'id_account_type',
        'status',
    ];
}
