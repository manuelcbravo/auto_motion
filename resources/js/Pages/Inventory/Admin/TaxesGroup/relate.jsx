import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import CardForm from "@/Components/Template/Card/CardForm.jsx";
import Input from '@/Components/Template/Form/Input.jsx'
import Select from "@/Components/Template/Form/Select.jsx";
import TextArea from "@/Components/Template/Form/TextArea.jsx";
import TableShow from "@/Components/Template/Table/TableShow.jsx";

// Settings
let Title;

const Index = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { DATA, DataTableHeader, getData, RouteTrace, RouteStore, catTaxes } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id_group_taxes:                     getData.id || '',
        id_taxes:                           '',
    });

    /// Store
    function handleSubmit(e) {
        e.preventDefault();
        post(route(RouteStore));
    }

    /// TABLE

    const dataTableBody = DATA.data.map(({ id_taxes, name, rate, tax_rate}) => {
        return (
            <tr key={id_taxes}>
                <td className="text-center">{id_taxes}</td>
                <td className="text-center">{name}</td>
                <td className="text-center">{rate}</td>
                <td className="text-center">{tax_rate}</td>
                <td className="text-center"></td>
            </tr>
        );
    });
// ----------------------------------------------------------------------------------------> Render Page
    return (
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            <CardForm NameForm={handleSubmit} Processing={processing} Inputs={
                <div className="row">

                    <h6 className="mb-4">Información general</h6>
                    <Select col="col-12" label="Impuesto" name="id_taxes" items={catTaxes}
                            errors={errors.id_taxes}
                            value={data.id_taxes}
                            onChange={e => setData('id_taxes', e.target.value)}/>

                </div>
            }/>

            <TableShow DataTableHeader={DataTableHeader} DataTableBody={dataTableBody}/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;