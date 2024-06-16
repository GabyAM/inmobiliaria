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

export function fetchLocalidad(id) {
    return fetch(`http://localhost/localidades/${id}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener localidad');
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function deleteLocalidad(id) {
    return fetch(`http://localhost/localidades/${id}`, {
        method: 'DELETE'
    }).then((res) => {
        if (!res.ok && res.status === 500) {
            throw new Error('');
        }
        return res.json();
    });
}

export function addLocalidad(formData) {
    return fetch(`http://localhost/localidades`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    });
}

export function editLocalidad(formData, id) {
    return fetch(`http://localhost/localidades/${id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    });
}
