<template>
  <div>
    <h3>Filter Todos</h3>
    <select v-model="currentValue" @change="handleSelect">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'FilterTodos',
  data() {
    return {
      currentValue: '200'
    }
  },
  methods: {
    ...mapActions(['filterTodos']),
    handleSelect() {
      this.filterTodos(this.currentValue);
    }
  }
}
</script>
<style scoped>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
</style>