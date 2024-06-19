import { useFetchData } from '../hooks/useFetchData';
import { Reservas } from '../components/Reservas'
import { deleteReserva, fetchReservas } from '../api/reservas';
import { DeletePopup } from '../components/DeletePopup';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Reserva() {

    const {
        data: reservas,
        setData: setInquilinos,
        isLoading,
        error
    } = useFetchData(fetchReservas);

    const [deletingId, setDeletingId] = useState(null);
    function onDeleteSuccess() {
        setInquilinos((prev) => {
            return prev.filter((prop) => prop.id !== deletingId);
        });
        setDeletingId(null);
    }

    return (
        <div className="list-container">
            {deletingId && (
                <DeletePopup
                    title="Eliminar Reserva"
                    description="Estas seguro de eliminar esta reserva? no se va a poder recuperar una vez eliminado."
                    onCancel={() => setDeletingId(null)}
                    onDelete={() => deleteReserva(deletingId)}
                    onSuccess={onDeleteSuccess}
                ></DeletePopup>
            )}
            <div className="heading">
                <h1>Reserva</h1>
                <Link to={"/reservas/new"}>
                    <button> crear nuevo</button>
                </Link>
            </div>
            <div className="list">{
                isLoading ? (
                    <p>carganodo...</p>
                ) 
                : error ? (<p>{error.message} </p>) 
                : (
                    reservas.map((reserva) =>(
                    <Reservas
                        key = {reserva.id}
                        reservas = {reserva}
                        onDeleteClick={() => setDeletingId(reserva.id)}
                    ></Reservas>
                    ))
                )}
            </div>
        </div>
    );
}
