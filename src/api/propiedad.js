export function fetchPropiedad(id, populado = true) {
    return fetch(`http://localhost/propiedades/${id}?populado=${populado}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener propiedad');
            }
            return res.json();
        })
        .then((response) => response.data);
}

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

export function editPropiedad(id, formData) {
    return fetch(`http://localhost/propiedades/${id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        if (!res.ok && res.status === 500) {
            throw new Error('');
        }
        return res.json();
    });
}

export function addPropiedad(formData) {
    return fetch(`http://localhost/propiedades`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    }).then((res) => {
        if (!res.ok && res.status === 500) {
            throw new Error('');
        }
        return res.json();
    });
}
