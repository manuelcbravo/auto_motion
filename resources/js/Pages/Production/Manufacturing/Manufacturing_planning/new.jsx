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
    Title = 'New BOM';

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
                    <Input col="col-6" type="text" label="Componente" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Extraer de ubicación" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Área de Producción Adicionada" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Cantidad" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Referencia" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;