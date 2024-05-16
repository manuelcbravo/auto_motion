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
                    <Input col="col-6" type="text" label="Código de artículo" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Descripción de artículo" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Cantidad" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Requerido para fecha" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Comentario" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;