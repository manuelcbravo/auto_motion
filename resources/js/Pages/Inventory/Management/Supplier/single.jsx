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
    const { getData, RouteTrace, RouteStore, CatGroup, Coins, SupplierType, deliveryTimeOptions } = usePage().props;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id: getData.id || '',
        name: getData.name || '',
        short_name: getData.short_name || '',
        tax_code: getData.tax_code || '',
        currency_id: getData.currency_id || '',
        customer_number: getData.customer_number || '',
        customer_category: getData.customer_category || '',
        delivery_time: getData.delivery_time || '',
        payable_account: getData.payable_account || '',
        primary_purchase_expense_account: getData.primary_purchase_expense_account || '',
        secondary_purchase_expense_account: getData.secondary_purchase_expense_account || '',
        discount_account: getData.discount_account || '',
        postal_code: getData.postal_code || '',
        fiscal_address: getData.fiscal_address || '',
        contact_person: getData.contact_person || '',
        primary_phone: getData.primary_phone || '',
        secondary_phone: getData.secondary_phone || '',
        mobile_phone: getData.mobile_phone || '',
        email: getData.email || ''
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
                    <h6 className="mb-4">Información general</h6>
                    <Input col="col-6" type="text" label="Nombre" name="name" errors={errors.name} value={data.name} onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre corto" name="short_name" errors={errors.short_name} value={data.short_name} onChange={e => setData('short_name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Código fiscal" name="tax_code" errors={errors.tax_code} value={data.tax_code} onChange={e => setData('tax_code', e.target.value)}/>
                    <div className="col-lg-6">
                        <Select label="Moneda" name="currency_id" items={Coins} errors={errors.currency_id} value={data.currency_id} onChange={e => setData('currency_id', e.target.value)}/>
                    </div>
                    <Input col="col-6" type="text" label="Número de cliente" name="customer_number" errors={errors.customer_number} value={data.customer_number} onChange={e => setData('customer_number', e.target.value)}/>
                    <div className="col-lg-6">
                        <Select label="Categoría de cliente" name="customer_category" items={SupplierType} errors={errors.customer_category} value={data.customer_category} onChange={e => setData('customer_category', e.target.value)}/>
                    </div>
                    <div className="col-lg-6">
                        <Select label="Tiempo de entrega" name="delivery_time" items={deliveryTimeOptions} errors={errors.delivery_time} value={data.delivery_time} onChange={e => setData('delivery_time', e.target.value)}/>
                    </div>
                    <div className="col-lg-6"></div>
                    <hr></hr>
                    <h6 className="mb-4">Cuentas</h6>
                    
                    <div className="col-lg-6">
                        <Select label="Cuenta por pagar" name="payable_account" items={CatGroup} errors={errors.payable_account} value={data.payable_account} onChange={e => setData('payable_account', e.target.value)}/>
                    </div>
                    <div className="col-lg-6">
                        <Select label="Cuenta de gastos principal de compras" name="primary_purchase_expense_account" items={CatGroup} errors={errors.primary_purchase_expense_account} value={data.primary_purchase_expense_account} onChange={e => setData('primary_purchase_expense_account', e.target.value)}/>
                    </div>
                    <div className="col-lg-6">
                        <Select label="Cuenta de gastos secundaria de compras" name="secondary_purchase_expense_account" items={CatGroup} errors={errors.secondary_purchase_expense_account} value={data.secondary_purchase_expense_account} onChange={e => setData('secondary_purchase_expense_account', e.target.value)}/>
                    </div>
                    <div className="col-lg-6">
                        <Select label="Cuenta de descuentos" name="discount_account" items={CatGroup} errors={errors.CatGroup} value={data.discount_account} onChange={e => setData('discount_account', e.target.value)}/>
                    </div>
                    <hr></hr>
                    <h6 className="mb-4">Dirección fiscal</h6>

                    <Input col="col-6" type="text" label="Código postal" name="postal_code" errors={errors.postal_code} value={data.postal_code} onChange={e => setData('postal_code', e.target.value)}/>
                    <Input col="col-6" type="text" label="Dirección fiscal" name="fiscal_address" errors={errors.fiscal_address} value={data.fiscal_address} onChange={e => setData('fiscal_address', e.target.value)}/>
                    <hr></hr>
                    <h6 className="mb-4">Datos de contacto</h6>

                    <Input col="col-6" type="text" label="Persona de contacto" name="contact_person" errors={errors.contact_person} value={data.contact_person} onChange={e => setData('contact_person', e.target.value)}/>
                    <Input col="col-6" type="text" label="Teléfono principal" name="primary_phone" errors={errors.primary_phone} value={data.primary_phone} onChange={e => setData('primary_phone', e.target.value)}/>
                    <Input col="col-6" type="text" label="Teléfono secundario" name="secondary_phone" errors={errors.secondary_phone} value={data.secondary_phone} onChange={e => setData('secondary_phone', e.target.value)}/>
                    <Input col="col-6" type="text" label="Celular" name="mobile_phone" errors={errors.mobile_phone} value={data.mobile_phone} onChange={e => setData('mobile_phone', e.target.value)}/>
                    <Input col="col-6" type="text" label="Email" name="email" errors={errors.email} value={data.email} onChange={e => setData('email', e.target.value)}/>       

                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;