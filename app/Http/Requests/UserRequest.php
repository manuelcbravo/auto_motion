<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
            'nombres' => 'required|string|max:255',
            'apellidos' => 'required|string|max:255',
            'id_rol' => 'required',
            'telefono' => 'required',
            'email' => [ 
                'required',
                'email',
                Rule::unique('users', 'email')->ignore($this->route('id'))->whereNull('deleted_at'),
            ],
            'password_plain' => 'required|min:8',
        ];
    }

    public function messages(): array
    {
        return ['email.unique' => 'El correo ya está en uso.',
            'password_plain.min' => 'La contraseña debe tener al menos :min caracteres.',
            'password_plain.regex' => 'El formato de la contraseña no es válido.'];

    }
}
