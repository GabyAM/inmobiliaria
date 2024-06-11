import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import { useCallback } from 'react';
import { TipoPropiedadesForm } from '../components/TipoPropiedadesForm';

function fetchTipoPropiedad (id){
    return fetch(`http://localhost/tipo_propiedades/${id}`)
        .then((res) => {
            if (!res.ok){
                throw new Error ('Error obtener el tipo de propiedad')
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function EditTiposPropiedad (){
    const { id } = useParams(); //se utiliza para obtener el parámetro de la URL llamado "id".

    const fetchFn = useCallback(() => fetchTipoPropiedad(id), [id]);//para memorizar la función y evitar que se cree una nueva instancia cada vez que el componente se renderiza
    const { data: tipoPropiedad, isLoading, error } = useFetchData(fetchFn); //ealizar la solicitud HTTP utilizando la función fetchFn que definiste anteriormente y gestionar el estado de los datos obtenidos

    function editTiposPropiedad(formData){
        return fetch(`http://localhost/tipo_propiedades/${id}`,{
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (isLoading) {
        return <p>Cargando formulario...</p>;
    } else if (error) {
        return <p>Hubo un error: {error.message}</p>;
    } else {
        return (
            <TipoPropiedadesForm
                data={tipoPropiedad}
                initialValues={tipoPropiedad}
                onSubmit={editTiposPropiedad}
            />
        );
    }
}