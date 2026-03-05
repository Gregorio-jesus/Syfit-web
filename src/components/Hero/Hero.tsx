import './Hero.css';
import Header from '../Header/Header';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero">
            <Header />

            <div className="hero-content">
                <div className="hero-left">
                    <h1>
                        <span>Gestiona tu gimnasio</span>
                        <span>de forma inteligente</span>
                        <span className="accent">con Syfit</span>
                    </h1>
                    <p>
                        ¿Pérdida de información o mala gestión con tu sistema actual?
                        Syfit es un sistema en la nube que centraliza tu administración
                        y optimiza la operación diaria, brindándote acceso seguro y
                        control total desde cualquier lugar.
                    </p>
                    <div className="hero-cta">
                        <button className="btn-primary">Probar Syfit ahora</button>
                        <button className="btn-secondary">Ver planes y precios</button>
                    </div>
                </div>

                <div className="hero-right">
                    <Image
                        src="/logo.png"
                        alt="Syfit interfaz responsive"
                        width={420}
                        height={420}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
