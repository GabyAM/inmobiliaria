import { PropiedadForm } from '../components/PropiedadForm';

export function NewPropiedad() {
    function addPropiedad(formData) {
        return fetch(`http://localhost/propiedades`, {
            method: 'POST',
            body: JSON.stringify(formData), //convierte el objeto formData en una cadena JSON
            headers: { 'Content-Type': 'application/json' }
        });
    }

    return (
        <PropiedadForm
            initialValues={{ cochera: false, disponible: false }}
            onSubmit={addPropiedad}
        ></PropiedadForm>
    );
}
