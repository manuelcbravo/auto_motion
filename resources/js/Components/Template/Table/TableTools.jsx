import {Link, usePage} from "@inertiajs/react";
import {useState} from "react";
import Select from "@/Components/Template/Form/Select.jsx";
import Input from "@/Components/Template/Form/Input.jsx";

import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import { Component } from "react";

export default function TableTools({rol}) {

    const { filters } = usePage().props;
    const [opened, setOpened] = useState(false);

    const [values, setValues] = useState({
        search: filters.search || '',
        consulter: filters.consulter || '',
        type: filters.type || '',
        client: filters.client || '',
        priority: filters.priority || '',
        status: filters.status || '',
        frequency: filters.frequency || '',
        dateRange: filters.dateRange || '',
    });

    function handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;

        setValues(values => ({
            ...values,
            [key]: value
        }));

        if (opened) setOpened(false);
    }

    return (
        <div className="card card-body bg-light">
            <h4 className="card-title mt-2 pb-3">
                Filtros
            </h4>
            <form>

            </form>
        </div>
    );
}
