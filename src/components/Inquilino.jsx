import { Link } from 'react-router-dom';
import { Etiqueta } from './Etiqueta';
import { DeleteIcon, EditIcon } from './Icons';

export function Inquilino({ inquilino, onDeleteClick }) {
    return (
        <div className="inquilino">
            <div className="top-section">
                <Link to={`/inquilinos/${inquilino.id}`}>
                    <h2>
                        {inquilino.nombre} {inquilino.apellido}
                    </h2>
                </Link>
                <Etiqueta color={inquilino.activo ? 'celeste' : 'gris'}>
                    {inquilino.activo ? 'Activo' : 'Inactivo'}
                </Etiqueta>
            </div>
            <div className="mid-section">
                <span>{inquilino.email}</span>
            </div>
            <div className="bottom-section">
                <span>DNI: {inquilino.documento}</span>
                <div className="actions-section">
                    <Link to={`/inquilinos/${inquilino.id}/edit`}>
                        <button className="edit-button">
                            <EditIcon width="1.3em" height="1.3em"></EditIcon>
                        </button>
                    </Link>
                    <button className="delete-button" onClick={onDeleteClick}>
                        <DeleteIcon width="1.3em" height="1.3em"></DeleteIcon>
                    </button>
                </div>
            </div>
        </div>
    );
}
