import '../assets/styles/navbar.css';
import { Link } from 'react-router-dom';

const sections = [
    {
        id: 'tipos_propiedad',
        title: 'Tipos de propiedad',
        url: '/tipos_propiedad'
    },
    {
        id: 'propiedades',
        title: 'Propiedades',
        url: '/propiedades'
    },
    {
        id: 'reservas',
        title: 'Reservas',
        url: '/reservas'
    },
    {
        id: 'inquilinos',
        title: 'Inquilinos',
        url: '/inquilinos'
    },
    {
        id: 'localidades',
        title: 'Localidades',
        url: '/localidades'
    }
];
export function NavBar() {
    return (
        <div className="main-nav-bar-container">
            <div className="main-nav-bar">
                <div className="nav-bar-links">
                    <ul>
                        {sections.map((section) => (
                            <li key={section.id}>
                                <Link
                                    className="main-nav-bar-link"
                                    to={section.url}
                                >
                                    {isExpanded && <span>{section.title}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
