import './Header.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="header">
            <div className="logo-area">
                <span className="logo-text">Syfit</span>
            </div>

            <nav className="nav">
                <a href="#operativa">Operativa</a>
                <a href="#funciones">Funciones</a>
                <a href="#precios">Precios</a>
                <a href="#contacto">
                    <Image
                        src="/whatsapp.png"
                        alt="WhatsApp"
                        width={16}
                        height={16}
                    />
                    Contacto
                </a>
            </nav>
        </header>
    );
}