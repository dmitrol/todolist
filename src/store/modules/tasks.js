const state = {
  todoList: [],
}
const getters = {}
const mutations = {
  initTodoList(state, list) {
    console.log(list)
    state.todoList = list
  },
  appTodoItem(state, item) {
    state.todoList.push(item)
    localStorage.setItem('list', JSON.stringify(state.todoList))
  },
  putTodoItem(state, item) {
    const index = state.todoList.findIndex((el) => el.id === item.id)
    state.todoList[index] = item
    localStorage.setItem('list', JSON.stringify(state.todoList))
  },
  removeTodoItem(state, item) {
    const index = state.todoList.findIndex((el) => el.id === item.id)
    state.todoList.splice(index, 1)
    localStorage.setItem('list', JSON.stringify(state.todoList))
  },
}
const actions = {
  loadTodoList({ commit }) {
    const data = JSON.parse(localStorage.getItem('list'))
    if (Array.isArray(data)) {
      commit('initTodoList', data)
    } else {
      localStorage.setItem('list', [])
    }
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
