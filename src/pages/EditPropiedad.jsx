import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import { useCallback } from 'react';
import { PropiedadForm } from '../components/PropiedadForm';
import { editPropiedad, fetchPropiedad } from '../api/propiedad';

export function EditPropiedad() {
    const { id } = useParams();

    const fetchFn = useCallback(() => fetchPropiedad(id, false), [id]);
    const { data: propiedad, isLoading, error } = useFetchData(fetchFn);

    if (isLoading) {
        return <p>Cargando formulario...</p>;
    } else if (error) {
        return <p>Hubo un error</p>;
    } else {
        return (
            <PropiedadForm
                data={propiedad}
                onSubmit={(formData) => editPropiedad(id, formData)}
            ></PropiedadForm>
        );
    }
}
