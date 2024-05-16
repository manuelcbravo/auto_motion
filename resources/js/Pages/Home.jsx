import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {usePage} from '@inertiajs/react';
import React from "react";

const Index = () => {
    const { auth } = usePage().props;

    return (
        <div>
            <h3 className="text-end fw-semibold">Hola,
                <span className="text-dark ms-2">{auth.user.nombres}</span>
            </h3>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title="Home" children={page} />;
export default Index;
