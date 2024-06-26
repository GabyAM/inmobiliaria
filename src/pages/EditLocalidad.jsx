import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import { useCallback } from 'react';
import { editLocalidad, fetchLocalidad } from '../api/localidades';
import { LocalidadForm } from '../components/LocalidadForm';

export function EditLocalidad() {
    const { id } = useParams();
    const fetchFn = useCallback(() => fetchLocalidad(id), [id]);
    const { data: localidad, isLoading, error } = useFetchData(fetchFn);

    if (isLoading) {
        return <p>Cargando formulario...</p>;
    } else if (error) {
        return <p>Hubo un error: {error.message}</p>;
    }
    return (
        <>
            <h2>Editar localidad</h2>
            <LocalidadForm
                data={localidad}
                onSubmit={(formData) => editLocalidad(formData, id)}
            ></LocalidadForm>
        </>
    );
}
