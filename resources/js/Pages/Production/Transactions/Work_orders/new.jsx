import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import CardForm from "@/Components/Template/Card/CardForm.jsx";
import Input from '@/Components/Template/Form/Input.jsx'

// Settings
let Title;

const Index = () => {
    console.log(usePage().props);
    Title = 'New Work Order';

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace } = usePage().props;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        name: ''
    });

    /// Store
    function handleSubmit(e) {
        e.preventDefault();
    }

// ----------------------------------------------------------------------------------------> Render Page
    return (
        // Module Title
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            <CardForm NameForm={handleSubmit} Processing={processing} Inputs={
                <div className="row">
                    <h6 className="mb-4">Información general</h6>
                    <Input col="col-6" type="text" label="Referencia" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Tipo" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Tipo de orden de trabajo" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Artículo/servicio" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Almacén destino" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Cantidad" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Fecha" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Costo laboral" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Cuenta de crédito de trabajo" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Gastos generales" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Cuenta de crédito de gastos generales" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Comentario" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;