import '../assets/styles/tiposPropiedades.css';

export function TipoPropiedades ({ tipoPropiedades }){ //le paso la funcion de pages? , porque va {} TiposPropiedad?
    return (
        <div className = "tiposPropiedades">
            <table>
               <thead>
                    <tr>
                        <th>ID</th>
                        <th>TIPOS DE PROPIEDADES</th>
                    </tr>
               </thead>
               <tbody>
               {tipoPropiedades.map((propiedad) => (
                        <tr key={propiedad.id}> 
                            <td>{propiedad.id}</td>
                            <td>{propiedad.nombre}</td>
                        </tr>
                    ))}
               </tbody>
            </table>
        </div>
    );
}