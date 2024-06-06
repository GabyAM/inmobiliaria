export function fetchTipoPropiedades() {
    return fetch('http://localhost/tipo_propiedades')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener tipos de propiedades');
            }
            return res.json();
        })
        .then((response) => response.data);
}
