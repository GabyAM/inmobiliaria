import { TipoPropiedadesForm } from "../components/TipoPropiedadesForm";

export function NewTiposPropiedad (){
    function addTiposPropiedad (formData){
        return fetch(`http://localhost/tipo_propiedades`,{
            method: "POST",
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
            }
        );
    }

    return(
        <TipoPropiedadesForm
            initialValues = {{ nombre:'' }}
            onSubmit = {addTiposPropiedad} 
        />
    );
}
//onSumit: función de manejo de envío |Al enviar el formulario, se llama a addTiposPropiedad para enviar los datos al servidor.