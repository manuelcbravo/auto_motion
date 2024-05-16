import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import TableCategoryShow from "@/Components/Template/Table/TableCategoryShow.jsx";
import Pagination from "@/Components/Template/Table/Pagination.jsx";

// Settings
let Title;

const Show = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, RouteNew, RouteEdit, RouteChild, DataTableHeader, DATA } = usePage().props;

    Title = RouteTrace[RouteTrace.length - 1].name;

    const {
        data,
        meta: { links }
    } = DATA;

// ----------------------------------------------------------------------------------------> Render Page
    return (
        // Module Title
        <div>
            <TitleHeader Title={Title} Route={RouteTrace} RouteNew={RouteNew}/>

            <TableCategoryShow DataTableHeader={DataTableHeader} DATA={DATA.data} RouteEdit={RouteEdit} RouteChild={RouteChild}/>
            <Pagination links={links} />
        </div>
    );
};

Show.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Show;