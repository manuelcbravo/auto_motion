<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class catCategoriesSubcategories extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'name',
        'unit_measure',
        'type',
        'id_parent',
        'level',
        'account_sales',
        'account_inventory',
        'account_expense_cost',
        'account_inventory_adjustment'
    ];

    public function parent(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(catCategoriesSubcategories::class, 'id_parent');
    }

    public function children(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(catCategoriesSubcategories::class, 'id_parent')->with('children');
    }
}
