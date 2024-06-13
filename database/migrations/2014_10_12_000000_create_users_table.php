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
        Schema::create('users', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nombres');
            $table->string('apellidos');
            $table->string('email')->unique();
            $table->string('telefono');
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('password_plain')->nullable();
            $table->integer('id_rol')->default(0);
            $table->string('tipo_consultor')->default(0);
            $table->integer('status')->default(1)->comment('1 activado, 2 desactivado');
            $table->string('api_token', 80)->after('password')->unique()->nullable()->default(null);
            $table->rememberToken();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
