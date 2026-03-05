import './Funciones.css';
import Image from 'next/image';

const features = [
    {
        icon: '/cliente.png',
        alt: 'Gestión de clientes',
        title: 'Gestión de clientes',
        text: 'Controla todo el ciclo de vida de tus clientes, desde su registro hasta la gestión de sus pagos y estatus.',
    },
    {
        icon: '/membresia.png',
        alt: 'Administración de membresías',
        title: 'Administración de membresías',
        text: 'Diseña planes personalizados con distintos precios, duraciones y beneficios para maximizar tus ingresos.',
    },
    {
        icon: '/entrenador.png',
        alt: 'Gestión de entrenadores',
        title: 'Gestión de entrenadores',
        text: 'Gestiona la información y asignación de tus entrenadores desde un solo panel.',
    },
    {
        icon: '/asistencia.png',
        alt: 'Control de asistencia',
        title: 'Control de asistencia',
        text: 'Supervisa en tiempo real quién entra a tu gimnasio y analiza la frecuencia de visitas.',
    },
    {
        icon: '/pagos.png',
        alt: 'Gestión de pagos y comprobantes',
        title: 'Gestión de pagos y comprobantes',
        text: 'Administra cobros de manera organizada y emite comprobantes para mayor control financiero.',
    },
    {
        icon: '/venta.png',
        alt: 'Sistema de punto de venta',
        title: 'Sistema de punto de venta (POS)',
        text: 'Incrementa tus ingresos vendiendo suplementos, accesorios y bebidas.',
    },
    {
        icon: '/reporte.png',
        alt: 'Reportes inteligentes',
        title: 'Reportes inteligentes y estadísticas',
        text: 'Accede a información clave sobre ingresos, membresías, asistencia y rendimiento general para tomar decisiones estratégicas.',
    },
    {
        icon: '/personalizacion.png',
        alt: 'Personalización',
        title: 'Personalización',
        text: 'Integramos tu marca dentro del sistema para ofrecer una experiencia personalizada.',
    },
    {
        icon: '/web.png',
        alt: 'Panel administrativo',
        title: 'Panel administrativo',
        text: 'Supervisa tu negocio en tiempo real, estés donde estés.',
    },
    {
        icon: '/operativo.png',
        alt: 'Panel operativo',
        title: 'Panel operativo',
        text: 'La operación diaria funciona en un entorno separado para mayor seguridad y control.',
    },
    {
        icon: '/hibrida.png',
        alt: 'Arquitectura híbrida',
        title: 'Arquitectura híbrida',
        text: 'Syfit opera bajo un modelo híbrido que integra entorno local y almacenamiento en la nube para máxima estabilidad.',
    },
];

export default function Funciones() {
    return (
        <section className="funciones" id="funciones">
            <div className="funciones-page">

                <header className="section-header">
                    <h2 className="section-title">Funcionalidades Syfit</h2>
                    <p className="section-subtitle">
                        Centraliza la operación, los pagos y la administración de tu gimnasio
                        con un sistema diseñado para separar la gestión del día a día de la
                        parte estratégica.
                    </p>
                </header>

                <div className="features-grid" aria-label="Funciones disponibles de Syfit">
                    {features.map((feature, index) => (
                        <article className="feature-card" key={index}>
                            <div className="feature-icon">
                                <Image
                                    src={feature.icon}
                                    alt={feature.alt}
                                    width={26}
                                    height={26}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-text">{feature.text}</p>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}