import { useCallback } from "react";
import { ReservaForm } from "../components/ReservasForm";
import { useFetchData } from "../hooks/useFetchData";
import { useParams } from "react-router-dom";

function fetchRerserva (id){
    return fetch(`http://localhost/reservas/${id}`)
        .then((res) => {
            if (!res.ok){
                throw new Error ('Error al obtener la reserva')
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function EditReserva (){
    const { id } = useParams();

    const fetchFn = useCallback(() => fetchRerserva(id),[id]);
    const {
        data:reserva,
        isLoading,
        error
    } = useFetchData(fetchFn);

    function editReserva (formData){
        return fetch(`http://localhost/reservas/${id}`,{
            method:'PUT',
            body: JSON.stringify(formData),
            headers: {'content-type' : 'application/json'}
        });
    }

    if (isLoading) {
        return <p>Cargando formulario...</p>;
    } else if (error) {
        return <p>Hubo un error: {error.message}</p>;
    } else {
        return (
            <ReservaForm
                data={reserva}
                onSubmit={editReserva}
            />
        );
    }
}