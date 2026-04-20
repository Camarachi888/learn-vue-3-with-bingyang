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
        {path: '/', name:'home', component: Home},
        {
            path: '/blogPosts', 
            name: 'blogcPosts', 
            component: BlogPosts,
            redirect: { name: 'blogPostsGreeting' },
            children: [
                { path: '', name: 'blogPostsGreeting', component: BlogPostsGreeting },
                {path: '/blogPosts/:id(\\d+)', name: 'blogPost', component: BlogPost },
            ],
        },
        {path: '/about', name: 'about', component: About}
    ]
})

//export router instance
export default router