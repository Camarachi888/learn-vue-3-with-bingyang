<template>
  <h1>message: {{ message }}</h1>
  <hr />
  <h1>count: {{ count }}</h1>
  <hr />
  <h1>number: {{ number }}</h1>
  <hr />
  <h1> doubleNum(50): {{ doubleNum(50) }}</h1>
  <hr />
  <h1> number *2 = {{ number * 2 }}</h1>
  <h1> 
    {{ number > 150 ? 'number is greater than 150' : 'number is less than 150' }}
  </h1>

</template>

<script setup>
import { h } from 'vue';

let message = 'Hello, Vue!';
let count = 0;
let number = 50;


</script>

<style lang="scss" scoped></style>
