<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CatTipoEvaluacionesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cat_tipo_evaluaciones')->delete();
        
        \DB::table('cat_tipo_evaluaciones')->insert(array (
            0 => 
            array (
                'id' => 1,
                'nombre' => 'Compra',
            ),
            1 => 
            array (
                'id' => 2,
                'nombre' => 'Tomar a cuenta por nuevo',
            ),
            2 => 
            array (
                'id' => 3,
                'nombre' => 'Toma a cuenta por seminuevo',
            ),
            3 => 
            array (
                'id' => 4,
                'nombre' => 'Venta flotilla',
            ),
        ));
        
        
    }
}