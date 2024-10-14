<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

import axios from 'axios';

axios.get('http://localhost:3000/api/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });


</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>

    </p>
  </div>

  <p>

  </p>
  <p>

  </p>

</template>

<style scoped>

</style>
