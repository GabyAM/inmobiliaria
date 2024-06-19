import '../assets/styles/reservas.css';
import { Link } from "react";
import { Etiqueta } from './Etiqueta';
import { DeleteIcon, EditIcon } from "./Icons";

export function Reservas ({ reservas, onDeleteClick }){

    
    return (
    <div className="reservas">
        <div className="top-section">
                <Etiqueta color={"celeste"}>
                {<h1 className="domicilio">{reservas.propiedad.domicilio}</h1>}
            </Etiqueta>
        </div>
        <br></br>
        <div className="reserva-info">
            <div className='top-section'>
                <p><strong>Inquilino:</strong> {reservas.inquilino.apellido}-{reservas.inquilino.nombre}</p>
            </div>
            <div className='mid-section'>  
                <p><strong>Tiene reserva desde:</strong> {reservas.fecha_desde}</p>
                <div className='sub-section'>
                <p><strong>Valor total:</strong> {reservas.valor_total}</p>
            </div>
            </div>
        </div>
    </div>

    );
}