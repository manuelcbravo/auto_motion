import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import TableTools from "@/Components/Template/Table/TableTools.jsx";
import TableShow from "@/Components/Template/Table/TableShow.jsx";

// Settings
let Title;

const Index = () => {
    console.log(usePage().props);
    Title = 'Bank & Counts';

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, RouteNew, DataTableHeader } = usePage().props;

// ----------------------------------------------------------------------------------------> Render Page
    return (
        // Module Title
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            {/* <TableTools/> */}
            <div className="card card-body bg-light">
    
                <h4 className="card-title mt-2 pb-3">
                    Filtros
                </h4>
                <form>
                <div className='row'>
                    <div class="col-lg-4">
                        <div class="mb-4">
                            <label for="search" class="form-label fw-semibold">Referencia</label>
                            <input type="text" id="search" name="search" placeholder="" class="form-control " value="" />
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="mb-4">
                            <label for="type" class="form-label fw-semibold">Tipo</label>
                            <select id="type" name="type" class="form-select ">
                                <option value="">Seleccione una opción</option>
                                <option value="1">Interna</option><option value="2">Externa</option>
                            </select>
                        </div>
                    </div>
                </div>

                </form>
            </div>

            <TableShow DataTableHeader={DataTableHeader}/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;