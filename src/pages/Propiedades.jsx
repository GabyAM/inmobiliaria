import { Propiedad } from '../components/Propiedad';
import { useFetchData } from '../hooks/useFetchData';


function fetchPropiedades() {
    return fetch('http://localhost/propiedades')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Error al obtener propiedades');
            }
            return res.json();
        })
        .then((response) => response.data);
}

export function Propiedades() {
    const {
        data: propiedades,
        isLoading,
        error
    } = useFetchData(fetchPropiedades);
    return (
        <>
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
        </>
    );
}
