import { Form } from './Form';
import { FormCheckbox } from './FormCheckbox';
import { FormInput } from './FormInput';
import { ContentSection } from './ContentSection';
import { FormSelect } from './FormSelect';
import { useFetchData } from '../hooks/useFetchData';
import { fetchLocalidades } from '../api/localidades';
import { fetchTipoPropiedades } from '../api/tipoPropiedades';
import { ImageInput } from './ImageInput';

export function PropiedadForm({ data, initialValues, onSubmit }) {
    // tambien successUrl despues?
    const {
        data: localidades,
        isLoading: isLoadingLocalidades,
        error: errorLocalidades
    } = useFetchData(fetchLocalidades);
    const {
        data: tipoPropiedades,
        isLoading: isLoadingTipoPropiedades,
        error: errorTipoPropiedades
    } = useFetchData(fetchTipoPropiedades);

    return (
        <Form
            data={data}
            initialValues={initialValues}
            onSubmit={onSubmit}
            disabled={!tipoPropiedades || !localidades}
            successUrl="/propiedades"
        >
            <ImageInput
                name="imagen"
                rules={{
                    validate: async (value) => {
                        if (value) {
                            let file;
                            try {
                                const response = await fetch(value);
                                if (!response.ok) throw new Error('');
                                file = await response.blob();
                            } catch {
                                return 'No se pudo validar la imagen';
                            }
                            const maxSize = 5 * 1024 * 1024;
                            if (file.size > maxSize)
                                return 'El archivo excede el límite';

                            const acceptedTypes =
                                /image\/(jpeg|jpg|png|gif|webp)/;

                            if (!acceptedTypes.test(file.type)) {
                                return 'Tipo de archivo inválido';
                            }
                        }
                        return true;
                    }
                }}
            ></ImageInput>
            <ContentSection title="Información general">
                <FormInput
                    name="domicilio"
                    label="Domicilio"
                    rules={{
                        required: 'El domicilio es requerido'
                    }}
                ></FormInput>
                <FormSelect
                    name="tipo_propiedad_id"
                    rules={{
                        required: 'El tipo de propiedad es requerido'
                    }}
                    label="Tipo de propiedad"
                    placeholder="Seleccione el tipo de propiedad"
                    data={tipoPropiedades?.map((tp) => ({
                        id: tp.id,
                        text: tp.nombre
                    }))}
                    isLoading={isLoadingTipoPropiedades}
                    error={errorTipoPropiedades}
                ></FormSelect>
                <FormSelect
                    name="localidad_id"
                    rules={{ required: 'La localidad es requerida' }}
                    label="Localidad"
                    placeholder="Seleccione la localidad"
                    data={localidades?.map((loc) => ({
                        id: loc.id,
                        text: loc.nombre
                    }))}
                    isLoading={isLoadingLocalidades}
                    error={errorLocalidades}
                ></FormSelect>
            </ContentSection>
            <ContentSection title="Información sobre el interior">
                <FormInput
                    type="number"
                    name="cantidad_habitaciones"
                    label="Habitaciones"
                    rules={{
                        min: 0
                    }}
                ></FormInput>
                <FormInput
                    type="number"
                    name="cantidad_banios"
                    label="Baños"
                    rules={{ min: 0 }}
                ></FormInput>
                <FormCheckbox name="cochera" label="Cochera"></FormCheckbox>
            </ContentSection>
            <ContentSection title="Información sobre la reserva">
                <FormInput
                    type="date"
                    name="fecha_inicio_disponibilidad"
                    label="Fecha de inicio de disponibilidad"
                    rules={{ required: 'Esta fecha es requerida' }}
                ></FormInput>
                <FormInput
                    type="number"
                    name="cantidad_huespedes"
                    label="Huéspedes"
                    rules={{
                        required: 'La cantidad de huéspedes es requerida',
                        min: 0
                    }}
                ></FormInput>
                <FormInput
                    type="number"
                    name="cantidad_dias"
                    label="Días"
                    rules={{
                        required: 'La cantidad de dias es requerida',
                        min: 0
                    }}
                ></FormInput>
                <FormInput
                    type="number"
                    name="valor_noche"
                    label="Valor por noche"
                    rules={{
                        required: 'El valor por noche es requerido',
                        min: 0
                    }}
                ></FormInput>
                <FormCheckbox
                    name="disponible"
                    label="Disponible"
                ></FormCheckbox>
            </ContentSection>
        </Form>
    );
}
