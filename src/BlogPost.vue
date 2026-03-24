<template>
    <div class="blog-post">
        <p>
            {{ message }}
        </p>
        <!--Display the id, title, and content of a blog post-->
        <h2>{{ id }} - {{ blogPostTitle }}</h2>
        <div>Modify the title:<input type="text" v-model="blogPostTitle"/></div>
        <h4>{{ blogPostContent }}</h4>
        <div>Modify the content:<input type="text" v-model="blogPostContent"/></div>
        <button @click="$emit('delete-blog-post', id)">Delete post</button>
        <button @click="emitDeletePostEvent(id)">Remove post</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
let message = ref('This is the BlogPost component')
defineProps(['id'])
const emit = defineEmits(['delete-blog-post'])

function emitDeletePostEvent(id){
    emit('delete-blog-post', id)
}

let blogPostContent = defineModel('blogPostContent')
let blogPostTitle = defineModel('blogPostTitle')
</script>

<style scoped>
.blog-post {
    background-color: aqua;
    padding:10px;
    margin-bottom: 10px;
}

input {
    width: 100%;
}
</style>