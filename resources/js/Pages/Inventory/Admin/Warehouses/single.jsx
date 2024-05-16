import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Link, useForm, usePage} from "@inertiajs/react";

// Tools
import TitleHeader from "@/Components/Template/Tools/TitleHeader.jsx";
import CardForm from "@/Components/Template/Card/CardForm.jsx";
import Input from '@/Components/Template/Form/Input.jsx'
import Select from "@/Components/Template/Form/Select.jsx";
import TextArea from "@/Components/Template/Form/TextArea.jsx";
import {useEffect, useRef, useState} from "react";
import {Wrapper} from "@googlemaps/react-wrapper";

// Settings
let Title;

const Index = () => {

// ----------------------------------------------------------------------------------------> DataPage
    const { getData, RouteTrace, RouteStore } = usePage().props;
    Title = RouteTrace[RouteTrace.length - 1].name;

    /// Form
    const { data, setData, errors, post, processing} = useForm({
        id:                             getData.id || '',
        code:                           getData.code || '',
        name:                           getData.name || '',
        full_address:                   getData.full_address || '',
        latitude:                       parseFloat(getData.latitude) || 37.7749,
        longitude:                      parseFloat(getData.longitude) || -122.4194,
        phone:                          getData.phone || '',
        cell:                           getData.cell || '',
        email:                          getData.email || '',
        manager_name:                   getData.manager_name || '',
        manager_phone:                  getData.manager_phone || '',
        manager_cell:                   getData.manager_cell || '',
        manager_email:                  getData.manager_email || '',
        capacity:                       getData.capacity || '',
    });

    /// Store
    function handleSubmit(e) {
        e.preventDefault();
        post(route(RouteStore));
    }

    /// MAPS
    const mapRef = useRef();
    const [marker, setMarker] = useState({ lat: data.latitude, lng:  data.longitude});

    function setMarkerAndData(Lat, Lng) {
        setMarker({ lat: Lat, lng: Lng });
        setData(prevData => ({
            ...prevData,
            latitude: Lat,
            longitude: Lng
        }));
    }

    const MyMapComponent = () => {
        useEffect(() => {
            if (!mapRef.current) return;
            const map = new window.google.maps.Map(mapRef.current, {
                center: marker,
                zoom: 15,
            });

            const markerInstance = new window.google.maps.Marker({
                position: marker,
                map,
                draggable: true,
            });

            markerInstance.addListener("dragend", (event) => {
                let Lat = event.latLng.lat();
                let Lng = event.latLng.lng();

                setMarkerAndData(Lat, Lng);
            });
        }, [marker]);

        return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
    };


// ----------------------------------------------------------------------------------------> Render Page
    return (
        <div>
            <TitleHeader Title={Title} Route={RouteTrace}/>

            <CardForm NameForm={handleSubmit} Processing={processing} Inputs={
                <div className="row">

                    <h6 className="mb-4">Información general</h6>
                    <Input col="col-6" type="text" label="Código" name="code" errors={errors.code} value={data.code}
                           onChange={e => setData('code', e.target.value)}/>
                    <Input col="col-6" type="text" label="Nombre" name="name" errors={errors.name} value={data.name}
                           onChange={e => setData('name', e.target.value)}/>
                    <TextArea col="col-12" label="Dirección completa" name="full_address" errors={errors.full_address} value={data.full_address}
                           onChange={e => setData('full_address', e.target.value)}/>
                    <Input col="col-6" type="text" label="Teléfono" name="phone" errors={errors.phone} value={data.phone}
                           onChange={e => setData('phone', e.target.value)}/>
                    <Input col="col-6" type="text" label="Celular" name="cell" errors={errors.cell} value={data.cell}
                           onChange={e => setData('cell', e.target.value)}/>
                    <Input col="col-6" type="text" label="Email" name="email" errors={errors.email} value={data.email}
                           onChange={e => setData('email', e.target.value)}/>
                    <Input col="col-6" type="number" label="Capacidad (m³)" name="capacity" errors={errors.capacity}
                           value={data.capacity}
                           onChange={e => setData('capacity', e.target.value)}/>

                    <hr className="pb-2"/>
                    <h6 className="mb-4">Ubicación</h6>
                    <Input col="col-6" type="number" label="Latitud" name="latitude" errors={errors.latitude} value={data.latitude}
                           onChange={e => setData('latitude', e.target.value)} readonly={true}/>
                    <Input col="col-6" type="number" label="Longitud" name="longitude" errors={errors.longitude} value={data.longitude}
                           onChange={e => setData('longitude', e.target.value)} readonly={true}/>
                    <div className="col-12">
                        <Wrapper apiKey="AIzaSyATYGPQgobE2oCn1-f2u7oQAOVXfQG5PNg">
                            <MyMapComponent />
                        </Wrapper>
                    </div>

                    <hr className="pb-2"/>
                    <h6 className="mb-4">Jefe de almacén</h6>
                    <Input col="col-6" type="text" label="Nombre (Completo)" name="manager_name" errors={errors.manager_name} value={data.manager_name}
                           onChange={e => setData('manager_name', e.target.value)}/>
                    <Input col="col-6" type="text" label="Teléfono" name="manager_phone" errors={errors.manager_phone} value={data.manager_phone}
                           onChange={e => setData('manager_phone', e.target.value)}/>
                    <Input col="col-6" type="text" label="Celular" name="manager_cell" errors={errors.manager_cell} value={data.manager_cell}
                           onChange={e => setData('manager_cell', e.target.value)}/>
                    <Input col="col-6" type="text" label="Email" name="manager_email" errors={errors.manager_email} value={data.manager_email}
                           onChange={e => setData('manager_email', e.target.value)}/>
                </div>
            }/>
        </div>
    );
};

Index.layout = page => <AuthenticatedLayout title={Title} children={page}/>;
export default Index;