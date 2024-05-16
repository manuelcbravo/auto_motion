import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import CardForm from "@/Components/Template/Card/CardForm.jsx";
import Input from '@/Components/Template/Form/Input.jsx'
import Select from "@/Components/Template/Form/Select.jsx";
import TextArea from "@/Components/Template/Form/TextArea.jsx";
import {useState} from "react";

// Settings
let Title;

const Index = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { getData, RouteTrace, RouteStore, RouteFindCategoriesSubcategories, RouteFindTaxes, catTypeProductService, catTypeTaxes, catCategoriesSubcategories, catMeasureUnit, catAccountingAccount, catStatus, catAbcValue, catCostModel, catInvenratiable, catSupplier, catEmpaques } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, get, processing} = useForm({
        id:                                 getData.id || '',
        code:                               getData.code || '',
        name:                               getData.name || '',
        description:                        getData.description || '',
        category:                           getData.category || '',
        type_tax:                           getData.type_tax || '',
        taxes:                              getData.taxes || '',
        type_item:                          getData.type_item || '',
        unit_measure:                       getData.unit_measure || '',
        account_sales:                      getData.account_sales || '',
        account_inventory:                  getData.account_inventory || '',
        account_expense_cost:               getData.account_expense_cost || '',
        account_inventory_adjustment:       getData.account_inventory_adjustment || '',
        code_bar:                           getData.code_bar || '',
        code_alternate:                     getData.code_alternate || '',
        brand:                              getData.brand || '',
        manufacturer:                       getData.manufacturer || '',
        manufacturer_number:                getData.manufacturer_number || '',
        status:                             getData.status || '',
        imagen:                             getData.imagen || '',
        id_abc_value :          getData.id_abc_value || '',
        id_costo_model :        getData.id_costo_model || '',
        density :               getData.density || '',
        id_inventory_type :     getData.id_inventory_type || '',
        itemdimcostprice :      getData.itemdimcostprice || '',
        namealias :             getData.namealias || '',
        id_packing :            getData.id_packing || '',
        taraweight :            getData.taraweight || '',
        unidad_PO :             getData.unidad_PO || '',
        unidad_IN :             getData.unidad_IN || '',
        unidad_SA :             getData.unidad_SA || '',
        lead_time :             getData.lead_time || '',
        loteserie :             getData.loteserie || '',
        lot :                   getData.lot || '',
        series :                getData.series || '',
        death_time :            getData.death_time || '',
        id_primary_vendor:      getData.id_primary_vendor || '',
        forecast :              getData.forecast || '',
        safety_stock_minus :    getData.safety_stock_minus || 0,
        safety_stock_max :      getData.safety_stock_max || 0,
    });

    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            if (!['image/jpeg', 'image/png'].includes(selectedFile.type)) {
                alert('Solo se permiten archivos JPEG y PNG.');
                return;
            }

            if (selectedFile.size > 1048576) { // 1MB en bytes
                alert('El tamaño máximo permitido es de 1MB.');
                return;
            }

            setFile(selectedFile);
            setData(prevData => ({
                ...prevData,
                imagen: selectedFile // Actualizar el valor de "imagen"
            }));
            // Limpiar el campo de entrada para evitar que el texto permanezca
            event.target.value = '';
        }
    };

    const removeFile = () => {
        setFile(null);
        setData(prevData => ({
            ...prevData,
            imagen: null // Restablecer el valor de "imagen" a null
        }));
    };
    

    /// Store
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        post(route(RouteStore));
    }

    const [catTaxes, setcatTaxes] = useState([]);


    const handleChangeCategory = async (event) => {
        const { value } = event.target;
        try {

            const response = await axios.get(route(RouteFindCategoriesSubcategories, [value]));
            setData(prevData => ({
                ...prevData,
                category: value,
                type_item: response.data.type,
                unit_measure: response.data.unit_measure,
                account_sales: response.data.account_sales,
                account_inventory: response.data.account_inventory,
                account_expense_cost: response.data.account_expense_cost,
                account_inventory_adjustment: response.data.account_inventory_adjustment
            }));

        } catch (error) {
            console.error('Hubo un error al hacer la solicitud GET:', error);
        }
    };

    const handleChangeTypeTaxes = async (event) => {
        let { value } = event.target;
        if (value === '') {
            value = 0;
        }


        console.log(value);
        try {
            const response = await axios.get(route(RouteFindTaxes, [value]));
            setData(prevData => ({
                ...prevData,
                type_tax: value,
                // type_item: response.data.type,
            }));

            setcatTaxes(response.data);

        } catch (error) {
            console.error('Hubo un error al hacer la solicitud GET:', error);
        }
    };

