import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import CardForm from "@/Components/Template/Card/CardForm.jsx";
import Input from '@/Components/Template/Form/Input.jsx'
import Select from "@/Components/Template/Form/Select.jsx";
import TextArea from "@/Components/Template/Form/TextArea.jsx";
import {useEffect, useRef, useState} from "react";
import {Wrapper} from "@googlemaps/react-wrapper";

// Settings
let Title;

const Index = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { getData, RouteTrace, RouteStore, SelectRol, SelectYesNo } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id: getData.id || '',
        nombres: getData.nombres || '',
        apellidos: getData.apellidos || '',
        telefono: getData.telefono || '',
        email: getData.email || '',
        password_plain: getData.password_plain || '',
        id_rol: getData.id_rol || '',
        status: getData.status || '',
    });

    /// Store
    function handleSubmit(e) {
        e.preventDefault();
        post(route(RouteStore));
    }
    
// ----------------------------------------------------------------------------------------> Render Page
    return (
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            <CardForm NameForm={handleSubmit} Processing={processing} Inputs={
                <div className="row">

                    <h6 className="mb-4">Información general</h6>
                    <Input col="col-6" type="text" label="Nombres" name="nombres" errors={errors.nombres} value={data.nombres}
                        onChange={e => setData('nombres', e.target.value)}/>

                    <Input col="col-6" type="text" label="Apellidos" name="apellidos" errors={errors.apellidos} value={data.apellidos}
                        onChange={e => setData('apellidos', e.target.value)}/>

                    <Input col="col-6" type="text" label="Teléfono" name="telefono" errors={errors.telefono} value={data.telefono}
                        onChange={e => setData('telefono', e.target.value)}/>  

                    <h6 className="mb-4">Credenciales de acceso</h6>
                    <Input col="col-6" type="text" label="Email" name="email" errors={errors.email} value={data.email}
                        onChange={e => setData('email', e.target.value)}/>

                    <Input col="col-6" type="password" label="Contraseña" name="password_plain" errors={errors.password_plain} value={data.password_plain}
                        onChange={e => setData('password_plain', e.target.value)}/>

                    <Select col="col-6" label="Rol" name="id_rol" items={SelectRol}
                        errors={errors.id_rol}
                        value={data.id_rol}
                        onChange={e => setData('id_rol', e.target.value)}/> 
                        
                    <Select col="col-6" label="Habilidado" name="status" items={SelectYesNo}
                        errors={errors.status}
                        value={data.status}
                        onChange={e => setData('status', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;