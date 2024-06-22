import { addInquilino } from '../api/inquilinos';
import { InquilinoForm } from '../components/InquilinoForm';

export function NewInquilino() {
    return (
        <>
            <h2>Crear inquilino</h2>
            <InquilinoForm
                onSubmit={addInquilino}
                initialValues={{ activo: false }}
            ></InquilinoForm>
        </>
    );
}
