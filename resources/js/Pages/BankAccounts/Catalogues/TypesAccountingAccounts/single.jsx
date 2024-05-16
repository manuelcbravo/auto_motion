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

// ----------------------------------------------------------------------------------------> DataPage
    const { getData, RouteTrace, RouteStore, CatAccountType, CatYesNo } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id: getData.id || '',
        id_class: getData.id_class ||'',
        name:  getData.name ||'',
        id_class_type: getData.id_class_type ||'',
        status:  getData.status ||''
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
                    <Input col="col-6" type="text" label="Id de clase" name="id_class" errors={errors.id_class} value={data.id_class} onChange={e => setData('id_class', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre de clase" name="name" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <div className="col-lg-6">
                        <Select label="Tipo de cuenta" name="id_class_type" items={CatAccountType} errors={errors.id_class_type} value={data.id_class_type} onChange={e => setData('id_class_type', e.target.value)}/>
                    </div>
                    <div className="col-lg-6">
                        <Select label="Activo" name="status" items={CatYesNo} errors={errors.status} value={data.status} onChange={e => setData('status', e.target.value)}/>
                    </div>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;