import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import TableShow from "@/Components/Template/Table/TableShow.jsx";

// Settings
let Title;

const Show = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, RouteNew, RouteEdit, DataTableHeader, DATA } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    const dataTableBody = DATA.data.map(({ id, name, account_sales, account_sales_paid, account_purchases_expenses, account_purchases_expenses_paid, account_tax, rate, tax_rate }) => {
        return (
            <tr key={id}>
                <td className="text-center">{id}</td>
                <td className="text-center">{name}</td>
                <td className="text-center">{rate}</td>
                <td className="text-center">{tax_rate}</td>
                <td className="text-left">
                    <div className="d-block">
                        <p className="mb-0 fs-3">Cuenta de Ventas: {account_sales}</p>
                        <p className="mb-0 fs-3">Cuenta de Ventas Pagadas: {account_sales_paid}</p>
                        <p className="mb-0 fs-3">Cuenta de Compras/Gastos: {account_purchases_expenses}</p>
                        <p className="mb-0 fs-3">Cuenta de Compras/Gastos Pagadas: {account_purchases_expenses_paid}</p>
                        <p className="mb-0 fs-3">Cuenta de Impuestos: {account_tax}</p>
                    </div>
                </td>
                <td>
                    <Link href={route(RouteEdit, id)} className="btn btn-outline-dark edit">
                        <i className="ti ti-pencil fs-5"></i>
                    </Link>
                </td>
            </tr>
        );
    });

// ----------------------------------------------------------------------------------------> Render Page
    return (
        // Module Title
        <div>
            <TitleHeader Title={Title} Route={RouteTrace} RouteNew={RouteNew}/>

            <TableShow DataTableHeader={DataTableHeader} DataTableBody={dataTableBody}/>
        </div>
    );
};

Show.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Show;