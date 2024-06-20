import { TipoPropiedadesForm } from '../components/TipoPropiedadesForm';
import { newTiposPropiedad } from '../api/tipoPropiedades';

export function NewTiposPropiedad() {
    return <TipoPropiedadesForm onSubmit={newTiposPropiedad} />;
}
//onSumit: función de manejo de envío |Al enviar el formulario, se llama a addTiposPropiedad para enviar los datos al servidor.
