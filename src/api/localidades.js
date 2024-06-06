export function fetchLocalidades() {
    return fetch('http://localhost/localidades')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener localidades');
            }
            return res.json();
        })
        .then((response) => response.data);
}
