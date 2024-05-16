import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import CardForm from "@/Components/Template/Card/CardForm.jsx";
import Input from '@/Components/Template/Form/Input.jsx'
import Select from "@/Components/Template/Form/Select.jsx";
import TextArea from "@/Components/Template/Form/TextArea.jsx";

// Settings
let Title;

const Index = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { getData, RouteTrace, RouteStore, catType, catTransferRetention } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id:                    getData.id || '',
        key:                   getData.key || '',
        name:                  getData.name || '',
        transferRetention:     getData.transferRetention || '',
        type:                  getData.type || ''
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
                    <Input col="col-6" type="text" label="Clave" name="key" errors={errors.key} value={data.key}
                           onChange={e => setData('key', e.target.value)}/>
                    <Select col="col-6" label="Traslado ó Retención" name="transferRetention" items={catTransferRetention} errors={errors.transferRetention}
                            value={data.transferRetention}
                            onChange={e => setData('transferRetention', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre" name="name" errors={errors.name}
                              value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Select col="col-6" label="Tipo" name="type" items={catType} errors={errors.type}
                            value={data.type}
                            onChange={e => setData('type', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;