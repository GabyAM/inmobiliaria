import { fetchInquilinos } from '../api/inquilinos';
import { useFetchData } from '../hooks/useFetchData';
import { Form } from './Form';
import { ContentSection } from './ContentSection';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';
import { fetchPropiedades } from '../api/propiedad';

export function ReservaForm({ data, onSubmit }) {
    const {
        data: propiedades,
        isLoading: isLoadingPropiedades,
        error: errorPropiedades
    } = useFetchData(fetchPropiedades);

    const {
        data: inquilinos,
        isLoading: isLoadingInquilinos,
        error: errorInquilinos
    } = useFetchData(fetchInquilinos);

    return (
        <Form
            data={data}
            disabled={!inquilinos || !propiedades}
            onSubmit={onSubmit}
            successUrl={'/reservas'}
        >
            <ContentSection title="FORMULARIO DE RESERVAS">
                <FormSelect
                    name="propiedad_id"
                    rules={{
                        required: 'este campo es requeirdo'
                    }}
                    label="propiedad"
                    placeholder="selecione el tipo de propiedad"
                    data={propiedades?.map((p) => ({
                        id: p.id,
                        text: p.domicilio
                    }))}
                    isLoading={isLoadingPropiedades}
                    error={errorPropiedades}
                ></FormSelect>
                <FormSelect
                    name="inquilino_id"
                    rules={{ required: 'este campo es requerido' }}
                    label="inquilino"
                    placeholder="selecione el inquilino"
                    data={inquilinos?.map((inqui) => ({
                        id: inqui.id,
                        text: inqui.apellido + ' ' + inqui.nombre
                    }))}
                    isLoading={isLoadingInquilinos}
                    error={errorInquilinos}
                ></FormSelect>
                <FormInput
                    name="fecha_desde"
                    type="date"
                    rules={{ required: 'este campo es requerido' }}
                    label="fecha de reserva"
                ></FormInput>
                <FormInput
                    name="cantidad_noches"
                    type="number"
                    rules={{
                        required: 'este campo es requerido',
                        min: 1
                    }}
                    label="cantidad de noches"
                ></FormInput>
                <FormInput
                    name="valor_total"
                    type="number"
                    rules={{
                        required: 'este campo es requerido',
                        min: 0
                    }}
                    label="valor total"
                ></FormInput>
            </ContentSection>
        </Form>
    );
}
