const Home = () => import('./components/Home.vue')
const Contacto = () => import('./components/Contacto.vue')

const Mostrar = () => import('./components/libro/Mostrar.vue')
const Crear = () => import('./components/libro/Crear.vue')
const Editar = () => import('./components/libro/Editar.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'mostrarLibros',
        path: '/libros',
        component: Mostrar
    },
    {
        name: 'crearLibro',
        path: '/crear',
        component: Crear
    },
    {
        name: 'editarLibro',
        path: '/editar/:id',
        component: Editar
    },
     {
        name: 'contacto',
        path: '/contacto',
        component: Contacto
    }
]