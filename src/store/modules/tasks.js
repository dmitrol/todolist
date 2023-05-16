const state = {
  todoList: [],
}
const getters = {}
const mutations = {
  initTodoList(state, list) {
    state.todoList = list
  },
  addTodoItem(state, item) {
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
  async loadTodoList({ commit }) {
    // try {
    //   const res = await fetch(`${process.env.VUE_APP_API_URL}`)
    //   if (res.ok) {
    //     const data = await res.json()
    //     commit('initTodoList', data)
    //     localStorage.setItem('list', JSON.stringify(data))
    //   } else {
    //     console.error(`server error url: ${res.url} status: ${res.status}`)
    //   }
    // } catch (e) {
    //   console.log(e)
    // }
    const data = JSON.parse(localStorage.getItem('list'))
    if (Array.isArray(data)) {
      commit('initTodoList', data)
    } else {
      localStorage.setItem('list', [])
    }
  },
  async addItem({ commit }, item) {
    // try {
    //   const res = await fetch(`${process.env.VUE_APP_API_URL}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: item,
    //   })
    //   if (res.ok) {
    //     console.log('item added on server')
    //   } else {
    //     console.error(`server error url: ${res.url} status: ${res.status}`)
    //   }
    // } catch (e) {
    //   console.log(e)
    // }
    commit('addTodoItem', item)
  },
  async putItem({ commit }, item) {
    // try {
    //   const res = await fetch(`${process.env.VUE_APP_API_URL}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: item,
    //   })
    //   if (res.ok) {
    //     console.log('item updated on server')
    //   } else {
    //     console.error(`server error url: ${res.url} status: ${res.status}`)
    //   }
    // } catch (e) {
    //   console.log(e)
    // }
    commit('putTodoItem', item)
  },
  async removeItem({ commit }, item) {
    // try {
    //   const res = await fetch(`${process.env.VUE_APP_API_URL}`, {
    //     method: 'DELETE',
    //     headers: {
    //       'Content-type': 'application/json',
    //     },
    //     body: item,
    //   })
    //   if (res.ok) {
    //     console.log('item deleted on server')
    //   } else {
    //     console.error(`server error url: ${res.url} status: ${res.status}`)
    //   }
    // } catch (e) {
    //   console.log(e)
    // }
    commit('removeTodoItem', item)
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
