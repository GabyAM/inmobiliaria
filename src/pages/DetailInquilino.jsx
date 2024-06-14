import { Link, useNavigate, useParams } from 'react-router-dom';
import { ContentSection } from '../components/ContentSection';
import { DeletePopup } from '../components/DeletePopup';
import { DeleteIcon, EditIcon } from '../components/Icons';
import { useCallback, useState } from 'react';
import { useFetchData } from '../hooks/useFetchData';
import {
    deleteInquilino,
    fetchInquilino,
    fetchInquilinos
} from '../api/inquilinos';
import { fetchReservasInquilino } from '../api/reservas';

export function DetailInquilino() {
    const { id } = useParams();

    const fetchFn = useCallback(() => fetchInquilino(id), [id]);
    const deleteFn = useCallback(() => deleteInquilino(id), [id]);
    const { data: inquilino, isLoading, error } = useFetchData(fetchFn);

    const reservasFetchFn = useCallback(() => fetchReservasInquilino(id), [id]);
    const {
        data: reservas,
        isLoading: isLoadingReservas,
        error: errorReservas
    } = useFetchData(reservasFetchFn);

    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    if (isLoading) return <p>cargando...</p>;
    if (error) return <p>hubo un error</p>;
    return (
        <>
            {isDeleting && (
                <DeletePopup
                    title="Eliminar inquilino"
                    description="Estas seguro de eliminar esta inquilino? no se va a poder recuperar una vez eliminado."
                    onCancel={() => setIsDeleting(false)}
                    onDelete={deleteFn}
                    onSuccess={() => navigate('/inquilinos')}
                ></DeletePopup>
            )}
            <div className="inquilino-detail">
                <div className="detail-list">
                    <div className="detail-heading">
                        <span>#{id}</span>
                        <h1>
                            {inquilino.nombre} {inquilino.apellido}
                        </h1>
                    </div>
                    <ContentSection title="Información general">
                        <span>Documento: {inquilino.documento}</span>
                        <span>Email: {inquilino.email}</span>
                        <span>Activo: {inquilino.activo ? 'Si' : 'No'}</span>
                    </ContentSection>
                    <ContentSection title="Reservas">
                        <ul className="reservas-inquilino">
                            {isLoadingReservas ? (
                                <p>Cargando reservas</p>
                            ) : errorReservas ? (
                                <p>Hubo un error</p>
                            ) : reservas.length === 0 ? (
                                <p>El inquilino no tiene ninguna reserva</p>
                            ) : (
                                reservas.map((reserva) => (
                                    <li key={reserva.id}>
                                        <div className="reserva-summary">
                                            •
                                            <span>
                                                {reserva.propiedad.domicilio}
                                            </span>
                                            <span>
                                                Desde {reserva.fecha_desde}
                                            </span>
                                        </div>
                                    </li>
                                ))
                            )}
                        </ul>
                    </ContentSection>
                </div>
                <div className="detail-actions">
                    <Link to={`/inquilinos/${id}/edit`}>
                        <button className="edit-button">
                            <EditIcon></EditIcon>
                            <span>Editar</span>
                        </button>
                    </Link>
                    <button
                        className="delete-button"
                        onClick={() => setIsDeleting(true)}
                    >
                        <DeleteIcon></DeleteIcon>
                        <span>Eliminar</span>
                    </button>
                </div>
            </div>
        </>
    );
}
