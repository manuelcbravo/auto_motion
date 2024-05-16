<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class tbl_accounting_account_type extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'id_class', 
        'name', 
        'id_class_type', 
        'status',
    ];
}
