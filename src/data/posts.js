export const posts = [
  {
      id: 1,
      title: 'Portfolio Personal',
      excerpt: 'Sitio web personal para mostrar mis proyectos y habilidades como desarrollador frontend.',
      content: `
          Desarrollo de un portfolio personal moderno y responsive utilizando React, CSS Grid y Flexbox.
          Incluye secciones para proyectos, habilidades y contacto, con un diseño limpio y accesible.
      `,
      image: '/images/portfolio-preview.jpg',
      date: '2025-06-20',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      tags: ['web', 'frontend', 'react'],
      github: 'https://github.com/tuusuario/portfolio',
      demo: 'https://tudominio.com',
      features: [
          'Diseño responsive',
          'Modo oscuro/claro',
          'Filtrado de proyectos',
          'Animaciones suaves'
      ]
  },
  {
      id: 2,
      title: 'E-commerce React',
      excerpt: 'Plataforma de comercio electrónico desarrollada con React y Node.js.',
      content: `
          Aplicación completa de comercio electrónico con carrito de compras, autenticación de usuarios
          y pasarela de pago integrada. Incluye panel de administración para gestión de productos.
      `,
      image: '/images/ecommerce-preview.jpg',
      date: '2025-05-15',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      tags: ['web', 'fullstack', 'ecommerce'],
      github: 'https://github.com/tuusuario/ecommerce',
      demo: 'https://ecommerce.tudominio.com',
      features: [
          'Carrito de compras',
          'Autenticación de usuarios',
          'Pasarela de pago',
          'Panel de administración'
      ]
  },
  {
      id: 3,
      title: 'App del Clima',
      excerpt: 'Aplicación del tiempo con pronóstico extendido usando API de OpenWeather.',
      content: `
          Aplicación meteorológica que muestra el clima actual y pronóstico a 5 días.
          Incluye búsqueda por ciudad y geolocalización automática.
      `,
      image: '/images/weather-app.jpg',
      date: '2025-04-10',
      technologies: ['React', 'API REST', 'Geolocation API', 'CSS Modules'],
      tags: ['web', 'frontend', 'api'],
      github: 'https://github.com/tuusuario/weather-app',
      demo: 'https://clima.tudominio.com',
      features: [
          'Pronóstico a 5 días',
          'Búsqueda por ciudad',
          'Geolocalización',
          'Modo oscuro'
      ]
  },
  {
      id: 4,
      title: 'Task Manager',
      excerpt: 'Aplicación de gestión de tareas con autenticación y base de datos en tiempo real.',
      content: `
          Gestor de tareas colaborativo que permite a los usuarios crear, editar y eliminar tareas
          en tiempo real. Incluye autenticación y autorización de usuarios.
      `,
      image: '/images/task-manager.jpg',
      date: '2025-03-22',
      technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
      tags: ['web', 'firebase', 'productividad'],
      github: 'https://github.com/tuusuario/task-manager',
      demo: 'https://tasks.tudominio.com',
      features: [
          'Tiempo real con Firebase',
          'Autenticación de usuarios',
          'Interfaz intuitiva',
          'Organización por proyectos'
      ]
  }
];

