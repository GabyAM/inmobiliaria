import { useCallback, useState } from 'react';
import { fetchPropiedades } from '../api/propiedad';
import '../assets/styles/propiedades.css';
import { FiltersForm } from '../components/FiltersForm';
import { Propiedad } from '../components/Propiedad';
import { useFetchData } from '../hooks/useFetchData';

export function Propiedades() {
    const [filters, setFilters] = useState(null);
    const fetchFn = useCallback(() => fetchPropiedades(filters), [filters]);
    const { data: propiedades, isLoading, error } = useFetchData(fetchFn);
    return (
        <div className="propiedades-layout">
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
