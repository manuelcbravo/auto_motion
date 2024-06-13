<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \DB::table('users')->delete();

        \DB::table('users')->insert(array (
            0 =>
                array (
                    'id' => '00000000-0000-0000-0000-000000000000',
                    'apellidos' => 'auto_motion',
                    'email' => 'admin@fielgroup.com.mx',
                    'email_verified_at' => NULL,
                    'password' => '$2y$10$v2Ykqt8tZFwHM9uGcTuFlez5Nnj5V0ydQqZjMzD/TZk7EFNbz6f0e',
                    'password_plain' => '12345678',
                    'status' => 1,
                    'api_token' => NULL,
                    'remember_token' => NULL,
                    'deleted_at' => NULL,
                    'created_at' => '2023-10-11 02:07:26',
                    'updated_at' => '2023-10-11 02:07:26',
                    'nombres' => 'Admin',
                    'tipo_consultor' => 0,
                    'telefono' => '771',
                    'id_rol' => 0,
                ),
        ));
    }
}