// ----------------------------------------------------------------------------------------> Render Page
    return (
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            <CardForm NameForm={handleSubmit} Processing={processing} Inputs={
                <div className="row">

                    <h6 className="mb-4">Imagen</h6>
                    
                    <div className="mb-4 col-6">
                        <input className="form-control col-6" type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} id='imagen' name='imagen'/>
                        {file && (
                            <div>
                                <p>Archivo seleccionado: {file.name}</p>
                                <button className='btn btn-danger' onClick={removeFile}>Eliminar archivo</button>
                            </div>
                        )}
                    </div>

                    <h6 className="mb-4">Información general</h6>
                    <Select col="col-12" label="Categoría" name="category" items={catCategoriesSubcategories} errors={errors.category}
                            value={data.category} module={'categories_subcategories.show'}
                            onChange={handleChangeCategory}/>

                    <Select col="col-6" label="Tipo de Artículo" name="type_item" items={catTypeProductService} errors={errors.type_item}
                            value={data.type_item}
                            onChange={e => setData('type_item', e.target.value)}/>
                    <Select col="col-6" label="Unidad de Medida" name="unit_measure" items={catMeasureUnit} errors={errors.unit_measure}
                            value={data.unit_measure} module={'measure_units.show'}
                            onChange={e => setData('unit_measure', e.target.value)}/>
                    <Input col="col-6" type="text" label="Código" name="code" errors={errors.code} value={data.code}
                           onChange={e => setData('code', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre" name="name" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <TextArea col="col-12" label="Descripción" name="description" errors={errors.description}
                              value={data.description} onChange={e => setData('description', e.target.value)}/>
                    <Select col="col-6" label="Tipo de Impuesto" name="type_tax" items={catTypeTaxes} errors={errors.type_tax}
                            value={data.type_tax}
                            onChange={handleChangeTypeTaxes}/>

                    {catTaxes.length > 0 && (
                    <Select col="col-6" label="Impuesto(s)" name="taxes" items={catTaxes} errors={errors.taxes}
                            value={data.taxes}
                            onChange={e => setData('taxes', e.target.value)}/>
                    )}

                    {(data.type_item != 4 && data.type_item != 8 && data.type_item != 9 && data.type_item != 11)  && (
                    <Select col="col-6" label="Se maneja lote/serie" name="loteserie" items={catInvenratiable} errors={errors.loteserie}
                            value={data.loteserie}
                            onChange={e => setData('loteserie', e.target.value)}/>
                    )}
                    
                    {(data.type_item != 4 && data.type_item != 8 && data.type_item != 9 && data.type_item != 11)  && (
                    <Input col="col-6" type="text" label="Serie" name="lot" errors={errors.lot} value={data.lot}
                        onChange={e => setData('lot', e.target.value)}/>
                    )}
                    
                    {(data.type_item != 4 && data.type_item != 8 && data.type_item != 9 && data.type_item != 11)  && (
                    <Input col="col-6" type="text" label="Nombre" name="series" errors={errors.errors} value={data.errors}
                        onChange={e => setData('errors', e.target.value)}/>
                    )}

                    <hr className="pb-2"/>

                    <h6 className="mb-4">Cuentas contables</h6>
                    <Select col="col-6" label="Cuenta de Ventas" name="account_sales" items={catAccountingAccount} errors={errors.account_sales}
                            value={data.account_sales}
                            onChange={e => setData('account_sales', e.target.value)}/>
                    <Select col="col-6" label="Cuenta de Inventario" name="account_inventory" items={catAccountingAccount} errors={errors.account_inventory}
                            value={data.account_inventory}
                            onChange={e => setData('account_inventory', e.target.value)}/>
                    <Select col="col-6" label="Cuenta de Gasto o Costo de Venta" name="account_expense_cost" items={catAccountingAccount}
                            errors={errors.account_expense_cost}
                            value={data.account_expense_cost}
                            onChange={e => setData('account_expense_cost', e.target.value)}/>
                    <Select col="col-6" label="Cuenta de Ajustes de Inventario" name="account_inventory_adjustment" items={catAccountingAccount}
                            errors={errors.account_inventory_adjustment}
                            value={data.account_inventory_adjustment}
                            onChange={e => setData('account_inventory_adjustment', e.target.value)}/>

                    <hr className="pb-2"/>

                    <h6 className="mb-4">Otros</h6>
                    <Input col="col-6" type="text" label="Código de Barras" name="code_bar" errors={errors.code_bar}
                           value={data.code_bar}
                           onChange={e => setData('code_bar', e.target.value)}/>
                    <Input col="col-6" type="text" label="Código Alterno" name="code_alternate" errors={errors.code_alternate}
                           value={data.code_alternate}
                           onChange={e => setData('code_alternate', e.target.value)}/>
                    <Input col="col-6" type="text" label="Marca" name="brand" errors={errors.brand} value={data.brand}
                           onChange={e => setData('brand', e.target.value)}/>
                    <Input col="col-6" type="text" label="Fabricante" name="manufacturer" errors={errors.manufacturer} value={data.manufacturer}
                           onChange={e => setData('manufacturer', e.target.value)}/>
                    <Input col="col-6" type="text" label="Número de Fabricante" name="manufacturer_number" errors={errors.manufacturer_number}
                           value={data.manufacturer_number}
                           onChange={e => setData('manufacturer_number', e.target.value)}/>
                    <Select col="col-6" label="Estatus" name="status" items={catStatus} errors={errors.status}
                            value={data.status}
                            onChange={e => setData('status', e.target.value)}/>
                    {/* nuevo */}
                    <Input col="col-6" type="text" label="Nombre Alias" name="namealias" errors={errors.namealias}
                           value={data.namealias}
                           onChange={e => setData('namealias', e.target.value)}/>
                    <Input col="col-6" type="number" label="Densidad" name="density" errors={errors.density}
                           value={data.density}
                           onChange={e => setData('density', e.target.value)}/>
                    <Select col="col-6" label="Valor ABC" name="id_abc_value" items={catAbcValue} errors={errors.id_abc_value}
                            value={data.id_abc_value}
                            onChange={e => setData('id_abc_value', e.target.value)}/>
                    <Select col="col-6" label="Modelo costo" name="id_costo_model" items={catCostModel} errors={errors.id_costo_model}
                            value={data.id_costo_model}
                            onChange={e => setData('id_costo_model', e.target.value)}/>
                    <Select col="col-6" label="Inventariado" name="id_inventory_type" items={catInvenratiable} errors={errors.id_inventory_type}
                            value={data.id_inventory_type}
                            onChange={e => setData('id_inventory_type', e.target.value)}/>
                    <Select col="col-6" label="Forecast map" name="forecast" items={catInvenratiable} errors={errors.forecast}
                            value={data.forecast}
                            onChange={e => setData('forecast', e.target.value)}/>
                    <Input col="col-6" type="number" label="Costo" name="itemdimcostprice" errors={errors.itemdimcostprice}
                           value={data.itemdimcostprice}
                           onChange={e => setData('itemdimcostprice', e.target.value)}/>
                    <Select col="col-6" label="Tipo empaque" name="id_packing" items={catEmpaques} errors={errors.id_packing}
                            value={data.id_packing}
                            onChange={e => setData('id_packing', e.target.value)}/>
                    <Input col="col-6" type="number" label="Tiempo de compra" name="lead_time" errors={errors.lead_time}
                           value={data.lead_time ?? 0}
                           onChange={e => setData('lead_time', e.target.value)}/>
                    <Input col="col-6" type="number" label="Tiempo de consumo" name="death_time" errors={errors.death_time}
                           value={data.death_time ?? 0}
                           onChange={e => setData('death_time', e.target.value)}/>
                    

                    {/* peso */}
                    <h6 className="mb-4">Peso</h6>
                    <Input col="col-6" type="number" label="Peso" name="taraweight" errors={errors.taraweight}
                           value={data.taraweight}
                           onChange={e => setData('taraweight', e.target.value)}/>
                    <Select col="col-6" label="Unidad de Compra" name="unidad_PO" items={catMeasureUnit} errors={errors.unidad_PO}
                            value={data.unidad_PO}
                            onChange={e => setData('unidad_PO', e.target.value)}/>
                    <Select col="col-6" label="Unidad de Almacenamiento" name="unidad_IN" items={catMeasureUnit} errors={errors.unidad_IN}
                            value={data.unidad_IN}
                            onChange={e => setData('unidad_IN', e.target.value)}/>
                    <Select col="col-6" label="Unidad de Venta" name="unidad_SA" items={catMeasureUnit} errors={errors.unidad_SA}
                            value={data.unidad_SA}
                            onChange={e => setData('unidad_SA', e.target.value)}/>
                    <Select col="col-6" label="Proveedor principal" name="id_primary_vendor" items={catSupplier} errors={errors.id_primary_vendor}
                            value={data.id_primary_vendor}
                            onChange={e => setData('id_primary_vendor', e.target.value)}/>

                    {/* peso */}
                    <h6 className="mb-4">STOCK DE SEGURIDAD</h6>
                    <Input col="col-6" type="number" label="Stock mínimo" name="safety_stock_minus" errors={errors.safety_stock_minus}
                           value={data.safety_stock_minus}
                           onChange={e => setData('safety_stock_minus', e.target.value)}/>
                        <Input col="col-6" type="number" label="Stock máximo" name="safety_stock_max" errors={errors.safety_stock_max}
                           value={data.safety_stock_max}
                           onChange={e => setData('safety_stock_max', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;