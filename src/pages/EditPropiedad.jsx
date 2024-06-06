import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import { useCallback } from 'react';
import { PropiedadForm } from '../components/PropiedadForm';

function fetchPropiedad(id) {
    return fetch(`http://localhost/propiedades/${id}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener propiedad');
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function EditPropiedad() {
    const { id } = useParams();

    const fetchFn = useCallback(() => fetchPropiedad(id), [id]);
    const { data: propiedad, isLoading, error } = useFetchData(fetchFn);

    function editPropiedad(formData) {
        return fetch(`http://localhost/propiedades/${id}`, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (isLoading) {
        return <p>Cargando formulario...</p>;
    } else if (error) {
        return <p>Hubo un error</p>;
    } else {
        return (
            <PropiedadForm
                data={propiedad}
                onSubmit={editPropiedad}
            ></PropiedadForm>
        );
    }
}
