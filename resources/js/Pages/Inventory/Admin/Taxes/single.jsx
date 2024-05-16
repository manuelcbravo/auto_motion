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
    const { getData, RouteTrace, RouteStore, catAccountingAccount, catTypeTaxes } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id:                             getData.id || '',
        name:                           getData.name || '',
        rate:                           getData.rate || '',
        account_sales:                  getData.account_sales || '',
        account_sales_paid:             getData.account_sales_paid || '',
        account_purchases_expenses:     getData.account_purchases_expenses || '',
        account_purchases_expenses_paid:getData.account_purchases_expenses_paid || '',
        account_tax:                    getData.account_tax || '',
        tax_rate:                       getData.tax_rate || ''
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
                    <Input col="col-6" type="text" label="Nombre" name="name" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Tasa %" name="rate" errors={errors.rate} value={data.rate}
                           onChange={e => setData('rate', e.target.value)}/>
                    <Select col="col-6" label="Tipo Impuesto" name="tax_rate" items={catTypeTaxes}
                            errors={errors.tax_rate}
                            value={data.tax_rate}
                            onChange={e => setData('tax_rate', e.target.value)}/>

                    <hr className="pb-2"/>

                    <h6 className="mb-4">Cuentas contables</h6>
                    <Select col="col-6" label="Cuenta de Ventas" name="account_sales" items={catAccountingAccount}
                            errors={errors.account_sales}
                            value={data.account_sales}
                            onChange={e => setData('account_sales', e.target.value)}/>
                    <Select col="col-6" label="Cuenta de Ventas Pagadas" name="account_sales_paid" items={catAccountingAccount}
                            errors={errors.account_sales_paid}
                            value={data.account_sales_paid}
                            onChange={e => setData('account_sales_paid', e.target.value)}/>
                    <Select col="col-6" label="Cuenta de Compras/Gastos" name="account_purchases_expenses"
                            items={catAccountingAccount}
                            errors={errors.account_purchases_expenses}
                            value={data.account_purchases_expenses}
                            onChange={e => setData('account_purchases_expenses', e.target.value)}/>
                    <Select col="col-6" label="Cuenta de Compras/Gastos Pagadas" name="account_purchases_expenses_paid"
                            items={catAccountingAccount}
                            errors={errors.account_purchases_expenses_paid}
                            value={data.account_purchases_expenses_paid}
                            onChange={e => setData('account_purchases_expenses_paid', e.target.value)}/>
                    <Select col="col-6" label="Cuenta de impuestos" name="account_tax"
                            items={catAccountingAccount}
                            errors={errors.account_tax}
                            value={data.account_tax}
                            onChange={e => setData('account_tax', e.target.value)}/>

                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;