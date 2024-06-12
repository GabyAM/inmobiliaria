export function fetchInquilinos (){
    return fetch(`http://localhost/inquilinos`)
        .then((res) => {
            if (!res.ok) {
                throw new Error ('Error al obtener inquilinos');
            }
            return res.json();
        })
        .then((response) => response.data);
}