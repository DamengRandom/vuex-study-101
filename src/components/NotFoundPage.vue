<template>
  <div>
    <h3>404 Page</h3>
    <p>Ooops, page: {{ $route.params.value }} was not found ..</p>
    <router-link to="/">back to home</router-link>
  </div>
</template>

<script>
export default {
  name: 'notFound'
}
</script>

<style scoped>

</style>