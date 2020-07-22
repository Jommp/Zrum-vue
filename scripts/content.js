var contactInfo = {
  phone1: '01 800 123 45 66',
  whats: '9981458596',
  email: 'agencia@email.com',
  address: 'Av. Tankah Smz 24 Mz 1 Lt 74-75 Local 1 C.P. 77500, Cancún Quintana Roo',
  mapIframeSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.7736294933015!2d-88.57066558460107!3d20.67878665500816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5138b9a098f833%3A0xf70a67530750d45!2zQ2hpY2jDqW4tSXR6w6EsIFl1Y2F0YW4!5e0!3m2!1sen!2smx!4v1582214084409!5m2!1sen!2smx',
  socialNetworks: [
    {
      id: 'facebook', //este id debe ser el del css
      url: 'https://www.facebook.com/AgenciadeViajesGoPralia/',
    },
    {
      id: 'twitter',
      url: 'https://www.twitter.com/AgenciadeViajesGoPralia/',
    },
    {
      id: 'instagram',
      url: '/',
    },
    {
      id: 'youtube',
      url: '/',
    }
  ],
  officeHours: 'Lunes a Sábado : 06:00 A.M. – 02:00 A.M. Hora Ciudad de México'
};
var links = [ //debe incluir links de los destinos si es que tiene
  {
    id: 'home',
    url: './index.html',
    text: 'Inicio', //debe estar en el idioma seleccionado
    type: 'page',
    showAtHeader: true,
  },
  {
    id: 'tours',
    url: './tours.html',
    text: 'Tours',
    type: 'page',
    showAtHeader: true,
  },
  {
    id: 'vuelos',
    url: './vuelos.html',
    text: 'Vuelos',
    type: 'page',
    showAtHeader: true,
  },
  {
    id: 'hoteles',
    url: './hoteles.html',
    text: 'Hoteles',
    type: 'page',
    showAtHeader: true,
  },
  {
    id: 'pkg',
    url: './product-list.html?type=pkg',
    text: 'Paquetes',
    type: 'service',
    showAtHeader: true,
  },
  {
    id: 'exp',
    url: './product-list.html?type=exp',
    text: 'Experiencias',
    type: 'service',
    showAtHeader: true,
  },
  {
    id: 'cancun',
    url: './cancun',
    text: 'Cancún',
    type: 'desination'
  },
  {
    id: 'holbox',
    url: './holbox',
    text: 'Holbox',
    type: 'desination'
  },
  {
    id: 'vallarta',
    url: './vallarta',
    text: 'Vallarta',
    type: 'desination'
  },
  {
    id: 'cabos',
    url: './loscabos',
    text: 'Los Cabos',
    type: 'desination'
  },
  {
    id: 'mas',
    url: './mas',
    text: 'Más',
    type: 'desination'
  },
  {
    id: 'index2',
    url: './index.html',
    text: 'Inicio',
    type: 'page',
    showAtHeader: false,
  },
  {
    id: 'about',
    url: './about.html',
    text: 'Nosotros',
    type: 'page',
    showAtHeader: false,
  },
  {
    id: 'contact',
    url: './contact.html',
    text: 'Contacto',
    type: 'page',
    showAtHeader: false,
  },
  {
    id: 'myBooking',
    url: './my-booking.html',
    text: 'Mi Reserva',
    type: 'page',
    showAtHeader: false,
  },
  {
    id: 'blog',
    url: './blog.html',
    text: 'Blog',
    type: 'page',
    showAtHeader: false,
  },
  {
    id: 'politics',
    url: './politics.html',
    text: 'Políticas del sitio',
    type: 'page',
    showAtHeader: false,
  },
  {
    id: 'privacy',
    url: './privacy.html',
    text: 'Aviso de privacidad',
    type: 'page',
    showAtHeader: false,
  },
  {
    id: 'productDetail',
    url: './product-detail.html',
    text: '',
    type: 'booking',
    showAtHeader: false,
  }
];
var logos = {
  headerSrc: './img/imgZrum/logo.png',
}
var languages = [
  {
    id: 'eng',
    name: 'English',
    abrev: 'ENG',
    flagSrc: './img/language/us.png',
    selected: false,
    hasImage: true,
  },
  {
    id: 'esp',
    name: 'Español',
    abrev: 'ESP',
    flagSrc: './img/language/mx.png',
    selected: true,
    hasImage: true,
  }
];
var moneyEx = [
  {
    id: 'mxn',
    abrev: 'MXN',
    selected: true,
  },
  {
    id: 'usd',
    abrev: 'USD',
    selected: false,
  }
];
var products = [
  {
    id: 'pkg-001',
    type: 'pkg',
    name: 'Cancun de noche',
    destination: 'Cancun',
    destinationId: 'dest-002',
    prices: {
      regularAdult: 3590.20,
      discountAdult: 3200.00,
      regularKid: 2590.20,
      discountKid: 2200.00
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit interdum duis, justo odio eget congue facilisis placerat vulputate leo phasellus accumsan, proin et donec sed convallis tellus aptent feugiat.',
    detail: {
      includes: [
      'Ida y vuelta desde su hotel en un vehículo con aire acondicionado',
      'Entrada al sitio arqueológico con guía bilingüe y conductor del tour.',
      'Almuerzo buffet mexicano.',
      'Entrada al cenote (pozo natural de agua)',
      ],
      notIncluded: [
        'Las bebidas en el restaurante no están incluidas.',
      ],
      additionalInf: 'Lacinia enim parturient pretium habitasse feugiat tortor eros ultricies non, lobortis magnis eget conubia primis nisi dictumst sagittis rhoncus euismod, viverra porttitor ridiculus ligula orci integer a penatibus.',
      tips: [
        'Traer repelente de mosquitos, zapatos confortables, traje de baño, toalla, cámara, dinero extra para gastos personales (bebidas durante el almuerzo, artesanías, impuesto vídeo grabaciones, etc.)',
        'Todos los niños deben estar acompañados por un adulto.',
        'En caso de usar una silla de ruedas, le recomendamos que traiga un acompañantebundleRenderer.renderToStream'
      ],
      schedule: 'Disponible de lunes a domingo. Horarios de 7:00 am a 7:00 pm',
    },
    imgs: [ //should be 5 at least
      {
        src: './img/packages/cancun.png',
        caption: '',
        text: '',
        alt: 'Paquetes en Cancun - Cancun de noche'
      },
      {
        src: './img/hotels/hotel-cancun.png',
        caption: '',
        text: '',
        alt: 'Paquetes en Cancun - Cancun de noche'
      },
    ],
    showAtHome: true, //not in usepossible to use in the future
  },
  {
    id: 'pkg-002',
    type: 'pkg',
    name: 'Los Cabos familiar',
    destinationId: 'dest-007',
    destination: 'Los Cabos',
    prices: {
      regularAdult: 2590.20,
      discountAdult: 2200.00,
      regularKid: 1590.20,
      discountKid: 1200.00
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit interdum duis, justo odio eget congue facilisis placerat vulputate leo phasellus accumsan, proin et donec sed convallis tellus aptent feugiat.',
    detail: {
      includes: [
      'Ida y vuelta desde su hotel en un vehículo con aire acondicionado',
      'Entrada al sitio arqueológico con guía bilingüe y conductor del tour.',
      'Almuerzo buffet mexicano.',
      'Entrada al cenote (pozo natural de agua)',
      ],
      notIncluded: [
        'Las bebidas en el restaurante no están incluidas.',
      ],
      additionalInf: 'Lacinia enim parturient pretium habitasse feugiat tortor eros ultricies non, lobortis magnis eget conubia primis nisi dictumst sagittis rhoncus euismod, viverra porttitor ridiculus ligula orci integer a penatibus.',
      tips: [
        'Traer repelente de mosquitos, zapatos confortables, traje de baño, toalla, cámara, dinero extra para gastos personales (bebidas durante el almuerzo, artesanías, impuesto vídeo grabaciones, etc.)',
        'Todos los niños deben estar acompañados por un adulto.',
        'En caso de usar una silla de ruedas, le recomendamos que traiga un acompañantebundleRenderer.renderToStream'
      ],
      schedule: 'Disponible de lunes a domingo. Horarios de 7:00 am a 7:00 pm',
    },
    imgs: [
      {
        src: './img/packages/loscabos.png',
        caption: '',
        text: '',
        alt: 'Paquetes en Cancun - Cancun de noche'
      },
    ],
  },
  {
    id: 'pkg-003',
    type: 'pkg',
    name: 'Fin de semana en Holbox',
    destination: 'Holbox',
    destinationId: 'dest-005',
    prices: {
      regularAdult: 4890.20,
      discountAdult: 4100.00,
      regularKid: 3890.20,
      discountKid: 3200.00
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit interdum duis, justo odio eget congue facilisis placerat vulputate leo phasellus accumsan, proin et donec sed convallis tellus aptent feugiat.',
    detail: {
      includes: [
      'Ida y vuelta desde su hotel en un vehículo con aire acondicionado',
      'Entrada al sitio arqueológico con guía bilingüe y conductor del tour.',
      'Almuerzo buffet mexicano.',
      'Entrada al cenote (pozo natural de agua)',
      ],
      notIncluded: [
        'Las bebidas en el restaurante no están incluidas.',
      ],
      additionalInf: 'Lacinia enim parturient pretium habitasse feugiat tortor eros ultricies non, lobortis magnis eget conubia primis nisi dictumst sagittis rhoncus euismod, viverra porttitor ridiculus ligula orci integer a penatibus.',
      tips: [
        'Traer repelente de mosquitos, zapatos confortables, traje de baño, toalla, cámara, dinero extra para gastos personales (bebidas durante el almuerzo, artesanías, impuesto vídeo grabaciones, etc.)',
        'Todos los niños deben estar acompañados por un adulto.',
        'En caso de usar una silla de ruedas, le recomendamos que traiga un acompañantebundleRenderer.renderToStream'
      ],
      schedule: 'Disponible de lunes a domingo. Horarios de 7:00 am a 7:00 pm',
    },
    imgs: [
      {
        src: './img/packages/holbox.png',
        caption: '',
        text: '',
        alt: 'Paquetes en Holbox - Fin de semana en Holbox'
      },
    ],
    showAtHome: true, //not in usepossible to use in the future
  },
  {
    id: 'pkg-004',
    type: 'pkg',
    name: 'Fin de semana en Holbox',
    destinationId: 'dest-005',
    destination: 'Holbox',
    prices: {
      regularAdult: 4890.20,
      discountAdult: 4100.00,
      regularKid: 3890.20,
      discountKid: 3200.00
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit interdum duis, justo odio eget congue facilisis placerat vulputate leo phasellus accumsan, proin et donec sed convallis tellus aptent feugiat.',
    detail: {
      includes: [
      'Ida y vuelta desde su hotel en un vehículo con aire acondicionado',
      'Entrada al sitio arqueológico con guía bilingüe y conductor del tour.',
      'Almuerzo buffet mexicano.',
      'Entrada al cenote (pozo natural de agua)',
      ],
      notIncluded: [
        'Las bebidas en el restaurante no están incluidas.',
      ],
      additionalInf: 'Lacinia enim parturient pretium habitasse feugiat tortor eros ultricies non, lobortis magnis eget conubia primis nisi dictumst sagittis rhoncus euismod, viverra porttitor ridiculus ligula orci integer a penatibus.',
      tips: [
        'Traer repelente de mosquitos, zapatos confortables, traje de baño, toalla, cámara, dinero extra para gastos personales (bebidas durante el almuerzo, artesanías, impuesto vídeo grabaciones, etc.)',
        'Todos los niños deben estar acompañados por un adulto.',
        'En caso de usar una silla de ruedas, le recomendamos que traiga un acompañantebundleRenderer.renderToStream'
      ],
      schedule: 'Disponible de lunes a domingo. Horarios de 7:00 am a 7:00 pm',
    },
    imgs: [
      {
        src: './img/packages/holbox.png',
        caption: '',
        text: '',
        alt: 'Paquetes en Holbox - Fin de semana en Holbox'
      },
    ],
    showAtHome: true, //not in usepossible to use in the future
  },
  {
    id: 'pkg-005',
    type: 'pkg',
    name: 'Fin de semana en Holbox',
    destinationId: 'dest-005',
    destination: 'Holbox',
    prices: {
      regularAdult: 4890.20,
      discountAdult: 4100.00,
      regularKid: 3890.20,
      discountKid: 3200.00
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit interdum duis, justo odio eget congue facilisis placerat vulputate leo phasellus accumsan, proin et donec sed convallis tellus aptent feugiat.',
    detail: {
      includes: [
      'Ida y vuelta desde su hotel en un vehículo con aire acondicionado',
      'Entrada al sitio arqueológico con guía bilingüe y conductor del tour.',
      'Almuerzo buffet mexicano.',
      'Entrada al cenote (pozo natural de agua)',
      ],
      notIncluded: [
        'Las bebidas en el restaurante no están incluidas.',
      ],
      additionalInf: 'Lacinia enim parturient pretium habitasse feugiat tortor eros ultricies non, lobortis magnis eget conubia primis nisi dictumst sagittis rhoncus euismod, viverra porttitor ridiculus ligula orci integer a penatibus.',
      tips: [
        'Traer repelente de mosquitos, zapatos confortables, traje de baño, toalla, cámara, dinero extra para gastos personales (bebidas durante el almuerzo, artesanías, impuesto vídeo grabaciones, etc.)',
        'Todos los niños deben estar acompañados por un adulto.',
        'En caso de usar una silla de ruedas, le recomendamos que traiga un acompañantebundleRenderer.renderToStream'
      ],
      schedule: 'Disponible de lunes a domingo. Horarios de 7:00 am a 7:00 pm',
    },
    imgs: [
      {
        src: './img/packages/holbox.png',
        caption: '',
        text: '',
        alt: 'Paquetes en Holbox - Fin de semana en Holbox'
      },
    ],
    showAtHome: true, //not in usepossible to use in the future
  },
  {
    id: 'exp-001',
    type: 'exp',
    name: 'Holbox de Noche',
    destinationId: 'dest-005',
    destination: 'Holbox',
    prices: {
      regularAdult: 2299.20,
      discountAdult: 2000.00,
      regularKid: 1299.20,
      discountKid: 1000.00
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit interdum duis, justo odio eget congue facilisis placerat vulputate leo phasellus accumsan, proin et donec sed convallis tellus aptent feugiat.',
    detail: {
      includes: [
      'Ida y vuelta desde su hotel en un vehículo con aire acondicionado',
      'Entrada al sitio arqueológico con guía bilingüe y conductor del tour.',
      'Almuerzo buffet mexicano.',
      'Entrada al cenote (pozo natural de agua)',
      ],
      notIncluded: [
        'Las bebidas en el restaurante no están incluidas.',
      ],
      additionalInf: 'Lacinia enim parturient pretium habitasse feugiat tortor eros ultricies non, lobortis magnis eget conubia primis nisi dictumst sagittis rhoncus euismod, viverra porttitor ridiculus ligula orci integer a penatibus.',
      tips: [
        'Traer repelente de mosquitos, zapatos confortables, traje de baño, toalla, cámara, dinero extra para gastos personales (bebidas durante el almuerzo, artesanías, impuesto vídeo grabaciones, etc.)',
        'Todos los niños deben estar acompañados por un adulto.',
        'En caso de usar una silla de ruedas, le recomendamos que traiga un acompañantebundleRenderer.renderToStream'
      ],
      schedule: 'Disponible de lunes a domingo. Horarios de 7:00 am a 7:00 pm',
    },
    imgs: [
      {
        src: './img/product/prod-1.png',
        caption: '',
        text: '',
        alt: 'Experiencias en Puerto Vallarta - Tour en Islas Marietas'
      },
      {
        src: './img/product/prod-3.png',
        caption: '',
        text: '',
        alt: 'Experiencias en Puerto Vallarta - Tour en Islas Marietas'
      },
      {
        src: './img/product/prod-3.png',
        caption: '',
        text: '',
        alt: 'Experiencias en Puerto Vallarta - Tour en Islas Marietas'
      },
      {
        src: './img/product/prod-4.png',
        caption: '',
        text: '',
        alt: 'Experiencias en Puerto Vallarta - Tour en Islas Marietas'
      },
      {
        src: './img/product/prod-4.png',
        caption: '',
        text: '',
        alt: 'Experiencias en Puerto Vallarta - Tour en Islas Marietas'
      }
    ],
  },
  {
    id: 'exp-002',
    type: 'exp',
    name: 'Tour en Islas Marietas',
    destinationId: 'dest-001',
    destination: 'Puerto Vallarta',
    prices: {
      regularAdult: 3299.20,
      discountAdult: 3000.00,
      regularKid: 2299.20,
      discountKid: 2000.00
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit interdum duis, justo odio eget congue facilisis placerat vulputate leo phasellus accumsan, proin et donec sed convallis tellus aptent feugiat.',
    detail: {
      includes: [
      'Ida y vuelta desde su hotel en un vehículo con aire acondicionado',
      'Entrada al sitio arqueológico con guía bilingüe y conductor del tour.',
      'Almuerzo buffet mexicano.',
      'Entrada al cenote (pozo natural de agua)',
      ],
      notIncluded: [
        'Las bebidas en el restaurante no están incluidas.',
      ],
      additionalInf: 'Lacinia enim parturient pretium habitasse feugiat tortor eros ultricies non, lobortis magnis eget conubia primis nisi dictumst sagittis rhoncus euismod, viverra porttitor ridiculus ligula orci integer a penatibus.',
      tips: [
        'Traer repelente de mosquitos, zapatos confortables, traje de baño, toalla, cámara, dinero extra para gastos personales (bebidas durante el almuerzo, artesanías, impuesto vídeo grabaciones, etc.)',
        'Todos los niños deben estar acompañados por un adulto.',
        'En caso de usar una silla de ruedas, le recomendamos que traiga un acompañantebundleRenderer.renderToStream'
      ],
      schedule: 'Disponible de lunes a domingo. Horarios de 7:00 am a 7:00 pm',
    },
    imgs: [ 
      {
        src: './img/product/prod-1.png',
        caption: '',
        text: '',
        alt: ''
      },
      {
        src: './img/product/prod-2.png',
        caption: '',
        text: '',
        alt: ''
      },
      {
        src: './img/product/prod-3.png',
        caption: '',
        text: '',
        alt: ''
      },
      {
        src: './img/product/prod-4.png',
        caption: '',
        text: '',
        alt: ''
      },
      {
        src: './img/product/prod-4.png',
        caption: '',
        text: '',
        alt: ''
      }
    ],
  },
  {
    id: 'exp-003',
    type: 'exp',
    name: 'Nado con tiburon sierra',
    destinationId: 'dest-005',
    destination: 'Holbox',
    prices: {
      regularAdult: 5990.20,
      discountAdult: 5100.00,
      regularKid: 4990.20,
      discountKid: 4200.00
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit interdum duis, justo odio eget congue facilisis placerat vulputate leo phasellus accumsan, proin et donec sed convallis tellus aptent feugiat.',
    detail: {
      includes: [
      'Ida y vuelta desde su hotel en un vehículo con aire acondicionado',
      'Entrada al sitio arqueológico con guía bilingüe y conductor del tour.',
      'Almuerzo buffet mexicano.',
      'Entrada al cenote (pozo natural de agua)',
      ],
      notIncluded: [
        'Las bebidas en el restaurante no están incluidas.',
      ],
      additionalInf: 'Lacinia enim parturient pretium habitasse feugiat tortor eros ultricies non, lobortis magnis eget conubia primis nisi dictumst sagittis rhoncus euismod, viverra porttitor ridiculus ligula orci integer a penatibus.',
      tips: [
        'Traer repelente de mosquitos, zapatos confortables, traje de baño, toalla, cámara, dinero extra para gastos personales (bebidas durante el almuerzo, artesanías, impuesto vídeo grabaciones, etc.)',
        'Todos los niños deben estar acompañados por un adulto.',
        'En caso de usar una silla de ruedas, le recomendamos que traiga un acompañantebundleRenderer.renderToStream'
      ],
      schedule: 'Disponible de lunes a domingo. Horarios de 7:00 am a 7:00 pm',
    },
    imgs: [
      {
        src: './img/experiences/exp-lg.jpg',
        caption: '',
        text: '',
        alt: 'Experiencias en Holbox - Nado con tiburon ballena'
      }
    ],
    showAtHome: true, //not in usepossible to use in the future
  },
  {
    id: 'exp-004',
    type: 'exp',
    name: 'Tour en Islas Marietas',
    destinationId: 'dest-001',
    destination: 'Puerto Vallarta',
    prices: {
      regularAdult: 3299.20,
      discountAdult: 3000.00,
      regularKid: 2299.20,
      discountKid: 2000.00
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit interdum duis, justo odio eget congue facilisis placerat vulputate leo phasellus accumsan, proin et donec sed convallis tellus aptent feugiat.',
    detail: {
      includes: [
      'Ida y vuelta desde su hotel en un vehículo con aire acondicionado',
      'Entrada al sitio arqueológico con guía bilingüe y conductor del tour.',
      'Almuerzo buffet mexicano.',
      'Entrada al cenote (pozo natural de agua)',
      ],
      notIncluded: [
        'Las bebidas en el restaurante no están incluidas.',
      ],
      additionalInf: 'Lacinia enim parturient pretium habitasse feugiat tortor eros ultricies non, lobortis magnis eget conubia primis nisi dictumst sagittis rhoncus euismod, viverra porttitor ridiculus ligula orci integer a penatibus.',
      tips: [
        'Traer repelente de mosquitos, zapatos confortables, traje de baño, toalla, cámara, dinero extra para gastos personales (bebidas durante el almuerzo, artesanías, impuesto vídeo grabaciones, etc.)',
        'Todos los niños deben estar acompañados por un adulto.',
        'En caso de usar una silla de ruedas, le recomendamos que traiga un acompañantebundleRenderer.renderToStream'
      ],
      schedule: 'Disponible de lunes a domingo. Horarios de 7:00 am a 7:00 pm',
    },
    imgs: [
      {
        src: './img/experiences/exp-sm.png',
        caption: '',
        text: '',
        alt: 'Experiencias en Holbox - Nado con tiburon ballena'
      },
    ],
  },
];
var benefits = [
  {
    title: 'Meses sin intereses',
    description: 'Visa, MasterCard, AMEX, PayPal',
    iconSrc: './img/benefits/msi.png'
  },
  {
    title: 'Tus pagos son seguros',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    iconSrc: './img/benefits/candado.png'
  },
  {
    title: 'Atención personalizada',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    iconSrc: './img/benefits/atencion.png'
  },
  {
    title: 'Garantía de satisfacción',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
    iconSrc: './img/benefits/garantia.png'
  }
];
var userComments = [
  {
    userName: 'Nely Lugo',
    userPictureSrc: null,
    comment: 'Reitero mis felicitaciones de parte de toda mi familia estamos agradecidos con ustedes por su excelente servicio y por su amabilidad en todo.',
  },
  {
    userName: 'Nely Lugo',
    userPictureSrc: null,
    comment: 'Reitero mis felicitaciones de parte de toda mi familia estamos agradecidos con ustedes por su excelente servicio y por su amabilidad en todo.',
  },
  {
    userName: 'Nely Lugo',
    userPictureSrc: null,
    comment: 'Reitero mis felicitaciones de parte de toda mi familia estamos agradecidos con ustedes por su excelente servicio y por su amabilidad en todo.',
  }
];
var destinations = [
  { 
    name:'Todos',
    id: 'dest-000',
  },
  { 
    name:'Puerto Vallarta',
    id: 'dest-001',
  },
  {
    name:'Cancun',
    id: 'dest-002',
  },
  {
    name:'CDMX',
    id: 'dest-003',
  },
  {
    name:'Guanajuato',
    id: 'dest-004',
  },
  {
    name:'Holbox',
    id: 'dest-005',
  },
  {
    name:'Puerto Morelos',
    id: 'dest-006',
  },
  {
    name:'Los Cabos',
    id: 'dest-007',
  },
];
var countries = [
  { value: 'MEX', text: 'Mexico' },
  { value: 'USA', text: 'United States' },
  { value: 'CAN', text: 'Canada' },
]
var cities = [
  { value: 'CUN', text: 'Cancun', country: 'MEX' },
  { value: 'PUE', text: 'Puebla', country: 'MEX' },
  { value: 'CDMX', text: 'CDMX', country: 'MEX' },
  { value: 'VCR', text: 'Vancouver', country: 'CAN' },
  { value: 'TOR', text: 'Toronto', country: 'CAN' },
  { value: 'LAC', text: 'Los Angeles', country: 'USA' },
]