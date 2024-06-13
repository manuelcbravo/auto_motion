<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CatEstatusEvaluacionesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('cat_estatus_evaluaciones')->delete();
        
        \DB::table('cat_estatus_evaluaciones')->insert(array (
            0 => 
            array (
                'id' => 1,
                'nombre' => 'Evaluación iniciada',
            ),
            1 => 
            array (
                'id' => 2,
                'nombre' => 'Evaluación completada',
            ),
            2 => 
            array (
                'id' => 3,
                'nombre' => 'Compra',
            ),
            3 => 
            array (
                'id' => 4,
                'nombre' => 'Reventa',
            ),
            4 => 
            array (
                'id' => 5,
                'nombre' => 'Desactivar',
            ),
            5 => 
            array (
                'id' => 6,
                'nombre' => 'Reintegrar',
            ),
        ));
        
        
    }
}