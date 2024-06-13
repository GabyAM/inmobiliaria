import { Form } from './Form';
import { FormSelect } from './FormSelect';
import { FormInput } from './FormInput';
import { FormCheckbox } from './FormCheckbox';
import { useFetchData } from '../hooks/useFetchData';
import { fetchLocalidades } from '../api/localidades';

export function FiltersForm({ onSubmit }) {
    const {
        data: localidades,
        isLoading: isLoadingLocalidades,
        error: errorLocalidades
    } = useFetchData(fetchLocalidades);

    return (
        <div className="filters-section">
            <h3>Filtros</h3>
            <Form
                initialValues={{ disponible: false }}
                onSubmit={onSubmit}
                disabled={!localidades}
                successUrl="/propiedades"
                actionType="sync"
            >
                <FormInput
                    type="date"
                    name="fecha_inicio_disponibilidad"
                    label="Fecha de inicio de disponibilidad"
                    rules={{}}
                ></FormInput>
                <FormInput
                    type="number"
                    name="cantidad_huespedes"
                    label="Huéspedes"
                    rules={{
                        min: 0
                    }}
                ></FormInput>
                <FormSelect
                    name="localidad_id"
                    rules={{}}
                    label="Localidad"
                    placeholder="Seleccione la localidad"
                    data={localidades?.map((loc) => ({
                        id: loc.id,
                        text: loc.nombre
                    }))}
                    isLoading={isLoadingLocalidades}
                    error={errorLocalidades}
                ></FormSelect>
                <FormCheckbox
                    name="disponible"
                    label="Disponible"
                    rules={{}}
                ></FormCheckbox>
            </Form>
            <button className="reset-button" onClick={() => onSubmit(null)}>
                Restablecer
            </button>
        </div>
    );
}
