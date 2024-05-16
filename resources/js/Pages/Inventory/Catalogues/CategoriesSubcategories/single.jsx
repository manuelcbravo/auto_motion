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
    const { getData, RouteTrace, RouteStore, catTypeProductService, catMeasureUnit, catAccountingAccount } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id:                             getData.id || '',
        name:                           getData.name || '',
        unit_measure:                   getData.unit_measure || '',
        type:                           getData.type || '',
        id_parent:                      getData.id_parent || 0,
        level:                          getData.level || 0,
        account_sales:                  getData.account_sales || '',
        account_inventory:              getData.account_inventory || '',
        account_expense_cost:           getData.account_expense_cost || '',
        account_inventory_adjustment:   getData.account_inventory_adjustment || '',
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

                    <h6 className="mb-4">Información general</h6>
                    <Select col="col-6" label="Tipo" name="type" items={catTypeProductService} errors={errors.type}
                            value={data.type}
                            onChange={e => setData('type', e.target.value)}/>
                    <Select col="col-6" label="Unidad de medida" name="unit_measure" items={catMeasureUnit}
                            errors={errors.unit_measure}
                            value={data.unit_measure}
                            onChange={e => setData('unit_measure', e.target.value)}/>
                    <Input col="col-12" type="text" label="Nombre" name="name" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>

                    <hr className="pb-2"/>

                    <h6 className="mb-4">Cuentas contables</h6>
                    <Select col="col-6" label="Cuenta de Ventas" name="account_sales" items={catAccountingAccount}
                            errors={errors.account_sales}
                            value={data.account_sales}
                            onChange={e => setData('account_sales', e.target.value)}/>
                    <Select col="col-6" label="Cuenta de Inventario" name="account_inventory" items={catAccountingAccount}
                            errors={errors.account_inventory}
                            value={data.account_inventory}
                            onChange={e => setData('account_inventory', e.target.value)}/>
                    <Select col="col-6" label="Cuenta de Gasto o Costo de Venta" name="account_expense_cost" items={catAccountingAccount}
                            errors={errors.account_expense_cost}
                            value={data.account_expense_cost}
                            onChange={e => setData('account_expense_cost', e.target.value)}/>
                    <Select col="col-6" label="Cuenta de Ajustes de Inventario" name="account_inventory_adjustment"
                            items={catAccountingAccount}
                            errors={errors.account_inventory_adjustment}
                            value={data.account_inventory_adjustment}
                            onChange={e => setData('account_inventory_adjustment', e.target.value)}/>

                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;