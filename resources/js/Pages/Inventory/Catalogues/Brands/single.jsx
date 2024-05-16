import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import CardForm from "@/Components/Template/Card/CardForm.jsx";
import Input from '@/Components/Template/Form/Input.jsx'
import Select from "@/Components/Template/Form/Select.jsx";

// Settings
let Title;

const Index = () => {
    Title = 'New accounting accounts';

// ----------------------------------------------------------------------------------------> DataPage
    const { getData, RouteTrace, RouteStore } = usePage().props;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id: getData.id || '',
        name: getData.name || '',
        brand: getData.brand || '',

    });

    /// Store
    function handleSubmit(e) {
        e.preventDefault();
        post(route(RouteStore));
    }

// ----------------------------------------------------------------------------------------> Render Page
    return (
        // Module Title
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            <CardForm NameForm={handleSubmit} Processing={processing} Inputs={
                <div className="row">
                    <Input col="col-6" type="text" label="Marca" name="brand" errors={errors.brand} value={data.brand} onChange={e => setData('brand', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre" name="name" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;