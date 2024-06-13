<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EvaluacionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nombre' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'celular' => 'required|string|max:255',
            'id_tipo_evaluacion' => 'required|integer', // Ajusta las reglas según tu validación
            'id_vendedor' => 'required',
            'id_marca' => 'required',
            'id_modelo' => 'required',
            'id_version' => 'required',
            'vin' => 'nullable|string|max:255',
            'dinero_expectativa' => 'required|numeric',
            'observacion_primer_comentario' => 'nullable|string', // Ajusta las reglas según tu validación
        ];
        
    }
}
