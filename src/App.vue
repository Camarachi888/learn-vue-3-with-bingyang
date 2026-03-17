<template>
  <div class=card>
    <h1 ref="title">Hello, Template Refs!</h1>
    <input type="text" ref="input"/>
    <br/>
    <button @click="printDomElement">
      Print DOM elements in console log
    </button>
    <button @click="changeTitle">
      Change Title
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

let title = ref()
let input = ref()

function printDomElement() {
  console.log(title.value)
  console.log(input.value)
}

function changeTitle() {
  title.value.innerText = 'Hello World!'
}

onMounted(()=>{
  input.value.focus()
})
</script>

<style scoped>
.card {
  background-color: purple;
  color: white;
  padding: 20px 10px;
  margin-bottom: 10px;
}
</style>
