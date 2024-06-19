import { ReservaForm } from '../components/ReservasForm'
import { newReserva } from '../api/reservas';


export function NewReserva (){

    return(
        <ReservaForm
        onSubmit= {newReserva}
        ></ReservaForm>
    );
}
