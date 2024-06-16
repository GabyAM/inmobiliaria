import { addLocalidad } from '../api/localidades';
import { LocalidadForm } from '../components/LocalidadForm';

export function NewLocalidad() {
    return (
        <>
            <h2>Crear localidad</h2>
            <LocalidadForm onSubmit={addLocalidad}></LocalidadForm>
        </>
    );
}
