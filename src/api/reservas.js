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
