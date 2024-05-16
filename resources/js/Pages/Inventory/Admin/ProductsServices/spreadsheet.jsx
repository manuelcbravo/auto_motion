import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import {useState} from "react";
import Papa from 'papaparse';
import Spreadsheet from "react-spreadsheet";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardCatTable from "@/Components/Template/Card/CardCatTable.jsx";

// Settings
let Title;

const Show = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, RouteStore, DataLabels, DATA, catTypeProductService, catTypeTaxes, catStatus } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    // EXCEL: DATA
    const [data, setData] = useState([
        [{ value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }],
    ]);

    // EXCEL: CHANGE DATA
    const handleChangeData = (newData) => {
        setData(newData);
    };

    // EXCEL: NEW ROW
    const addRow = () => {
        const newRow = [
            { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" }, { value: "" },
        ];
        setData(prevRowData => [...prevRowData, newRow]);
    };

    // EXCEL: STORE
    function handleSubmit(e) {
        e.preventDefault();
        let dataForm = JSON.stringify(data);
        axios.post('/ProducPlan/public/stock-masters-store-csv', { dataForm })
            .then(response => {
                toast.success(response.data.message, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            })
            .catch(error => {
                if (error.response && error.response.data && Array.isArray(error.response.data.errors)) {
                    error.response.data.errors.forEach(err => {
                        toast.error(err, {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    });
                } else {
                    toast.error("Error desconocido.");
                }
            });
    }



// ----------------------------------------------------------------------------------------> Render Page
    return (
        // Module Title
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            <ToastContainer />

            <div className="row">
                <div className="col-4">
                    <CardCatTable card_name="Catalogo: type_tax" data={catTypeTaxes}/>
                </div>
                <div className="col-4">
                    <CardCatTable card_name="Catalogo: type_item" data={catTypeProductService}/>
                </div>
                <div className="col-4">
                    <CardCatTable card_name="Catalogo: status" data={catStatus}/>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-bg-success d-flex align-items-center">
                    <h4 className="card-title text-white mb-0">
                        Hoja de calculo
                    </h4>
                    <div className="card-actions cursor-pointer ms-auto d-flex button-group">
                        <a href="#"
                           className="mb-0 text-white btn-minimize px-2 cursor-pointer link d-flex align-items-center"
                           data-action="expand">
                            <i className="ti ti-arrows-maximize fs-6"></i>
                        </a>
                    </div>
                </div>
                <div className="table-responsive">
                    <Spreadsheet
                        data={data}
                        columnLabels={DataLabels}
                        onChange={handleChangeData}
                    />
                </div>

                <div className="card-footer">
                    <div className="row">
                        <div className="col-md-4 col-xl-3"></div>
                        <div
                            className="col-md-8 col-xl-9 text-end d-flex justify-content-md-end justify-content-center mt-3 mt-md-0">
                            <button className="btn btn-info d-flex align-items-center ms-2"
                                    onClick={addRow}>
                                <i className="ti ti-plus text-light me-1 fs-5"></i>
                                Nueva fila
                            </button>
                            <button className="btn btn-success d-flex align-items-center ms-2"
                                    onClick={handleSubmit}>
                                <i className="ti ti- text-white me-1 fs-5"></i>
                                Procesar datos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

Show.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Show;