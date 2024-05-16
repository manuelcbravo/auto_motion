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
    const { RouteTrace, RouteSpreadSheet, RouteNew, RouteEdit, DataTableHeader, DATA, RouteImage } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    const {
        data,
        meta: { links }
    } = DATA;

    const dataTableBody = DATA.data.map(({ id, name, type_item, category, imagen }) => {
        return (
            <tr key={id}>
                <td className="text-center"><img src={`${RouteImage}/${imagen ?? 'public/NA.png'}`} className="rounded-2" width="48" height="48" alt="" style={{ marginRight: '20px' }}/>{id}</td>
                <td className="text-center">{name}</td>
                <td className="text-center">{type_item}</td>
                <td className="text-center">{category}</td>
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
            <TitleHeader Title={Title} Route={RouteTrace} RouteNew={RouteNew} RouteSpreadSheet={RouteSpreadSheet}/>

            <TableShow DataTableHeader={DataTableHeader} DataTableBody={dataTableBody}/>

            <Pagination links={links} />
        </div>
    );
};

Show.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Show;