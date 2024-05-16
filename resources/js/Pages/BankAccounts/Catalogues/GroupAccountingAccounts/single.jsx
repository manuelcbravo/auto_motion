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
    Title = 'New accounting account groups';

// ----------------------------------------------------------------------------------------> DataPage
    const { getData, RouteTrace, RouteNew, CatSubGroup, CatClass, CatYesNo } = usePage().props;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id: getData.id || '',
        id_class: getData.id_class || '',
        name: getData.name || '',
        subgroup: getData.subgroup || '',
        id_account_type: getData.id_account_type || '',
        status: getData.status|| ''
    });

    /// Store
    function handleSubmit(e) {
        e.preventDefault();
        post(route(RouteNew));

    }

// ----------------------------------------------------------------------------------------> Render Page
    return (
        // Module Title
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            <CardForm NameForm={handleSubmit} Processing={processing} Inputs={
                <div className="row">
                    <Input col="col-6" type="text" label="ID de grupo" name="id_class" errors={errors.id_class} value={data.id_class} onChange={e => setData('id_class', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre" name="name" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <div className="col-lg-6">
                        <Select label="Subgrupo de" name="subgroup" items={CatSubGroup} errors={errors.subgroup} value={data.subgroup} onChange={e => setData('subgroup', e.target.value)} module={'group_accounts.show'}/>
                    </div>
                    <div className="col-lg-6">
                        <Select label="Clase" name="id_account_type" items={CatClass} errors={errors.id_account_type} value={data.id_account_type} onChange={e => setData('id_account_type', e.target.value)}/>
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