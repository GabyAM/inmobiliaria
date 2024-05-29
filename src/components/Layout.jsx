import '../assets/styles/layout.css';
import { NavBar } from './NavBar';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
    return (
        <div className="main-layout">
            <NavBar></NavBar>
            <div className="main-wrapper">
                <main>
                    <Header></Header>
                    <Outlet></Outlet>
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
}
