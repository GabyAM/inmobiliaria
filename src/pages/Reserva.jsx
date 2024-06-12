import { useFetchData } from '../hooks/useFetchData';
import { Reservas } from '../components/Reservas'

function fetchReserva (){
    return fetch ('http://localhost/reservas')
    .then((res) => {
        if (!res.ok){
            throw new Error ('Error al obtener las reservas') 
        }
        return res.json();
    })
    .then((Response) => Response.data);
}

export function Reserva() {
    
    const {
        data:reserva,
        isLoading,
        error
    } = useFetchData (fetchReserva);

    return (
        <>
            <h1>Reserva</h1>
            <div>{
                isLoading ? (
                    <p>carganodo...</p>
                ) 
                : error ? (<p>{error.message} </p>) 
                : (
                    reserva.map((reservas) =>
                    <Reservas
                        key = {reservas.id}
                        reservas = {reservas}
                    ></Reservas>
                    )
                )}
            </div>
        </>
    );
}
