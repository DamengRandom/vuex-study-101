<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span class="incomplete-box"></span> = Incomplete
      <span class="complete-box"></span> = Complete
    </div>
    <div class="todos">
      <!-- <div
        class="todo"
        @dblclick="onDblClick(todo)"
        :key="todo.id"
        v-for="todo in this.$attrs.todos" // bad practice: if we use attrs but it will render every time !!!!!
        v-bind:class="{'is-complete': todo.completed}"
      > -->
      <div
        class="todo"
        @dblclick="onDblClick(todo)"
        :key="todo.id"
        v-for="todo in todos" 
        v-bind:class="{'is-complete': todo.completed}"
      > <!-- Use props from parent !!! --> 
      <!-- <div
        class="todo"
        @dblclick="onDblClick(todo)"
        :key="todo.id"
        v-for="todo in allTodos"
        v-bind:class="{'is-complete': todo.completed}"
      > -->
        {{ todo.title }}
        <i
          class="fa fa-trash-o"
          aria-hidden="true"
          @click="deleteTodo(todo.id)">
        </i>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters, mapActions } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Todos",
  props: ['todos'],
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    // handleDelete(id) {
    //   console.log(id);
    //   this.deleteTodo(id);
    // }
    onDblClick(currentTodo) {
      const updateTodo = {
        id: currentTodo.id,
        title: currentTodo.title,
        completed: !currentTodo.completed
      };

      this.updateTodo(updateTodo);
    }
  },
  // computed: mapGetters(["allTodos"]),
  // created() {
  //   this.fetchTodos(); // trigger action
  // },
  mounted() {
    console.log('🙏: ', this.todos);
  }
};
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
