import { createStore } from 'vuex'
import {v4 as uuidv4} from 'uuid';

export default createStore({
  state: {
    todos: [
      {
        id: '1',
        text: 'Recolectar las priedras del infinito',
        completed: true
      },
      {
        id: '2',
        text: 'Recolectar laspriedra del gato',
        completed: false
      },
      {
        id: '3',
        text: 'Recolectar la priedra del perro',
        completed: true
      },
      {
        id: '4',
        text: 'Recolectar la priedra del tiempo',
        completed: false
      },
      {
        id: '5',
        text: 'Recolectar la priedra del fuego',
        completed: false
      },
    ]
  },
  getters: {
    pendingTodos: ( state, getters, rootState ) => {
      return state.todos.filter( todo => !todo.completed );
    },
    completedTodos: ( state, getters, rootState ) => {
      return state.todos.filter( todo => todo.completed );
    },
    allTodos: ( state, getters, rootState ) => {
      return state.todos;
    },
    getTodosByTab: (state, getters, rootState) => ( payload ) => {
      switch (payload) {
        case 'all':
          return getters.allTodos;
        case 'pending':
          return getters.pendingTodos;
        case 'completed':
          return getters.completedTodos;
      }
    }
  },
  mutations: {
    toggleTodo: (state, payload) => {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[index].completed = !state.todos[index].completed;
    },
    createTodo: (state, payload) => {
      const { text } = payload;
      if(text===null || text.length <= 1) return;
      state.todos.push({
        id: uuidv4(),
        text
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
