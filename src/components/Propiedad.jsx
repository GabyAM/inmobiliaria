import '../assets/styles/propiedad.css';
import { Etiqueta } from './Etiqueta';
import { BuildingIcon, PinIcon, UsersIcon } from './Icons';

export function Propiedad({ propiedad }) {
    return (
        <div className="propiedad">
            <div className="image-container">
                <img
                    src={propiedad.imagen || '/propiedad-image-placeholder.png'}
                ></img>
            </div>
            <div className="propiedad-info">
                <div className="top-section">
                    <h2>{propiedad.domicilio}</h2>
                    <Etiqueta color={propiedad.disponible ? 'celeste' : 'gris'}>
                        {propiedad.disponible ? 'Disponible' : 'No disponible'}
                    </Etiqueta>
                </div>
                <div className="mid-section">
                    <div className="sub-section">
                        <div className="item">
                            <BuildingIcon
                                width="1.3em"
                                height="1.3em"
                            ></BuildingIcon>
                            <span>{propiedad.tipo_propiedad.nombre}</span>
                        </div>
                        <div className="item">
                            <UsersIcon width="1.3em" height="1.3em"></UsersIcon>
                            <span>
                                {`${propiedad.cantidad_huespedes} ${propiedad.cantidad_huespedes > 1 ? 'Huéspedes' : 'Huésped'}`}
                            </span>
                        </div>
                    </div>
                    <div className="sub-section">
                        <div className="item">
                            <PinIcon width="1.3em" height="1.3em"></PinIcon>
                            <span>{propiedad.localidad.nombre}</span>
                        </div>
                    </div>
                </div>
                {!propiedad.disponible && (
                    <span className="aviso-disponibilidad">
                        {`Disponible a partir del ${propiedad.fecha_inicio_disponibilidad}`}
                    </span>
                )}
            </div>
        </div>
    );
}
