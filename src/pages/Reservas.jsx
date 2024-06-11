import { useFetchData } from '../hooks/useFetchData';
import { Reserva } from '../components/Reserva'

function fetchReservas (){
    return fetch ('http://localhost/reservas')
    .then((res) => {
        if (!res.ok){
            throw new Error ('Error al obtener las reservas') 
        }
        return res.json();
    })
    .then((Response) => Response.data);
}

export function Reservas() {
    
    const {
        data:reservas,
        isLoading,
        error
    } = useFetchData (fetchReservas);

    return (
        <>
            <h1>Reservas</h1>
            <div>{
                isLoading ? (
                    <p>carganodo...</p>
                ) 
                : error ? (<p>{error.message} </p>) 
                : (
                    reservas.map((reserva) =>
                        <Reserva
                        key = {reserva.id}
                        reserva = {reserva}
                    />
                    )
                )}
            </div>
        </>
    );
}
