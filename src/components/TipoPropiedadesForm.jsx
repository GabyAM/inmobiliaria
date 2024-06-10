import { Form } from './Form';
import { FormInput } from './FormInput';
import { FormSection } from './FormSection';
export function TipoPropiedadesForm ( { initialValues, onSubmit } ){
    return(
        <Form
            initialValues={initialValues}
            onSubmit={onSubmit}
            successUrl="/tipo_propiedades"
        >
            <FormSection title = "INGRESE EL TIPO DE PROPIEDAD">
                <FormInput
                    name="tipo de propiedad"
                    label="Tipo de propiedad"
                    rules = {{
                        require: 'este campo es obligatorio'
                    }}
                >
                </FormInput>
            </FormSection>
        </Form>
    );
}