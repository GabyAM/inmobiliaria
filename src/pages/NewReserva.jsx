import { ReservaForm } from '../components/ReservasForm'

export function NewReserva (){
    function addReserva (formData){
        return fetch(`http://localhost/reservas`,{
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        })
    }

    return(
        <ReservaForm
        onSubmit= {addReserva}
        ></ReservaForm>
    )
}