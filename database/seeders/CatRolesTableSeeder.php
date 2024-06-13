<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CatRolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cat_roles')->delete();
        
        \DB::table('cat_roles')->insert(array (
            0 => 
            array (
                'id' => 0,
                'nombre' => 'Desarrollo',
                'descripcion' => 'd',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 1,
                'nombre' => 'Gerente general',
                'descripcion' => 'gg',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 2,
                'nombre' => 'Gerente sucursal',
                'descripcion' => 'gs',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 3,
                'nombre' => 'Vendedor',
                'descripcion' => 'v',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}