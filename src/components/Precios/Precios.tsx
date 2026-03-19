import './Precios.css';
import Image from 'next/image';

type Feature = {
    text: string;
    faded?: boolean;
};

type Plan = {
    name: string;
    price: string;
    period: string;
    description: string;
    inherits?: string;
    features: Feature[];
    available: boolean;
    badge?: string;
};

const plans: Plan[] = [
    {
        name: 'Syfit Básico',
        price: '— MXN',
        period: 'mensualidad',
        description: 'Para micronegocios e instructores independientes que desean orden y control sin funciones avanzadas.',
        available: true,
        features: [
            { text: 'Hasta 150 clientes' },
            { text: '1 equipo operativo' },
            { text: 'Panel administrativo web' },
            { text: 'Gestión de clientes' },
            { text: 'Administración de membresías' },
            { text: 'Control de asistencia' },
            { text: 'Gestión de pagos y comprobantes' },
            { text: '7 reportes básicos' },
            { text: 'Soporte técnico' },
            { text: 'Actualizaciones generales' },
        ],
    },
    {
        name: 'Syfit Estándar',
        price: '— MXN',
        period: 'mensualidad',
        description: 'Para gimnasios en crecimiento que necesitan mayor control y herramientas.',
        inherits: 'Incluye todo lo del Básico',
        available: true,
        features: [
            { text: 'Hasta 350 clientes activos' },
            { text: 'Respaldo semestral' },
            { text: 'Sistema de punto de venta (POS)' },
            { text: 'Gestión de entrenadores' },
            { text: '14 reportes' },
        ],
    },
    {
        name: 'Syfit Pro',
        price: '— MXN',
        period: 'mensualidad',
        description: 'Para gimnasios consolidados que buscan control total y escalabilidad.',
        inherits: 'Incluye todo lo del Estándar',
        available: false,
        badge: 'Próximamente',
        features: [
            { text: 'Clientes ilimitados' },
            { text: 'Hasta 3 equipos operativos' },
            { text: 'Reportes avanzados' },
            { text: 'Exportación PDF/EXCEL' },
            { text: 'Personalización avanzada' },
            { text: 'Soporte prioritario' },
            { text: 'Acceso anticipado a nuevas funciones' },
            { text: 'Control de inventario (próximamente)', faded: true },
            { text: 'Monedero electrónico (próximamente)', faded: true },
        ],
    },
    {
        name: 'Syfit Elite',
        price: '— MXN',
        period: 'mensualidad',
        description: 'Para gimnasios modernos que desean presencia digital y automatización avanzada.',
        inherits: 'Incluye todo lo del Pro',
        available: false,
        badge: 'Próximamente',
        features: [
            { text: 'Sitio web personalizado' },
            { text: 'Dominio propio' },
            { text: 'Acceso al panel desde su web' },
            { text: 'Mantenimiento web' },
            { text: 'Integración de pagos en línea' },
            { text: 'Soporte prioritario' },
            { text: 'Monedero electrónico con app (próximamente)', faded: true },
            { text: 'Facturación (próximamente)', faded: true },
        ],
    },
];

export default function Precios() {
    return (
        <section className="precios" id="precios">
            <div className="precios-page">

                <header className="precios-header">
                    <span className="section-kicker">Planes flexibles</span>
                    <h2 className="precios-title">Precios</h2>
                    <p className="precios-subtitle">
                        Elige el plan ideal para tu gimnasio. Sin contratos forzosos.
                        Cambia o cancela cuando quieras.
                    </p>
                </header>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <article
                            key={index}
                            className={`plan-card${!plan.available ? ' unavailable' : ''}`}
                        >
                            {plan.badge && (
                                <span className="plan-badge">{plan.badge}</span>
                            )}

                            <h3 className="plan-name">{plan.name}</h3>

                            <div className="plan-pricing">
                                <div className="plan-price-amount">{plan.price}</div>
                                <div className="plan-price-period">{plan.period}</div>
                            </div>

                            <p className="plan-description">{plan.description}</p>

                            {plan.inherits && (
                                <div className="plan-inherits">
                                    <Image
                                        src="/caja.png"
                                        alt="Incluye"
                                        width={18}
                                        height={18}
                                        style={{ objectFit: 'contain' }}
                                    />
                                    {plan.inherits}
                                </div>
                            )}

                            <ul className="features-list">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className={`feature-item${feature.faded ? ' faded' : ''}`}
                                    >
                                        <span className="feat-icon">
                                            <Image
                                                src="/correcto.png"
                                                alt="✓"
                                                width={20}
                                                height={20}
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </span>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`plan-cta ${plan.available ? 'cta-active' : 'cta-inactive'}`}
                                disabled={!plan.available}
                            >
                                {plan.available ? 'Contactar paquete' : 'Próximamente'}
                            </button>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}
