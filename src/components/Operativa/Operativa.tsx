import './Operativa.css';
import Image from 'next/image';

const benefits = [
    {
        title: 'Personalización a tu medida',
        text: '¿No te convencen los colores o el diseño? Adaptamos la interfaz y ciertos elementos visuales según la identidad de tu gimnasio. Contáctanos para conocer las opciones de personalización disponibles.',
    },
    {
        title: 'Fácil instalación',
        text: 'El proceso de instalación es ágil y no requiere configuraciones complicadas, permitiéndote comenzar a operar en poco tiempo.',
    },
    {
        title: 'Sistema híbrido',
        text: 'Nuestra arquitectura híbrida combina almacenamiento en la nube con capacidad de operación offline temporal, asegurando estabilidad y disponibilidad.',
    },
];

export default function Operativa() {
    return (
        <section className="operativa" id="operativa">
            <div className="operativa-wrapper">
                <div className="operativa-card">

                    <div className="operativa-image">
                        <Image
                            src="/fondo.png"
                            alt="Control de accesos Syfit"
                            width={580}
                            height={400}
                            style={{ borderRadius: '16px', objectFit: 'cover' }}
                        />
                    </div>

                    <div className="operativa-content">
                        <h2>
                            Syfit separa la administración de la operación para que tengas
                            mayor control y evites riesgos en tu sistema
                        </h2>

                        <div className="benefits">
                            {benefits.map((benefit, index) => (
                                <article className="benefit-item" key={index}>
                                    <div className="benefit-icon">
                                        <Image
                                            src="/punto.png"
                                            alt="Icono beneficio"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="benefit-title">{benefit.title}</h3>
                                        <p className="benefit-text">{benefit.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="button-row">
                            <a href="#mas-info" className="btn-primary">
                                Más información
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}