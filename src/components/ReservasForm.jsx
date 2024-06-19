import { fetchTipoPropiedades } from '../api/tipoPropiedades';
import { fetchInquilinos } from '../api/inquilinos';
import { useFetchData } from '../hooks/useFetchData';
import { Form } from './Form';
import { ContentSection } from './ContentSection';
import { FormInput } from './FormInput';
import { FormSelect } from './FormSelect';

export function ReservaForm({ data, initialValues, onSubmit }) {
    const {
        data: tipoPropiedades,
        isLoading: isLoadingTipoPropiedades,
        error: errorTipoPropiedades
    } = useFetchData(fetchTipoPropiedades);

    const {
        data: inquilinos,
        isLoading: isLoadingInquilinos,
        error: errorInquilinos
    } = useFetchData(fetchInquilinos);

    return (
        <Form
            data={data}
            initialValues={initialValues}
            disabled={!inquilinos || !tipoPropiedades}
            onSubmit={onSubmit}
            successUrl={'/reservas'}
        >
            <ContentSection title="FORM RESERVAS">
                <FormSelect
                    name="propiedad_id"
                    rules={{
                        required: 'este campo es requeirdo'
                    }}
                    label="propiedad"
                    placeholder="selecione el tipo de propiedad"
                    data={tipoPropiedades?.map((tp) => ({
                        id: tp.id,
                        text: tp.nombre
                    }))}
                    isLoading={isLoadingTipoPropiedades}
                    error={errorTipoPropiedades}
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
            </ContentSection>
        </Form>
    );
}
