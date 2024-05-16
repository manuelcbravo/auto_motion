import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import CardForm from "@/Components/Template/Card/CardForm.jsx";
import Input from '@/Components/Template/Form/Input.jsx'

// Settings
let Title;

const Index = () => {
    console.log(usePage().props);
    Title = 'New Inventory';

// ----------------------------------------------------------------------------------------> DataPage
    const { RouteTrace } = usePage().props;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        name: ''
    });

    /// Store
    function handleSubmit(e) {
        e.preventDefault();
    }

// ----------------------------------------------------------------------------------------> Render Page
    return (
        // Module Title
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            <CardForm NameForm={handleSubmit} Processing={processing} Inputs={
                <div className="row">
                    <h6 className="mb-4">Información general</h6>
                    <Input col="col-6" type="text" label="Código de producto / servicio" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Descripción" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Categoría" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Tipo de impuesto" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Tipo de articulo" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Unidad de medida" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>

                    <h6 className="mb-4">Cuentas contables</h6>
                    <Input col="col-6" type="text" label="Cuenta de ventas" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Cuenta de inventario" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Cuenta de gasto o costo de venta" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Cuenta de ajustes de inventario" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>

                    <h6 className="mb-4">Otros</h6>
                    <Input col="col-6" type="text" label="Código de barras" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Código alterno" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Marca" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Fabricante" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Numero de fabricante" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Imagen" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Estatus del articulo" name="fuente" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;