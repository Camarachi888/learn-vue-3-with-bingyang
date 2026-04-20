import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/Home.vue"
import BlogPosts from "@/views/BlogPosts.vue"
import About from "@/views/About.vue"
import BlogPost from "@/views/BlogPost.vue"
import BlogPostsGreeting from '@/views/BlogPostsGreeting.vue'
import NotFound from '@/views/NotFound.vue'
import Ads from '@/views/Ads.vue'

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
                {path: '/blogPosts/:id(\\d+)', name: 'blogPost', components: {
                    default: BlogPost,
                    sidebar: Ads, }
                } ,
            ],
        },
          { path: '/about', name: 'about', component: About },
    {
      path: '/:pathMatch(.*)*', // Match any path that hasn't been matched by a previous route
      name: 'notFound',
      component: NotFound,
    },
    ],
})

//export router instance
export default router