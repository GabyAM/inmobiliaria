import { useNavigate } from 'react-router-dom';
import '../assets/styles/deletepopup.css';
import { useState } from 'react';
import { ErrorLabel } from './ErrorLabel';

export function DeletePopup({
    title,
    description,
    onDelete,
    onCancel,
    successUrl
}) {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);

    function handleDelete() {
        if (isDeleting) return;
        setIsDeleting(true);
        setError(null);
        return onDelete()
            .then((res) => {
                if (res.error) {
                    throw new Error(res.error);
                }
                navigate(successUrl);
            })
            .catch((e) => setError(e.message))
            .finally(() => setIsDeleting(false));
    }
    return (
        <div className="popup-container">
            <div className="popup-card">
                <h1>{title}</h1>
                <p>{description}</p>
                <button
                    onClick={() => handleDelete()}
                    className={`delete-button ${isDeleting ? 'pending' : ''}`}
                >
                    Eliminar
                </button>
                <button onClick={() => onCancel()} className="cancel-button">
                    Cancelar
                </button>
                {error && <ErrorLabel>{error}</ErrorLabel>}
            </div>
        </div>
    );
}
