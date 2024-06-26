import '../assets/styles/reservas.css';
import { Link } from "react-router-dom";
import { Etiqueta } from './Etiqueta';
import { DeleteIcon, EditIcon } from '../components/Icons';

export function Reservas ({ reservas, onDeleteClick }){

    
    return (
    <div className="reservas">
        <div className="reservas-head">
            <h2>{reservas.propiedad.domicilio}</h2>
            <Etiqueta color={"celeste"}>
                {reservas.fecha_desde}
            </Etiqueta>
        </div>
        <br/>
        <div className="reservas-info">
            <div>
                <div className="inquilino">
                    <p><strong>Inquilino:</strong> {reservas.inquilino.apellido}-{reservas.inquilino.nombre} </p>
                </div>
                <div>
                    <span><strong>Noches: </strong> {reservas.cantidad_noches}</span><span>•</span>
                    <span><strong>Total: </strong>  ${reservas.valor_total}</span>
                </div>
            </div>
            <div className="actions-section">
                <Link to={`/reservas/${reservas.id}/edit`}>
                    <button className="edit-button">
                        <EditIcon width="1.3em" height="1.3em"></EditIcon>
                    </button>
                </Link>
                <button 
                    className="delete-button"
                    onClick={() => onDeleteClick()}>
                    <DeleteIcon width="1.3em" height="1.3em"></DeleteIcon>
                </button>
            </div>
        </div>
        <br/>
        <div className="horizontal-separator"></div>
    </div>

    );
}