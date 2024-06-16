import { useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import { useCallback } from 'react';
import { editInquilino, fetchInquilino } from '../api/inquilinos';
import { InquilinoForm } from '../components/InquilinoForm';

export function EditInquilino() {
    const { id } = useParams();
    const fetchFn = useCallback(() => fetchInquilino(id), [id]);
    const { data: inquilino, isLoading, error } = useFetchData(fetchFn);

    if (isLoading) {
        return <p>Cargando formulario...</p>;
    } else if (error) {
        return <p>Hubo un error</p>;
    }
    return (
        <InquilinoForm
            data={inquilino}
            onSubmit={(formData) => editInquilino(formData, id)}
        ></InquilinoForm>
    );
}
