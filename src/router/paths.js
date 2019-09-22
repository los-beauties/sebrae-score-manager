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
    // Relative to /src/views
    view: 'Catalog'
  },
  {
    path: '/products',
    // Relative to /src/views
    view: 'Products'
  },
  {
    path: '/perfil',
    // Relative to /src/views
    view: 'Perfil'
  },
  {
    path: '/landing',
    // Relative to /src/views
    view: 'LandingPage'
  }
]
