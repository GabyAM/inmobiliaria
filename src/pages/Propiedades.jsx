import { useCallback, useState } from 'react';
import { deletePropiedad, fetchPropiedades } from '../api/propiedad';
import '../assets/styles/propiedades.css';
import { FiltersForm } from '../components/FiltersForm';
import { Propiedad } from '../components/Propiedad';
import { useFetchData } from '../hooks/useFetchData';
import { DeletePopup } from '../components/DeletePopup';

export function Propiedades() {
    const [filters, setFilters] = useState(null);
    const [deletingId, setDeletingId] = useState(null);
    const fetchFn = useCallback(() => fetchPropiedades(filters), [filters]);
    const {
        data: propiedades,
        setData: setPropiedades,
        isLoading,
        error
    } = useFetchData(fetchFn);

    function onDeleteSuccess() {
        setPropiedades((prev) => {
            return prev.filter((prop) => prop.id !== deletingId);
        });
        setDeletingId(null);
    }

    return (
        <div className="propiedades-layout">
            {deletingId && (
                <DeletePopup
                    title="Eliminar propiedad"
                    description="Estas seguro de eliminar esta propiedad? no se va a poder recuperar una vez eliminada."
                    onCancel={() => setDeletingId(null)}
                    onDelete={() => deletePropiedad(deletingId)}
                    onSuccess={onDeleteSuccess}
                ></DeletePopup>
            )}
            <div className="propiedades-container">
                <h1 className="main-title">Propiedades</h1>
                <div className="propiedades">
                    {isLoading ? (
                        <p>Cargando...</p>
                    ) : error ? (
                        <p>{error.message}</p>
                    ) : (
                        propiedades.map((propiedad) => (
                            <Propiedad
                                key={propiedad.id}
                                propiedad={propiedad}
                                onDeleteClick={() =>
                                    setDeletingId(propiedad.id)
                                }
                            ></Propiedad>
                        ))
                    )}
                </div>
            </div>
            {!isLoading && !error && (
                <FiltersForm
                    onSubmit={(formData) => setFilters(formData)}
                ></FiltersForm>
            )}
        </div>
    );
}
