<template>
  <h1>Hello {{ message }}!</h1>
</template>

<script>
const obj = { 0: 'Nuxt' };

export default {
  computed: {
    message() {
      return Object.entries(obj)[0][1];
    }
  }
};
</script>
