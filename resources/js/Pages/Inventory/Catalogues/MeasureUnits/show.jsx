import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import TableShow from "@/Components/Template/Table/TableShow.jsx";

// Settings
let Title;

const Show = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, RouteNew, RouteEdit, RouteConversion, DataTableHeader, DATA } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    const dataTableBody = DATA.map(({ id, abbreviation, name, num_decimals }) => {
        return (
            <tr key={id}>
                <td className="text-center">{id}</td>
                <td className="text-center">{name}</td>
                <td className="text-center">{abbreviation}</td>
                <td className="text-center">{num_decimals}</td>
                <td>
                    <div className="d-flex gap-2">
                        <Link href={route(RouteEdit, id)} className="btn btn-outline-dark edit">
                            <i className="ti ti-pencil fs-5"></i>
                        </Link>
                        <Link href={route(RouteConversion, [id, 0])} className="btn btn-outline-dark edit">
                            <i className="ti ti-git-compare fs-5"></i>
                        </Link>
                    </div>
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