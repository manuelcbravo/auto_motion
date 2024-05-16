import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Input from "@/Components/Template/Form/Input.jsx";
import LoadingButton from "@/Components/Template/Form/LoadingButton.jsx";

export default function LoginOld({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <div className="card-body">
                <a href="#" className="text-nowrap logo-img text-center d-block mb-5 w-100">
                    <img src="assets/images/svg/logo-text.svg" width="100" alt=""/>
                </a>
                <div className="position-relative text-center my-4">
                    <p className="mb-0 fs-4 px-3 d-inline-block bg-white text-dark z-index-5 position-relative">Iniciar sesión</p>
                    <span className="border-top w-100 position-absolute top-50 start-50 translate-middle"></span>
                </div>
                <form onSubmit={submit}>
                    <div className="mb-2">
                        <Input type="email" label="Email" name="email" errors={errors.email} value={data.email} onChange={e => setData('email', e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <Input type="password" label="Contraseña" name="password" errors={errors.password} value={data.password} onChange={e => setData('password', e.target.value)}/>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="form-check">
                            <input className="form-check-input primary" type="checkbox" name="remember" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)}/>
                            <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                                Recordar este dispositivo
                            </label>
                        </div>
                    </div>
                    <div className="">
                        <LoadingButton loading={processing} type="submit" className="btn btn-primary w-100 py-8 mb-4 rounded-2">
                            Iniciar sesión
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
