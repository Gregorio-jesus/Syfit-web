import './Footer.css';
import Image from 'next/image';

const contactItems = [
    {
        icon: '/celular.png',
        alt: 'Teléfono',
        label: 'Teléfono',
        value: '998 999 9999',
        href: 'tel:+529989999999',
    },
    {
        icon: '/correo.png',
        alt: 'Correo',
        label: 'Correo electrónico',
        value: 'hytechsaas@gmail.com',
        href: 'mailto:hytechsaas@gmail.com',
    },
];

export default function Footer() {
    return (
        <footer className="footer" id="contacto">
            <div className="footer-inner">

                <div className="footer-top">

                    <div className="footer-brand">
                        <div className="brand-name">
                            Syfit<span>.</span>
                        </div>
                        <p>
                            Sistema de gestión integral para gimnasios. Separamos la
                            administración de la operación para que tengas mayor control
                            y evites riesgos en tu negocio.
                        </p>
                    </div>

                    <div className="footer-contact">
                        <p className="footer-contact-kicker">Contacto</p>
                        <p className="contact-title">¿Tiene alguna pregunta?</p>
                        <p className="contact-subtitle">
                            No dude en ponerse en contacto con nosotros. Estamos aquí para ayudarle.
                        </p>

                        <ul className="contact-list">
                            {contactItems.map((item, index) => (
                                <li className="contact-item" key={index}>
                                    <div className="contact-icon">
                                        <Image
                                            src={item.icon}
                                            alt={item.alt}
                                            width={22}
                                            height={22}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <div className="contact-info">
                                        <span className="contact-label">{item.label}</span>
                                        <a className="contact-value" href={item.href}>
                                            {item.value}
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        Copyright &copy; 2026 &mdash; <strong>Syfit</strong>. Todos los derechos reservados.
                    </p>
                </div>

            </div>
        </footer>
    );
}
