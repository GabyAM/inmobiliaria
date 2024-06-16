import { ContentSection } from './ContentSection';
import { Form } from './Form';
import { FormCheckbox } from './FormCheckbox';
import { FormInput } from './FormInput';

export function InquilinoForm({ data, onSubmit, initialValues }) {
    return (
        <Form
            data={data}
            initialValues={initialValues}
            onSubmit={onSubmit}
            successUrl="/inquilinos"
        >
            <ContentSection title="Información general">
                <FormInput
                    type="text"
                    name="nombre"
                    label="Nombre"
                    rules={{
                        required: 'El nombre es requerido',
                        maxLength: {
                            value: 25,
                            message:
                                'El nombre no puede tener mas de 25 carácteres'
                        }
                    }}
                ></FormInput>
                <FormInput
                    type="text"
                    name="apellido"
                    label="Apellido"
                    rules={{
                        required: 'El apellido es requerido',
                        maxLength: {
                            value: 15,
                            message:
                                'El apellido no puede tener mas de 15 carácteres'
                        }
                    }}
                ></FormInput>
                <FormInput
                    type="text"
                    name="documento"
                    label="Documento"
                    rules={{
                        required: 'El documento es requerido',
                        maxLength: {
                            value: 15,
                            message:
                                'El documento no puede tener mas de 20 carácteres'
                        }
                    }}
                ></FormInput>
                <FormInput
                    type="text"
                    name="email"
                    label="Email"
                    rules={{
                        required: 'El email es requerido',
                        maxLength: {
                            value: 20,
                            message:
                                'El email no puede tener mas de 20 carácteres'
                        },
                        pattern: {
                            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'El formato del email es incorrecto'
                        }
                    }}
                ></FormInput>
            </ContentSection>
            <ContentSection title="Información adicional">
                <FormCheckbox
                    name="activo"
                    label="Activo"
                    rules={{}}
                ></FormCheckbox>
            </ContentSection>
        </Form>
    );
}
