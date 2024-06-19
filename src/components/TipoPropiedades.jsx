import "../assets/styles/tiposPropiedades.css";
import { Link } from 'react-router-dom';
import { DeleteIcon, EditIcon } from '../components/Icons';

export function TipoPropiedades({ tipoPropiedades, onDeleteClick }) {

    return (
        <div className="list">
           <div className="tipo-propiedades">
                <h2>{tipoPropiedades.nombre}</h2>
                <div className="actions-section">
                    <Link to={`/tipos_propiedad/${tipoPropiedades.id}/edit`}>
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
                        <DeleteIcon width="1.3em" height="1.3em"></DeleteIcon>
                    </button>
                </div>
            </div>
            <div className="horizontal-separator"></div>
        </div>
    );
}
