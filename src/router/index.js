import {createRouter,createWebHistory} from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

// Route '/about/' to the about component
// Route '/' to the about component
// it's basically 'redirecting'
const routes = [

    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path: '/about',
        name:'About',
        component: About
    }
]
// Create a router that takes in an object
// then uses the createwebhistoy that takes in the current/ BASEurl
const router = createRouter(
    {// Takes in
    history: createWebHistory(process.env.BASE_URL),
    routes,
    } )
export default router