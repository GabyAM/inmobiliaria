import { addTiposPropiedad } from '../api/tipoPropiedades';
import { TipoPropiedadesForm } from '../components/TipoPropiedadesForm';

export function NewTiposPropiedad() {
    return (
        <TipoPropiedadesForm
            initialValues={{ nombre: '' }}
            onSubmit={addTiposPropiedad}
        />
    );
}
//onSumit: función de manejo de envío |Al enviar el formulario, se llama a addTiposPropiedad para enviar los datos al servidor.
