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
    const { getData, RouteTrace, RouteNew, CatGroup, CatYesNo } = usePage().props;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id: getData.id || '',
        account_code: getData.account_code || '',
        tax_code: getData.tax_code ||'',
        name: getData.name ||'',
        bank: getData.bank ||'',
        id_group: getData.id_group ||'',
        status: getData.status ||''
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
                    <Input col="col-6" type="text" label="Código de cuenta" name="account_code" errors={errors.account_code} value={data.account_code} onChange={e => setData('account_code', e.target.value)}/>
                    <Input col="col-6" type="text" label="Código fiscal" name="tax_code" errors={errors.tax_code} value={data.tax_code} onChange={e => setData('tax_code', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre de cuenta" name="fuente" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Banco" name="fuente" errors={errors.bank} value={data.bank} onChange={e => setData('bank', e.target.value)}/>
                    <div className="col-lg-6">
                        <Select label="Grupo de cuenta" name="id_group" items={CatGroup} errors={errors.id_group} value={data.id_group} onChange={e => setData('id_group', e.target.value)}/>
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