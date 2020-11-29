<template>
  <div class="container">
    <h3>Home Page</h3>
    <router-link :to="{name: 'DynamicRoutePage', params: { todosCounter: allTodos ? allTodos.length : 0 }}">
      Dynamic Page
    </router-link>
    <AddTodo />
    <FilterTodos />
    <Todos :todos="returnedTodos" />
  </div>
</template>

<script>
import Todos from './Todos.vue';
import AddTodo from './AddTodo.vue';
import FilterTodos from './FilterTodos';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'home',
  methods: {
    ...mapActions(['fetchTodos']),
  },
  computed: {
    ...mapGetters(['allTodos']),
    returnedTodos: function() {
      if(this.$store.getters['allTodos']) {
        console.log('this.$store.getters: ', this.$store.getters['allTodos']);
        return this.$store.getters['allTodos'];
      }

      return [];
    }
  },
  created() {
    this.fetchTodos(); // trigger action
  },
  components: {
    Todos,
    AddTodo,
    FilterTodos
  },
}
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>