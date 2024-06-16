import { Form } from './Form';
import { FormInput } from './FormInput';

export function LocalidadForm({ data, onSubmit }) {
    return (
        <Form data={data} onSubmit={onSubmit} successUrl="/localidades">
            <FormInput
                type="text"
                name="nombre"
                label="Nombre"
                rules={{
                    maxLength: {
                        value: 50,
                        message: 'El nombre no puede tener mas de 50 carácteres'
                    }
                }}
            ></FormInput>
        </Form>
    );
}
