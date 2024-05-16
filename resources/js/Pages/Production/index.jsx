import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import ModuleMenu from "@/Components/Template/Tools/ModuleMenu.jsx";

// Settings
let Title;

const Index = () => {
console.log(usePage().props);
Title = 'Production';

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, Menu1, Menu2, Menu3, Menu4 } = usePage().props;

// ----------------------------------------------------------------------------------------> Render Page
return (
    // Module Title
    <div>

        <TitleHeader Title={Title} Route={RouteTrace}/>

        <ModuleMenu Menu={Menu1}/>
        <ModuleMenu Menu={Menu2}/>
        <ModuleMenu Menu={Menu3}/>
        <ModuleMenu Menu={Menu4}/>
    </div>
);
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;