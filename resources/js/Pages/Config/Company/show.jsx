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
    const { RouteTrace, RouteNew, RouteEdit, DataTableHeader , DATA, RouteImage} = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    const dataTableBody = DATA.map(({ id, address, name, imagen }) => {
        console.log(imagen);
        return (
            <tr key={id}>
                <td className="text-center"><img src={`${RouteImage}/${imagen ?? 'public/NA.png'}`} className="rounded-2" width="48" height="48" alt="" style={{ marginRight: '20px' }}/>{name}</td>
                <td className="text-center">{address}</td>
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