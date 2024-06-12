import { Form } from './Form';
import { FormInput } from './FormInput';
import { FormSection } from './FormSection';

export function TipoPropiedadesForm ( { data, initialValues, onSubmit } ){
    return(
        <Form
            data={data}
            initialValues={initialValues}
            onSubmit={onSubmit}
            successUrl= "/tipos_propiedad"
        >
            <FormSection title = "INGRESE EL TIPO DE PROPIEDAD">
                <FormInput
                    name="nombre" //tiene que coincidir con el de Backend
                    label="nombre"
                    rules = {{
                        required: 'este campo es obligatorio'
                    }}
                >
                </FormInput>
            </FormSection>
        </Form>
    );
}