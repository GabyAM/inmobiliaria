import '../assets/styles/detailpropiedad.css';
import '../assets/styles/detail.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useFetchData } from '../hooks/useFetchData';
import { useCallback, useState } from 'react';
import { deletePropiedad, fetchPropiedad } from '../api/propiedad';
import { ContentSection } from '../components/ContentSection';
import { DeleteIcon, EditIcon } from '../components/Icons';
import { DeletePopup } from '../components/DeletePopup';

export function DetailPropiedad() {
    const { id } = useParams();

    const fetchFn = useCallback(() => fetchPropiedad(id), [id]);
    const deleteFn = useCallback(() => deletePropiedad(id), [id]);
    const { data: propiedad, isLoading, error } = useFetchData(fetchFn);

    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    if (isLoading) return <p>cargando...</p>;
    if (error) return <p>hubo un error</p>;
    return (
        <>
            {isDeleting && (
                <DeletePopup
                    title="Eliminar propiedad"
                    description="Estas seguro de eliminar esta propiedad? no se va a poder recuperar una vez eliminada."
                    onCancel={() => setIsDeleting(false)}
                    onDelete={() => deleteFn()}
                    onSuccess={() => navigate('/propiedades')}
                ></DeletePopup>
            )}
            <div className="propiedad-detail">
                <div className="left-column">
                    <div className="image-container">
                        <img
                            src={
                                propiedad.imagen ||
                                '/propiedad-image-placeholder.png'
                            }
                        ></img>
                    </div>
                    <div className="detail-actions">
                        <Link to={`/propiedades/${id}/edit`}>
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
                <div className="detail-list">
                    <div className="detail-heading">
                        <span>#{id}</span>
                        <h1>{propiedad.domicilio}</h1>
                    </div>
                    <ContentSection title="Información general">
                        <span>
                            Tipo de propiedad: {propiedad.tipo_propiedad.nombre}
                        </span>
                        <span>Localidad: {propiedad.localidad.nombre}</span>
                    </ContentSection>
                    <ContentSection title="Información sobre el interior">
                        <span>
                            Habitaciones:{' '}
                            {propiedad.cantidad_habitaciones || 'N/A'}
                        </span>
                        <span>Baños: {propiedad.cantidad_banios || 'N/A'}</span>
                        <span>
                            Cochera:{' '}
                            {propiedad.cochera === null
                                ? 'N/A'
                                : propiedad.cochera
                                  ? 'Si'
                                  : 'No'}
                        </span>
                    </ContentSection>
                    <ContentSection title="Información sobre la reserva">
                        <span>
                            Fecha de inicio de disponibilidad:{' '}
                            {propiedad.fecha_inicio_disponibilidad}
                        </span>
                        <span>Huéspedes: {propiedad.cantidad_huespedes}</span>
                        <span>Dias: {propiedad.cantidad_dias}</span>
                        <span>Valor por noche: ${propiedad.valor_noche}</span>
                        <span>
                            Disponible: {propiedad.disponible ? 'Si' : 'No'}
                        </span>
                    </ContentSection>
                </div>
            </div>
        </>
    );
}
