<template>
  <h1>{{ message }}</h1>
  <button v-on:click="replaceText('v-on is fun!')">Replace text</button>
  <button @click="replaceText('v-on is fun!')">Replace text</button>
  <hr>
  <p>An input field where the user cn only enter numbers:</p>
  <input type="text" @keydown="handleInput($event)"/>

  <hr />
  <div
   style="width: 100px; height: 100px; background-color: aqua"
   @contextmenu.prevent="cosole.log('Show custom context menu')">
  </div>
   
    <div id="mouseover" @mouseover="fun1">
    <textarea @mouseover="fun2($event)"> This is a text area.</textarea>
    </div>
   Hover over me!
</template>

<script setup>
import { ref } from 'vue'

let message = ref('Hello, V-on!')
function replaceText(msg) {
  message.value = msg
}

function handleInput(event) {
  console.log(event)
  let keyCode = event.keyCode
  if(keyCode < 48 || keyCode > 57) {
    event.preventDefault()
  }
}
</script>

<style scoped>
#mouseover {
  margin: 100px;
  text-align: right;
  background-color: purple;
  width: 300px;
  height: 300px;
}
</style>
