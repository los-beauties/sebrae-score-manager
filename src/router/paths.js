/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    name: 'Dash',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/catalog',
    name: 'Marketplace',
    // Relative to /src/views
    view: 'Catalog'
  },
  {
    path: '/achievements',
    // Relative to /src/views
    view: 'MinhasConquistas'
  },
  {
    path: '/products',
    // Relative to /src/views
    view: 'Products'
  },
  {
    path: '/perfil',
    name: 'Company',
    // Relative to /src/views
    view: 'Perfil'
  },
  {
    path: '/landing',
    // Relative to /src/views
    view: 'LandingPage'
  }
]
