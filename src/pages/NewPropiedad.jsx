import { addPropiedad } from '../api/propiedad';
import { PropiedadForm } from '../components/PropiedadForm';

export function NewPropiedad() {
    return (
        <PropiedadForm
            initialValues={{ cochera: false, disponible: false }}
            onSubmit={addPropiedad}
        ></PropiedadForm>
    );
}
