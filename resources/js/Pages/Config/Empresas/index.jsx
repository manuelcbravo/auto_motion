import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import TableShow from "@/Components/Template/Table/TableShow.jsx";
import Pagination from "@/Components/Template/Table/Pagination.jsx";

// Settings
let Title;

const Show = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, RouteNew, RouteEdit, DataTableHeader, DATA, RouteUsers } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    const {
        data,
        links 
    } = DATA;

    const StatusBadge = ({ status }) => {
        const className = status === 1 ? 'badge bg-success' : 'badge bg-danger';
        const text = status === 1 ? 'Activo' : 'Inactivo';
        return <span className={className}>{text}</span>;
    };

    const dataTableBody = DATA.data.map(({ id, nombre, direccion, encargado, estatus, usuarios}) => {
        return (
            <tr key={id}>
                <td className="text-center">{nombre}</td>
                <td className="text-center">{direccion}</td>
                <td className="text-center">{encargado}</td>
                <td className="text-center">{usuarios}</td>
                <td className="text-center"><StatusBadge status={estatus} /></td>
                <td>
                    <Link href={route(RouteEdit, id)} className="btn btn-outline-dark edit mx-2">
                        <i className="ti ti-pencil fs-5"></i>
                    </Link>
                    <Link href={route(RouteUsers, id)} className="btn btn-outline-dark edit mx-2">
                        <i className="ti ti-users fs-5"></i>
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

            <Pagination links={links} />

        </div>
    );
};

Show.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Show;