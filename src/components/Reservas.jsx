import { Etiqueta } from './Etiqueta';
import '../assets/styles/reserva.css';
import { BuildingIcon, PinIcon, UsersIcon } from './Icons'
//1.edificio 2.persona 3.localidad
export function Reservas ({ reservas }){
    return (

    <div className="reserva">
        <div className='encabezado'>
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
/*
a. Propiedad (domicilio, no propiedad_id)
b. Inquilino(nombre y apellido del inquilino, no inquilino_id)
c. Fecha desde
d. Cantidad noches
e. valor total */


    /*<div className="reserva">
        <div>
            <h2>Reserva:{reserva.id}</h2>
        </div>
        <div className="reserva-info">
            <div> 
                <Etiqueta color={'celeste'}>
                    {reserva.propiedad.domicilio}
                </Etiqueta>
            </div>
            <div> 
                <p>{reserva.inquilino.nombre}</p>
            </div>
                <p>{reserva.inquilino.apellido}</p>
        </div>
    </div>*/