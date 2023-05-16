<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'HomeView',
  components: {
    TodoList,
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData() {
      this.$store.dispatch('tasks/loadTodoList')
    }
  }
}
</script>
