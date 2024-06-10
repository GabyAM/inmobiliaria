import { Form } from './Form';
import { FormInput } from './FormInput';
import { FormSection } from './FormSection';

export function TipoPropiedadesForm ( { data, initialValues, onSubmit } ){
    return(
        <Form
            data={data}
            initialValues={initialValues}
            onSubmit={onSubmit}
            successUrl="/tipo_propiedades"
        >
            <FormSection title = "INGRESE EL TIPO DE PROPIEDAD">
                <FormInput
                    name="tipo de propiedad"
                    label="Tipo de propiedad"
                    rules = {{
                        required: 'este campo es obligatorio'
                    }}
                >
                </FormInput>
            </FormSection>
        </Form>
    );
}