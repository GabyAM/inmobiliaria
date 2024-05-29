import '../assets/styles/navbar.css';
import { useState } from 'react';
import {
    ArrowIcon,
    BuildingIcon,
    ClockIcon,
    HomeIcon,
    PinIcon,
    UsersIcon
} from './Icons';
import { Link } from 'react-router-dom';

const sections = [
    {
        id: 'tipos_propiedad',
        title: 'Tipos de propiedad',
        icon: (props) => <HomeIcon {...props}></HomeIcon>,
        url: '/tipos_propiedad'
    },
    {
        id: 'propiedades',
        title: 'Propiedades',
        icon: (props) => <BuildingIcon {...props}></BuildingIcon>,
        url: '/propiedades'
    },
    {
        id: 'reservas',
        title: 'Reservas',
        icon: (props) => <ClockIcon {...props}></ClockIcon>,
        url: '/reservas'
    },
    {
        id: 'inquilinos',
        title: 'Inquilinos',
        icon: (props) => <UsersIcon {...props}></UsersIcon>,
        url: '/inquilinos'
    },
    {
        id: 'localidades',
        title: 'Localidades',
        icon: (props) => <PinIcon {...props}></PinIcon>,
        url: '/localidades'
    }
];
export function NavBar() {
    const [isExpanded, setIsExpanded] = useState(true);
    return (
        <div className="main-nav-bar-container">
            <div className={`main-nav-bar ${isExpanded ? 'expanded' : ''}`}>
                <div className="nav-bar-links">
                    <ul>
                        {sections.map((section) => (
                            <li key={section.id}>
                                <Link
                                    className="main-nav-bar-link"
                                    to={section.url}
                                >
                                    {section.icon({
                                        width: '2em',
                                        height: '2em'
                                    })}
                                    {isExpanded && <span>{section.title}</span>}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <button
                className="expand-button"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <ArrowIcon
                    width="2em"
                    height="2em"
                    orient={isExpanded ? 'left' : 'right'}
                ></ArrowIcon>
            </button>
        </div>
    );
}
