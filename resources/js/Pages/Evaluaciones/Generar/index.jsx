import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import CardForm from "@/Components/Template/Card/CardForm.jsx";
import Input from '@/Components/Template/Form/Input.jsx'
import Select from "@/Components/Template/Form/Select.jsx";
import TextArea from "@/Components/Template/Form/TextArea.jsx";
import {useEffect, useRef, useState} from "react";

// Settings
let Title;

const Index = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { getData, RouteTrace, RouteStore, CatTipoCompra, CatVendedores, CatMarca, CatModelo, CatVersion } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id: '',
        nombre:  '',
        celular: '',
        email: '',
        id_tipo_evaluacion: '',
        id_vendedor: '',
        id_modelo: '',
        id_marca: '',
        id_version: '',
        vin: '',
        expectativa_cliente: '',
        observacion_primer_comentario: ''
    });

    const [catVersion, setCatVersion] = useState([]);
    const [showVersion, setShowVersion] = useState(false);

    useEffect(() => {
        if (data.id_marca && data.id_modelo) {
            // Llamar a la API para obtener las versiones
            axios.get(route('versiones.all', { id_marca: data.id_marca, id_modelo: data.id_modelo }))
                .then(response => {
                    setCatVersion(response.data);
                    setShowVersion(true);
                })
                .catch(error => {
                    console.error("Error al obtener versiones:", error);
                    setShowVersion(false);
                });
        } else {
            setShowVersion(false);
        }
    }, [data.id_marca, data.id_modelo]);

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

                    <h6 className="mb-4">Evaluación</h6>
                    <Select col="col-4" label="Tipo de evaluación" name="id_tipo_evaluacion" items={CatTipoCompra}
                        errors={errors.id_tipo_evaluacion}
                        value={data.id_tipo_evaluacion}
                        onChange={e => setData('id_tipo_evaluacion', e.target.value)}/>

                    <Select col="col-4" label="Vendedor" name="id_vendedor" items={CatVendedores}
                        errors={errors.id_vendedor}
                        value={data.id_vendedor}
                        onChange={e => setData('id_vendedor', e.target.value)}/>
                           
                    <h6 className="mb-4">Datos del cliente</h6>
                    <Input col="col-4" type="text" label="Nombre" name="nombre" errors={errors.nombre} value={data.nombre}
                        onChange={e => setData('nombre', e.target.value)}/>
                    <Input col="col-4" type="text" label="Email" name="email" errors={errors.email} value={data.email}
                        onChange={e => setData('email', e.target.value)}/>
                    <Input col="col-4" type="text" label="Teléfono" name="celular" errors={errors.celular} value={data.celular}
                        onChange={e => setData('celular', e.target.value)}/>
                    
                    <h6 className="mb-4">Vehículo</h6>
                    <Select col="col-3" label="Año" name="id_modelo" items={CatModelo}
                        errors={errors.id_modelo}
                        value={data.id_modelo}
                        onChange={e => setData('id_modelo', e.target.value)}/>
                    <Select col="col-3" label="Marca" name="id_marca" items={CatMarca}
                        errors={errors.id_marca}
                        value={data.id_marca}
                        onChange={e => setData('id_marca', e.target.value)}/>
                    {showVersion && (
                        <Select col="col-6" label="Version" name="id_version" items={catVersion}
                            errors={errors.id_version}
                            value={data.id_version}
                            onChange={e => setData('id_version', e.target.value)} />
                    )}
                    <Input col="col-6" type="text" label="VIN" name="vin" errors={errors.vin} value={data.vin}
                        onChange={e => setData('vin', e.target.value)}/>
                    <Input col="col-6" type="text" label="Expectativa del cliente" name="dinero_expectativa" errors={errors.dinero_expectativa} value={data.dinero_expectativa}
                        onChange={e => setData('dinero_expectativa', e.target.value)}/>

                    <TextArea col="col-12" label="Observaciones" name="observacion_primer_comentario" errors={errors.observacion_primer_comentario}
                            value={data.observacion_primer_comentario} onChange={e => setData('observacion_primer_comentario', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;