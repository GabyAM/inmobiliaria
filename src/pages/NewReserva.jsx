import { addReserva } from '../api/reservas';
import { ReservaForm } from '../components/ReservasForm';

export function NewReserva() {
    return <ReservaForm onSubmit={addReserva}></ReservaForm>;
}
