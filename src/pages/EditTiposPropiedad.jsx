import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import { useCallback } from 'react';
import { TipoPropiedadesForm } from '../components/TipoPropiedadesForm';
import { editTiposPropiedad, fetchTipoPropiedad } from '../api/tipoPropiedades';

export function EditTiposPropiedad() {
    const { id } = useParams(); //se utiliza para obtener el parámetro de la URL llamado "id".

    const fetchFn = useCallback(() => fetchTipoPropiedad(id), [id]); //para memorizar la función y evitar que se cree una nueva instancia cada vez que el componente se renderiza
    const { data: tipoPropiedad, isLoading, error } = useFetchData(fetchFn); //ealizar la solicitud HTTP utilizando la función fetchFn que definiste anteriormente y gestionar el estado de los datos obtenidos

    if (isLoading) {
        return <p>Cargando formulario...</p>;
    } else if (error) {
        return <p>Hubo un error: {error.message}</p>;
    } else {
        return (
            <TipoPropiedadesForm
                data={tipoPropiedad}
                initialValues={tipoPropiedad}
                onSubmit={(formData) => editTiposPropiedad(id, formData)}
            />
        );
    }
}
