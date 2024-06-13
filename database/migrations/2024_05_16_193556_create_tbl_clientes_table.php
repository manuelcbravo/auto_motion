<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tbl_clientes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nombre')->nullable();
            $table->date('fecha_nacimiento')->nullable();

            //direccion
            $table->string('estado')->nullable();
            $table->string('municipio')->nullable();
            $table->string('colonia')->nullable();
            $table->string('calle')->nullable();
            $table->string('interior')->nullable();
            $table->string('exterior')->nullable();
            $table->string('cp')->nullable();

            //contacto
            $table->string('celular')->nullable();
            $table->string('oficina')->nullable();
            $table->string('casa')->nullable();
            $table->string('email')->nullable();
            $table->string('correo2')->nullable();

            //datos extra
            $table->string('imagen_perfil')->nullable();
            $table->uuid('id_usuario_reg')->nullable();
            $table->text('comentario')->nullable();
            $table->integer('genero')->nullable()->comment('1 para hombre, 2 para mujer');
            
            // fin
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_clientes');
    }
};
