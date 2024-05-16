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
    const { getData, RouteTrace, RouteStore, Coins } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id: getData.id || '',
        start_date: getData.start_date || '',
        exchange_rate: getData.exchange_rate || '',
        id_coin: getData.id_coin || ''
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
                    <Input col="col-6" type="text" label="Tipo de cambio" name="exchange_rate" errors={errors.exchange_rate} value={data.exchange_rate} onChange={e => setData('exchange_rate', e.target.value)}/>
                    <Input col="col-6" type="date" label="Usar fecha desde" name="start_date" errors={errors.start_date} value={data.start_date} onChange={e => setData('start_date', e.target.value)}/>
                    <div className="col-lg-6">
                        <Select label="Moneda" name="id_coin" items={Coins} errors={errors.id_coin} value={data.id_coin} onChange={e => setData('id_coin', e.target.value)}/>
                    </div>                
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;