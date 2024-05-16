import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import TableShow from "@/Components/Template/Table/TableShow.jsx";

// Settings
let Title;

const Show = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, RouteNew, RouteEdit, RouteRelate, DataTableHeader, DATA, RouteChild } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    const dataTableBody = DATA.data.map(({ id, code, name, full_address, manager_name}) => {
        return (
            <tr key={id}>
                <td className="text-center">{id}</td>
                <td className="text-center">{code}</td>
                <td className="text-center">{name}</td>
                <td className="text-center">{full_address}</td>
                <td className="text-center">{manager_name}</td>
                <td>
                    <Link href={route(RouteEdit, id)} className="btn btn-outline-dark edit mx-2">
                        <i className="ti ti-pencil fs-5"></i>
                    </Link>
                    <Link href={route(RouteChild, id)} className="btn btn-outline-dark edit">
                        <i className="ti ti-map-pin fs-5"></i>
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