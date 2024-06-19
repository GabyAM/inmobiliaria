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

export function fetchTipoPropiedad(id) {
    return fetch(`http://localhost/tipo_propiedades/${id}`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error obtener el tipo de propiedad');
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function editTiposPropiedad(id, formData) {
    return fetch(`http://localhost/tipo_propiedades/${id}`, {
        method: 'PUT',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    });
}

export function addTiposPropiedad(formData) {
    return fetch(`http://localhost/tipo_propiedades`, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    });
}
