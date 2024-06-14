export function fetchInquilino(id) {
    return fetch(`http://localhost/inquilinos/${id}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener inquilinos');
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function fetchInquilinos() {
    return fetch(`http://localhost/inquilinos`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener inquilinos');
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function deleteInquilino(id) {
    return fetch(`http://localhost/inquilinos/${id}`, {
        method: 'DELETE'
    }).then((res) => {
        if (!res.ok && res.status === 500) {
            throw new Error('');
        }
        return res.json();
    });
}
