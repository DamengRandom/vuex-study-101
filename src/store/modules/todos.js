import axios from "axios";

const url = 'http://jsonplaceholder.typicode.com/todos';

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = { // crud operations !!!
  async fetchTodos({ commit }) {
    const response = await axios.get(url);
    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(url, {
      title,
      completed: false
    });
    commit('newTodo', response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`${url}/${id}`);
    commit('removeTodo', id);
  },
  async filterTodos({commit}, value) {
    const response = await axios.get(`${url}?_limit=${Number(value)}`);
    commit('selectTodos', response.data);
  },
  async updateTodo({ commit }, updatedTodo) {
    await axios.put(`${url}/${updatedTodo.id}`);
    commit('changeTodo', updatedTodo);
  }
};

const mutations = { // setState !!!
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  // removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id) // shortcut
  removeTodo: (state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
    return state.todos;
  },
  selectTodos: (state, todos) => {
    state.todos = todos;
    return state.todos;
  },
  changeTodo: (state, updatedTodo) => {
    const  index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
    // state.todos[index] = updatedTodo;
    // return state.todos;
    if(index !== -1) {
      state.todos.splice(index, 1, updatedTodo); // another way to delete
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};