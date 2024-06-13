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
        nombre: getData.nombre || '',
        direccion: getData.direccion || '',
        telefono: getData.telefono || '',
        email: getData.email || '',
        encargado: getData.encargado || '',
        encargado_telefono: getData.encargado_telefono || '',
        encargado_email: getData.encargado_email || '',
        estatus: getData.estatus || '',
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
                    <Input col="col-6" type="text" label="Nombres empresa" name="nombre" errors={errors.nombre} value={data.nombre}
                        onChange={e => setData('nombre', e.target.value)}/>

                    <Input col="col-6" type="text" label="Dirección" name="direccion" errors={errors.direccion} value={data.direccion}
                        onChange={e => setData('direccion', e.target.value)}/>
                    
                    <Input col="col-6" type="text" label="Teléfono" name="telefono" errors={errors.telefono} value={data.telefono}
                        onChange={e => setData('telefono', e.target.value)}/>
                    
                    <Input col="col-6" type="text" label="Email" name="email" errors={errors.email} value={data.email}
                        onChange={e => setData('email', e.target.value)}/>

                    <h6 className="mb-4">Información Encargado</h6>

                    <Input col="col-6" type="text" label="Nombre" name="encargado" errors={errors.encargado} value={data.encargado}
                        onChange={e => setData('encargado', e.target.value)}/>

                    <Input col="col-6" type="text" label="Teléfono" name="encargado_telefono" errors={errors.encargado_telefono} value={data.encargado_telefono}
                        onChange={e => setData('encargado_telefono', e.target.value)}/>  

                    <Input col="col-6" type="text" label="Email" name="encargado_email" errors={errors.encargado_email} value={data.encargado_email}
                        onChange={e => setData('encargado_email', e.target.value)}/>
                    <br></br>
                    <h6 className="mb-4">Acceso</h6>

                    <Select col="col-6" label="Habilidado" name="estatus" items={SelectYesNo}
                        errors={errors.estatus}
                        value={data.estatus}
                        onChange={e => setData('estatus', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;