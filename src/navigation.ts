import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'INICIO',
      href: getPermalink('/'),
    },
    {
      text: 'SERVICIOS',
      links: [
        {
          text: 'Asesoría Integral (Fiscal, Laboral, Contable)',
          href: getPermalink('/#servicios'), 
        },
        {
          text: 'Departamento Jurídico',
          href: getPermalink('/juridico'),
        },
        {
          text: 'Seguros para Empresas',
          href: getPermalink('/seguros'),
        },
        {
          text: 'Extranjería',
          href: getPermalink('/extranjeria'),
        },
        {
          text: 'Tráfico y Vehículos',
          href: getPermalink('/vehiculos'),
        },
      ],
    },
    {
      text: 'AHORRO ENERGÉTICO',
      href: getPermalink('/ahorro-energetico'),
    },
    {
      text: 'PARA ASESORÍAS',
      href: getPermalink('/asesorias-colaboradoras'),
    },
    {
      text: 'EQUIPO',
      // ¡ESTA ES LA CLAVE! 
      // La almohadilla (#) le dice que baje a la sección, no que cambie de página.
      href: getPermalink('/#equipo'), 
    },
    {
      text: 'CONTACTO',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'ACCESO CLIENTES',
      href: 'https://gestepaasesores.bilky.es/auth/login',
      target: '_blank',
      variant: 'primary',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios Empresas',
      links: [
        { text: 'Fiscal, Laboral y Contable', href: getPermalink('/#servicios') },
        { text: 'Ahorro Energético', href: getPermalink('/ahorro-energetico') },
        { text: 'Seguros Empresas', href: getPermalink('/seguros') },
        { text: 'Extranjería', href: getPermalink('/extranjeria') },
      ],
    },
    {
      title: 'Despacho',
      links: [
        { text: 'Sobre Nosotros', href: getPermalink('/#nosotros') },
        { text: 'Colaboración con Asesorías', href: getPermalink('/asesorias-colaboradoras') },
        // Aquí también lo corregimos por si acaso
        { text: 'Nuestro Equipo', href: getPermalink('/#equipo') }, 
        { text: 'Contacto', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: '📍 C/ Salvador Moreno Durán 26, Estepa', href: '#' },
        { text: '📞 955 21 15 15', href: 'tel:955211515' },
        { text: '✉️ info@gestepa.com', href: 'mailto:info@gestepa.com' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Aviso Legal', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/gestepa-asesores-sl/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/people/Gestepa-Asesores/100076897021899' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/gestepaasesores' },
  ],
  footNote: `
    © ${new Date().getFullYear()} GESTEPA Asesores S.L. · Todos los derechos reservados.
  `,
};