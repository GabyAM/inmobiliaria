import '../assets/styles/localidades.css';
import React, { useState } from 'react';
import { deleteLocalidad, fetchLocalidades } from '../api/localidades';
import { useFetchData } from '../hooks/useFetchData';
import { DeletePopup } from '../components/DeletePopup';
import { Link } from 'react-router-dom';
import { DeleteIcon, EditIcon } from '../components/Icons';

export function Localidades() {
    const {
        data: localidades,
        setData: setLocalidades,
        isLoading,
        error
    } = useFetchData(fetchLocalidades);

    const [deletingId, setDeletingId] = useState(null);
    function onDeleteSuccess() {
        setLocalidades((prev) => {
            return prev.filter((prop) => prop.id !== deletingId);
        });
        setDeletingId(null);
    }

    return (
        <div className="list-container localidades-container">
            {deletingId && (
                <DeletePopup
                    title="Eliminar localidad"
                    description="Estas seguro de eliminar esta localidad? no se va a poder recuperar una vez eliminada."
                    onCancel={() => setDeletingId(null)}
                    onDelete={() => deleteLocalidad(deletingId)}
                    onSuccess={onDeleteSuccess}
                ></DeletePopup>
            )}
            <h1>Localidades</h1>
            <div className="list localidades">
                {isLoading ? (
                    <p>Cargando...</p>
                ) : error ? (
                    <p>Hubo un error</p>
                ) : (
                    localidades.map((localidad, index) => (
                        <React.Fragment key={localidad.id}>
                            <div className="localidad">
                                <h2>{localidad.nombre}</h2>
                                <div className="actions-section">
                                    <Link
                                        to={`/localidades/${localidad.id}/edit`}
                                    >
                                        <button className="edit-button">
                                            <EditIcon
                                                width="1.3em"
                                                height="1.3em"
                                            ></EditIcon>
                                        </button>
                                    </Link>
                                    <button
                                        className="delete-button"
                                        onClick={() =>
                                            setDeletingId(localidad.id)
                                        }
                                    >
                                        <DeleteIcon
                                            width="1.3em"
                                            height="1.3em"
                                        ></DeleteIcon>
                                    </button>
                                </div>
                            </div>
                            {index < localidades.length - 1 && (
                                <div className="horizontal-separator"></div>
                            )}
                        </React.Fragment>
                    ))
                )}
            </div>
        </div>
    );
}
