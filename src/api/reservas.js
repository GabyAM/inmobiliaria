export function fetchReservas (){
    return fetch (`http://localhost/reservas`)
    .then((res) => {
        if (!res.ok){
            throw new Error ('Error al obtener las reservas') 
        }
        return res.json();
    })
    .then((Response) => Response.data);
}


export function fetchReserva (id){
    return fetch(`http://localhost/reservas/${id}`)
        .then((res) => {
            if (!res.ok){
                throw new Error ('Error al obtener la reserva')
            }
            return res.json();
        })
        .then((response) => response.data);
}


export function fetchReservasInquilino(id) {
    return fetch(`http://localhost/inquilinos/${id}/reservas`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener reservas de inquilino');
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function fetchRerserva(id) {
    return fetch(`http://localhost/reservas/${id}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener la reserva');
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function editReserva(id, formData) {
    return fetch(`http://localhost/reservas/${id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: { 'content-type': 'application/json' }
    });
}

export function newReserva(formData) {
    return fetch(`http://localhost/reservas`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    });
}
