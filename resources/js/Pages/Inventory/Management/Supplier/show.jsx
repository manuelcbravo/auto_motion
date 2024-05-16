import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import TableTools from "@/Components/Template/Table/TableTools.jsx";
import TableShow from "@/Components/Template/Table/TableShow.jsx";

// Settings
let Title;

const Index = () => {
// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, RouteNew, RouteEdit, DataTableHeader , DATA} = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    const dataTableBody = DATA.map(({ id, short_name, name, customer_number, tax_code }) => {
        return (
            <tr key={id}>
                <td className="text-center">{customer_number}</td>
                <td className="text-center">{name}</td>
                <td className="text-center">{short_name}</td>
                <td className="text-center">{tax_code}</td>
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

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;