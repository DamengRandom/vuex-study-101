<template>
  <div>
    <h3>Dynamic Route Page</h3>
    <p>How many todos: {{ $route.params.todosCounter }} we got ..</p>
    <a href="https://gist.github.com/brianboyko/91fdfb492071e743e389d84eee002342">another reference</a>
    <router-link to="/">back to home</router-link>
  </div>
</template>

<script>
export default {
  name: 'dynamicRoute'
}
</script>

<style scoped>

</style>