import {
    Navigate,
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom';
import { Layout } from './components/Layout';
import { TiposPropiedad } from './pages/TiposPropiedad';
import { NewTiposPropiedad } from './pages/NewTiposPropiedad';
import { EditTiposPropiedad } from './pages/EditTiposPropiedad';
import { Propiedades } from './pages/Propiedades';
import { Reserva } from './pages/Reserva';
import { NewReserva } from './pages/NewReserva';
import { EditReserva } from './pages/EditReserva';
import { EditPropiedad } from './pages/EditPropiedad';
import { NewPropiedad } from './pages/NewPropiedad';
import { DetailPropiedad } from './pages/DetailPropiedad';
import { Inquilinos } from './pages/Inquilinos';
import { DetailInquilino } from './pages/DetailInquilino';
import { EditInquilino } from './pages/EditInquilino';
import { NewInquilino } from './pages/NewInquilino';
import { Localidades } from './pages/Localidades';
import { NewLocalidad } from './pages/NewLocalidad';
import { EditLocalidad } from './pages/EditLocalidad';

export function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout></Layout>,
            children: [
                {
                    path: '/',
                    element: <Navigate to={'/propiedades'}></Navigate>
                },
                {
                    path: '/tipos_propiedad',
                    element: <TiposPropiedad></TiposPropiedad>
                },
                {
                    path: 'tipos_propiedad/:id/edit',
                    element: <EditTiposPropiedad></EditTiposPropiedad>
                },
                {
                    path: 'tipos_propiedad/new',
                    element: <NewTiposPropiedad></NewTiposPropiedad>
                },
                {
                    path: '/propiedades',
                    element: <Propiedades></Propiedades>
                },
                {
                    path: '/propiedades/:id',
                    element: <DetailPropiedad></DetailPropiedad>
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
                    element: <Reserva></Reserva>
                },
                {
                    path: 'reservas/:id/edit',
                    element: <EditReserva></EditReserva>
                },
                {
                    path: 'reservas/new',
                    element: <NewReserva></NewReserva>
                },
                {
                    path: '/inquilinos',
                    element: <Inquilinos></Inquilinos>
                },
                {
                    path: '/inquilinos/:id',
                    element: <DetailInquilino></DetailInquilino>
                },
                {
                    path: '/inquilinos/:id/edit',
                    element: <EditInquilino></EditInquilino>
                },
                {
                    path: '/inquilinos/new',
                    element: <NewInquilino></NewInquilino>
                },
                {
                    path: '/localidades',
                    element: <Localidades></Localidades>
                },
                {
                    path: '/localidades/new',
                    element: <NewLocalidad></NewLocalidad>
                },
                {
                    path: '/localidades/:id/edit',
                    element: <EditLocalidad></EditLocalidad>
                }
            ]
        }
    ]);

    return <RouterProvider router={router}></RouterProvider>;
}
