import { useCallback } from 'react';
import { ReservaForm } from '../components/ReservasForm';
import { useFetchData } from '../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import { editReserva, fetchRerserva } from '../api/reservas';

export function EditReserva() {
    const { id } = useParams();

    const fetchFn = useCallback(() => fetchRerserva(id), [id]);
    const { data: reserva, isLoading, error } = useFetchData(fetchFn);

    if (isLoading) {
        return <p>Cargando formulario...</p>;
    } else if (error) {
        return <p>Hubo un error: {error.message}</p>;
    } else {
        return (
            <ReservaForm
                data={reserva}
                onSubmit={(formData) => editReserva(id, formData)}
            />
        );
    }
}
