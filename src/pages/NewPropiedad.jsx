import { addPropiedad } from '../api/propiedad';
import { PropiedadForm } from '../components/PropiedadForm';

export function NewPropiedad() {
    return (
        <>
            <h2>Crear propiedad</h2>
            <PropiedadForm
                initialValues={{ cochera: false, disponible: false }}
                onSubmit={addPropiedad}
            ></PropiedadForm>
        </>
    );
}
