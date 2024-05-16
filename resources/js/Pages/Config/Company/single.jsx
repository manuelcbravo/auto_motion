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
    const { getData, RouteTrace, RouteStore} = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, get, processing} = useForm({
        id:                                 getData.id || '',
        name:                               getData.name || '',
        address:                        getData.address || '',
        imagen:                             getData.imagen || '',

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
        console.log(RouteStore);
        post(route(RouteStore));
    }


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
                    
                    <Input col="col-6" type="text" label="Nombre" name="name" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                           
                    <Input col="col-6" type="text" label="Dirección" name="address" errors={errors.address} value={data.address}
                           onChange={e => setData('address', e.target.value)}/>

                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;