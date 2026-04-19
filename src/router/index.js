import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/Home.vue"
import BlogPosts from "@/views/BlogPosts.vue"
import About from "@/views/About.vue"

//create a router instance
const router = createRouter({
    //provide history implementation
    history: createWebHistory(),
    //define routes
    routes: [
        {path: '/', component: Home},
        {path: '/blogPosts', component: BlogPosts},
        {path: '/about', component: About}
    ]
})

//export router instance
export default router