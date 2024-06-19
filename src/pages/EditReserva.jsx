import { useCallback } from 'react';
import { ReservaForm } from '../components/ReservasForm';
import { useFetchData } from '../hooks/useFetchData';
import { useParams } from 'react-router-dom';
import { fetchReserva, editReserva } from '../api/reservas';

export function EditReserva (){
    const { id } = useParams();

    const fetchFn = useCallback(() => fetchReserva(id),[id]);
    const {
        data: reserva,
        isLoading,
        error
    } = useFetchData(fetchFn);


    if (isLoading) {
        return <p>Cargando formulario...</p>;
    } else if (error) {
        return <p>Hubo un error: {error.message}</p>;
    } else {
        return (
            <ReservaForm
                data={reserva}
                initialValues={reserva}
                onSubmit={editReserva}
            />
        );
    }
}
