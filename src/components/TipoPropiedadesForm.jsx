import { Form } from './Form';
import { FormInput } from './FormInput';
import { ContentSection } from './ContentSection';

export function TipoPropiedadesForm({ data, onSubmit }) {
    return (
        <Form data={data} onSubmit={onSubmit} successUrl="/tipos_propiedad">
            <ContentSection title="INGRESE EL TIPO DE PROPIEDAD">
                <FormInput
                    name="nombre" //tiene que coincidir con el de Backend
                    label="nombre"
                    rules={{
                        required: 'este campo es obligatorio'
                    }}
                ></FormInput>
            </ContentSection>
        </Form>
    );
}
