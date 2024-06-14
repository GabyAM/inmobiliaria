export function fetchPropiedades(filters) {
    let url = 'http://localhost/propiedades';
    if (filters) {
        url += '?' + new URLSearchParams(filters).toString();
    }

    return fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener propiedades');
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function deletePropiedad(id) {
    return fetch(`http://localhost/propiedades/${id}`, {
        method: 'DELETE'
    }).then((res) => {
        if (!res.ok && res.status === 500) {
            throw new Error('');
        }
        return res.json();
    });
}
