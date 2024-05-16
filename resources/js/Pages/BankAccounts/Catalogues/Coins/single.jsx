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
    Title = 'Nueva moneda';

// ----------------------------------------------------------------------------------------> DataPage
    const { getData, RouteTrace, RouteNew, CatYesNo } = usePage().props;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id: getData.id || '',
        abbreviation: getData.abbreviation || '',
        symbol: getData.symbol ||'',
        currency_name: getData.currency_name|| '',
        cent_name:  getData.cent_name || '',
        country: getData.country || '',
        update_interval: getData.update_interval || '',
        banxico_code: getData.banxico_code || '',
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
                    <Input col="col-6" type="text" label="Abreviatura de moneda" name="abbreviation" errors={errors.abbreviation} value={data.abbreviation} onChange={e => setData('abbreviation', e.target.value)}/>
                    <Input col="col-6" type="text" label="Símbolo de moneda" name="symbol" errors={errors.symbol} value={data.symbol} onChange={e => setData('symbol', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre de la moneda" name="currency_name" errors={errors.currency_name} value={data.currency_name} onChange={e => setData('currency_name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre de los céntimos" name="cent_name" errors={errors.cent_name} value={data.cent_name} onChange={e => setData('cent_name', e.target.value)}/>
                    <Input col="col-6" type="text" label="País" name="country" errors={errors.country} value={data.country} onChange={e => setData('country', e.target.value)}/>
                    <div className="col-lg-6">
                        <Select label="Actualización automatica" name="update_interval" items={CatYesNo} errors={errors.update_interval} value={data.update_interval} onChange={e => setData('update_interval', e.target.value)}/>
                    </div>
                    {(data.update_interval === '1' || getData.update_interval === 1) && (
                        <Input col="col-6" type="text" label="Código banxico" name="banxico_code" errors={errors.banxico_code} value={data.banxico_code} onChange={e => setData('banxico_code', e.target.value)} />
                    )}
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;