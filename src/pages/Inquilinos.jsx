import '../assets/styles/inquilinos.css';
import { useFetchData } from '../hooks/useFetchData';
import { deleteInquilino, fetchInquilinos } from '../api/inquilinos';
import { Inquilino } from '../components/Inquilino';
import { useState } from 'react';
import { DeletePopup } from '../components/DeletePopup';
import { Link } from 'react-router-dom';

export function Inquilinos() {
    const {
        data: inquilinos,
        setData: setInquilinos,
        isLoading,
        error
    } = useFetchData(fetchInquilinos);
    const [deletingId, setDeletingId] = useState(null);
    function onDeleteSuccess() {
        setInquilinos((prev) => {
            return prev.filter((prop) => prop.id !== deletingId);
        });
        setDeletingId(null);
    }

    return (
        <div className="list-container inquilinos-container">
            {deletingId && (
                <DeletePopup
                    title="Eliminar inquilino"
                    description="Estas seguro de eliminar este inquilino? no se va a poder recuperar una vez eliminado."
                    onCancel={() => setDeletingId(null)}
                    onDelete={() => deleteInquilino(deletingId)}
                    onSuccess={onDeleteSuccess}
                ></DeletePopup>
            )}
            <div className="heading">
                <h1>Inquilinos</h1>
                <Link to="/inquilinos/new">
                    <button>Crear nuevo</button>
                </Link>
            </div>
            <div className="list inquilinos">
                {isLoading ? (
                    <p>Cargando...</p>
                ) : error ? (
                    <p>Hubo un error</p>
                ) : (
                    inquilinos.map((inquilino) => (
                        <Inquilino
                            key={inquilino.id}
                            inquilino={inquilino}
                            onDeleteClick={() => setDeletingId(inquilino.id)}
                        ></Inquilino>
                    ))
                )}
            </div>
        </div>
    );
}
