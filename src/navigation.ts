import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Asesoría laboral, fiscal y contable',
          href: getPermalink('/#servicios'), 
        },
        {
          text: 'Departamento jurídico',
          href: getPermalink('/juridico'),
        },
        {
          text: 'Ahorro energético',
          href: getPermalink('/ahorro-energetico'),
        },
        {
          text: 'Seguros',
          href: getPermalink('/seguros'),
        },
        {
          text: 'Extranjería',
          href: getPermalink('/extranjeria'),
        },
        {
          text: 'Transferencias de vehículos',
          href: getPermalink('/vehiculos'),
        },
        {
          text: 'Asesorías colaboradoras',
          href: getPermalink('/#asesorias'),
        },
      ],
    },
    {
      text: 'Equipo',
      href: getPermalink('/#equipo'), 
    },
    {
      text: 'Opiniones / Casos de éxito',
      href: getPermalink('/#casos-de-exito'),
    },
    {
      text: 'Contacto',
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
        { text: 'Colaboración con Asesorías', href: getPermalink('/#asesorias') },
        { text: 'Nuestro Equipo', href: getPermalink('/#equipo') }, 
        { text: 'Contacto', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        // CORREGIDO: Añadido enlace a Google Maps
        { text: '📍 C/ Salvador Moreno Durán 26, Estepa', href: 'https://www.google.com/maps/search/?api=1&query=C/+Salvador+Moreno+Durán+26,+Estepa' },
        { text: '📞 955 91 33 70', href: 'tel:955913370' },
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