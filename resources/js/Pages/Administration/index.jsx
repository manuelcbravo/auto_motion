import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import ModuleMenu from "@/Components/Template/Tools/ModuleMenu.jsx";

// Settings
let Title;

const Index = () => {
console.log(usePage().props);
Title = 'Bank & Counts';

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, Menu1, Menu2 } = usePage().props;

// ----------------------------------------------------------------------------------------> Render Page
return (
    // Module Title
    <div>

        <TitleHeader Title={Title} Route={RouteTrace}/>

        <ModuleMenu Menu={Menu1}/>
        <ModuleMenu Menu={Menu2}/>
    </div>
);
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;