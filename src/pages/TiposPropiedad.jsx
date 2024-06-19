import '../assets/styles/tiposPropiedad.css';
import { useState } from 'react';
import { TipoPropiedades } from '../components/TipoPropiedades';
import { useFetchData } from '../hooks/useFetchData';
import { DeletePopup } from '../components/DeletePopup';
import { deleteTipoPropiedad, fetchTipoPropiedades } from '../api/tipoPropiedades';
import { Link } from 'react-router-dom';

export function TiposPropiedad() {

    const [deletingId, setDeletingId] = useState(null);
    
    const {
        data: tiposPropiedad,
        setData: setTiposPropiedades,
        isLoading,
        error
    } = useFetchData(fetchTipoPropiedades);
    
    function onDeleteSuccess() {
        setTiposPropiedades((prev) => {
            return prev.filter((prop) => prop.id !== deletingId);
        });
        setDeletingId(null);
    }

    return (
        <div className="list-container tipo-Propiedad-container">
            {deletingId && (
                <DeletePopup
                    title="Eliminar Tipo de Propiedad"
                    description="Estas seguro de eliminar este tipo de Propiedad? no se va a poder recuperar una vez eliminada."
                    onCancel={() => setDeletingId(null)}
                    onDelete={() => deleteTipoPropiedad(deletingId)}
                    onSuccess={onDeleteSuccess}
                ></DeletePopup>
            )}    
            <div className="heading">
                <h1>Propiedades</h1>
                <Link to="/tipos_propiedad/new">
                    <button>Crear nueva</button>
                </Link>
            </div> 
            <div className="list tipo-propiedad">
                {isLoading ? ( //isLoading cargando boolean
                    <p>Cargando...</p>
                ) : error ? (
                    <p>{error.message}</p>
                ) : (
                    tiposPropiedad.map((tp) => (
                        <TipoPropiedades
                            key={tp.id}
                            tipoPropiedades={tp}
                            onDeleteClick={() => setDeletingId(tp.id)}
                        ></TipoPropiedades>
                    ))
                )}
            </div>
        </div>
    );
}
