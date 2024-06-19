import { fetchTipoPropiedades } from '../api/tipoPropiedades';
import '../assets/styles/tiposPropiedad.css'; //hacer css
import { TipoPropiedades } from '../components/TipoPropiedades';
import { useFetchData } from '../hooks/useFetchData';

// function fechTiposPropiedades() {
//     return fetch('http://localhost/tipo_propiedades') //Fetch se utiliza para hacer solicitudes HTTP a una API y obtener datos
//         .then((res) => {
//             if (!res.ok) {
//                 throw new Error('error al obtener los Tipos de propiedad');
//             }
//             return res.json();
//         })
//         .then((response) => response.data); //res y response son lo mismo?
// }

export function TiposPropiedad() {
    const {
        data: tiposPropiedad,
        isLoading, //para indicar si la operacion esta en curso?
        error
    } = useFetchData(fetchTipoPropiedades);

    return (
        <>
            <h1 className="main-title">Tipos de Propiedades</h1>
            <div>
                {isLoading ? ( //isLoading cargando boolean
                    <p>Cargando...</p>
                ) : error ? (
                    <p>{error.message}</p>
                ) : (
                    <TipoPropiedades tipoPropiedades={tiposPropiedad} />
                )}
            </div>
        </>
    );
}
