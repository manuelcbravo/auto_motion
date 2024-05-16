<?php
namespace App\Http\Traits;

use Illuminate\Support\Facades\Request;

// Models

trait CataloguesTrait{


    public function cat_yes_no(): array
    {
        return [
            ["id" => 1, "name" => "Si"],
            ["id" => 2, "name" => "No"]
        ];
    }

    public function cat_status(): array
    {
        return [
            ["id" => 1, "name" => 'Activo'],
            ["id" => 2, "name" => 'Inactivo']
        ];
    }
}
