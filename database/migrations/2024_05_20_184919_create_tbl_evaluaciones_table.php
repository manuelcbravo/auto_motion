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
        Schema::create('tbl_evaluaciones', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('id_vendedor');
            $table->uuid('id_cliente');
            $table->integer('id_tipo_evaluacion');
            $table->integer('id_estatus_evaluacion');
            $table->uuid('id_modelo');
            $table->uuid('id_marca');
            $table->uuid('id_version');
            $table->string('vin')->nullable();
            $table->double('dinero_expectativa', 8, 2);
            $table->text('observacion_primer_comentario')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tbl_evaluaciones');
    }
};
