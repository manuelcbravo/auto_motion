import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import ModuleMenu from "@/Components/Template/Tools/ModuleMenu.jsx";

// Settings
let Title;

const Index = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, Menu } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;
// ----------------------------------------------------------------------------------------> Render Page
return (
    // Module Title
    <div>

        <TitleHeader Title={Title} Route={RouteTrace}/>
        <ModuleMenu Menu={Menu}/>
    </div>
);
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;