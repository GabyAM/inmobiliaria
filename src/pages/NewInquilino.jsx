import { addInquilino } from '../api/inquilinos';
import { InquilinoForm } from '../components/InquilinoForm';

export function NewInquilino() {
    return (
        <InquilinoForm
            onSubmit={addInquilino}
            initialValues={{ activo: false }}
        ></InquilinoForm>
    );
}
