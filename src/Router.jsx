import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { TiposPropiedad } from './pages/TiposPropiedad';
import { Propiedades } from './pages/Propiedades';
import { Reservas } from './pages/Reservas';
import { EditPropiedad } from './pages/EditPropiedad';
import { NewPropiedad } from './pages/NewPropiedad';

export function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout></Layout>,
            children: [
                {
                    path: '/tipos_propiedad',
                    element: <TiposPropiedad></TiposPropiedad>
                },
                {
                    path: '/propiedades',
                    element: <Propiedades></Propiedades>
                },
                {
                    path: 'propiedades/:id/edit',
                    element: <EditPropiedad></EditPropiedad>
                },
                {
                    path: 'propiedades/new',
                    element: <NewPropiedad></NewPropiedad>
                },
                {
                    path: '/reservas',
                    element: <Reservas></Reservas>
                }
            ]
        }
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}
