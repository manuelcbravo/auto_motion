import React, {useState} from 'react';
import {Head, usePage} from '@inertiajs/react';
import Sidebar from '@/Components/Template/Sidebar.jsx'
import Header from "@/Components/Template/Header.jsx";
import SystemMessages from "@/Components/Template/SystemMessages.jsx";
import {ToastContainer} from "react-toastify";

export default function Authenticated({title, children}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { auth } = usePage().props;

    return (
        <div>
            {/*Header top*/}
            <Head title={title}/>

            <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6"
                 data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
                {/*Sidebar Start*/}
                <Sidebar rol={auth.rol} number_tasks_unassigned={auth.num_tasks_unassigned}
                         number_tasks_process={auth.num_tasks_process}/>

                {/*Main wrapper*/}
                <div className="body-wrapper">

                    {/*Header Start*/}
                    <Header user_name={auth.user.nombres} user_email={auth.user.email}/>

                    {/*Content*/}
                    <div className="container-fluid mw-100">
                        <SystemMessages/>
                        <ToastContainer/>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
