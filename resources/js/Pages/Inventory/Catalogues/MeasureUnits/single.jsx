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
    const { getData, RouteTrace, RouteStore, catNumDecimals } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id:             getData.id || '',
        abbreviation:   getData.abbreviation || '',
        name:           getData.name || '',
        unit_measure:   getData.unit_measure || '',
        num_decimals:   getData.num_decimals || ''
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
                    <Input col="col-6" type="text" label="Abreviatura" name="abbreviation" errors={errors.abbreviation}
                           value={data.abbreviation}
                           onChange={e => setData('abbreviation', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre" name="name" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Select col="col-6" label="Numero de decimales" name="num_decimals" items={catNumDecimals} errors={errors.num_decimals}
                            value={data.num_decimals}
                            onChange={e => setData('num_decimals', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;