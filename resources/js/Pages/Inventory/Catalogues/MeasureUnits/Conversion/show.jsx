import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import TableShow from "@/Components/Template/Table/TableShow.jsx";
import Input from "@/Components/Template/Form/Input.jsx";
import Select from "@/Components/Template/Form/Select.jsx";
import CardForm from "@/Components/Template/Card/CardForm.jsx";

// Settings
let Title;

const Show = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace, RouteStore, RouteEdit, DataTableHeader, DATA, getData, catMeasureUnit, titleForm } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id:                     getData.id || '',
        unit_measure_from:      getData.unit_measure_from || '',
        unit_measure_to:        getData.unit_measure_to || '',
        value:                  getData.value || '',
    });

    /// Store
    function handleSubmit(e) {
        e.preventDefault();
        post(route(RouteStore));
    }

    const dataTableBody = DATA.data.map(({ id, unit_measure_from, unit_measure_to_name, value }) => {
        return (
            <tr key={id}>
                <td className="text-center">{id}</td>
                <td className="text-center">{unit_measure_to_name}</td>
                <td className="text-center">{value}</td>
                <td>
                    <div className="d-flex gap-2">
                        <Link href={route(RouteEdit, [unit_measure_from, id])} className="btn btn-outline-dark edit">
                            <i className="ti ti-pencil fs-5"></i>
                        </Link>
                    </div>
                </td>
            </tr>
        );
    });

    // ----------------------------------------------------------------------------------------> Render Page
    return (
        // Module Title
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            <CardForm NameForm={handleSubmit} Processing={processing} Inputs={
                <div className="row">
                    <h6 className="mb-4">{ titleForm }</h6>
                    <Select col="col-6" label="Unidad de medida" name="unit_measure_to" items={catMeasureUnit}
                            errors={errors.unit_measure_to}
                            value={data.unit_measure_to} module={'measure_units.show'}
                            onChange={e => setData('unit_measure_to', e.target.value)}/>
                    <Input col="col-6" type="number" label="Valor" name="value" errors={errors.value} value={data.value}
                           onChange={e => setData('value', e.target.value)}/>
                </div>
            }/>

            <TableShow DataTableHeader={DataTableHeader} DataTableBody={dataTableBody}/>
        </div>
    );
};

Show.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Show;