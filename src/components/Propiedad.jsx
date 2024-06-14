import { Link } from 'react-router-dom';
import '../assets/styles/propiedad.css';
import { Etiqueta } from './Etiqueta';
import { DeleteIcon, EditIcon } from './Icons';

export function Propiedad({ propiedad, onDeleteClick }) {
    return (
        <div className="propiedad">
            <div className="image-container">
                <Link to={`/propiedades/${propiedad.id}`}>
                    <img
                        src={
                            propiedad.imagen ||
                            '/propiedad-image-placeholder.png'
                        }
                    ></img>
                </Link>
            </div>
            <div className="propiedad-info">
                <div className="top-section">
                    <Link to={`/propiedades/${propiedad.id}`}>
                        <h2>{propiedad.domicilio}</h2>
                    </Link>
                    <Etiqueta color={propiedad.disponible ? 'celeste' : 'gris'}>
                        {propiedad.disponible ? 'Disponible' : 'No disponible'}
                    </Etiqueta>
                </div>
                <div className="mid-section">
                    <div className="sub-section">
                        <span>{propiedad.tipo_propiedad.nombre}</span>
                        <span className="section-separator">•</span>
                        <span>{propiedad.localidad.nombre}</span>
                    </div>
                    <div className="sub-section">
                        <span>
                            {`${propiedad.cantidad_huespedes} ${propiedad.cantidad_huespedes > 1 ? 'Huéspedes' : 'Huésped'}`}
                        </span>
                        <span className="section-separator">•</span>
                        <span>${propiedad.valor_noche} por noche</span>
                    </div>
                </div>
                <div className="bottom-section">
                    {!propiedad.disponible && (
                        <span className="aviso-disponibilidad">
                            {`Disponible a partir del ${propiedad.fecha_inicio_disponibilidad}`}
                        </span>
                    )}
                    <div className="actions-section">
                        <Link to={`/propiedades/${propiedad.id}/edit`}>
                            <button className="edit-button">
                                <EditIcon
                                    width="1.3em"
                                    height="1.3em"
                                ></EditIcon>
                            </button>
                        </Link>
                        <button
                            className="delete-button"
                            onClick={() => onDeleteClick()}
                        >
                            <DeleteIcon
                                width="1.3em"
                                height="1.3em"
                            ></DeleteIcon>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
