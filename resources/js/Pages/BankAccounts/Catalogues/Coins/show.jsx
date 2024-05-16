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
    const { RouteTrace, RouteNew, DataTableHeader, DATA, RouteEdit } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    const dataTableBody = DATA.map(({ id, abbreviation, symbol, currency_name, cent_name, country, banxico_code }) => {
        return (
            <tr key={id}>
                <td className="text-center">{abbreviation}</td>
                <td className="text-center">{symbol}</td>
                <td className="text-center">{currency_name}</td>
                <td className="text-center">{cent_name}</td>
                <td className="text-center">{country}</td>
                <td>
                {!banxico_code ? (
                    <Link href={route(RouteEdit, id)} className="btn btn-outline-dark edit">
                        <i className="ti ti-pencil fs-5"></i>
                    </Link>
                ) : (
                    ''
                )}
                </td>
            </tr>
        );
    });

// ----------------------------------------------------------------------------------------> Render Page
    return (
        // Module Title
        <div>
            <TitleHeader Title={Title} Route={RouteTrace} RouteNew={RouteNew}/>

            <TableTools/>

            <TableShow DataTableHeader={DataTableHeader} DataTableBody={dataTableBody}/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;