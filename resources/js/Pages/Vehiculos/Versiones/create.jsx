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
    const { getData, RouteTrace, RouteStore, SelectMarcaModelo} = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id: getData.id || '',
        nombre: getData.nombre || '',
        id_marca: getData.id_marca || '',
        id_modelo: getData.id_modelo || '',
    });

    console.log(SelectMarcaModelo);

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

                    <Select col="col-6" label="Marca" name="id_marca" items={SelectMarcaModelo['marca']}
                            errors={errors.id_marca}
                            value={data.id_marca}
                            onChange={e => setData('id_marca', e.target.value)}/>

                    <Select col="col-6" label="Modelo" name="id_modelo" items={SelectMarcaModelo['modelo']}
                            errors={errors.id_modelo}
                            value={data.id_modelo}
                            onChange={e => setData('id_modelo', e.target.value)}/>
                            
                    <Input col="col-12" type="text" label="Nombre" name="nombre" errors={errors.nombre} value={data.nombre}
                           onChange={e => setData('nombre', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;