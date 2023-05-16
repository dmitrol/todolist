<template>
  <div>
    <div class="top-actions">
      <div class="create-form">
        <h2>Добавить задачу</h2>
        <div class="action">
          <input v-model="inputValue" placeholder="Текст задачи" />
          <button class="btn" @click="addTask">Добавить</button>
        </div>
      </div>
      <div class="sort">
        <h2>Сортировать</h2>
        <select v-model="selectValue">
          <option value="active">активные</option>
          <option value="compiled">выполненные</option>
          <option value="all">все</option>
        </select>
      </div>
    </div>

    <transition-group name="list" tag="div">
      <div v-for="item in selectedList" :key="item.id">
        <todo-item
          :item="item"
          @changeStatus="changeStatus"
          @edit="editItem"
          @remove="deleteTask"
        ></todo-item>
      </div>
    </transition-group>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'
export default {
  components: { TodoItem },
  name: 'TodoList',
  computed: {
    todoList() {
      return this.$store.state.tasks.todoList
    },
    selectedList() {
      let result = this.todoList
      if (this.selectValue === 'active') {
        result = result.filter((el) => el.complited === false)
      }
      if (this.selectValue === 'compiled') {
        result = result.filter((el) => el.complited)
      }
      return result
    },
  },
  data() {
    return {
      inputValue: '',
      selectValue: 'all',
    }
  },
  methods: {
    async addTask() {
      console.log(this.inputValue)
      this.$store
        .dispatch('tasks/addItem', {
          id: Date.now(),
          text: this.inputValue,
          complited: false,
        })
        .then(() => {
          this.inputValue = ''
        })
    },
    async changeStatus(item) {
      item.complited = !item.complited
      this.$store.dispatch('tasks/putItem', item)
    },
    async editItem(item) {
      this.$store.dispatch('tasks/putItem', item)
    },
    async deleteTask(item) {
      this.$store.dispatch('tasks/removeItem', item)
    },
  },
}
</script>

<style lang="scss" scoped>
.top-actions {
  display: flex;
}
.create-form {
  margin-bottom: 20px;
  text-align: start;
  .action {
    .btn {
      padding: 5px 10px;
      margin-left: 10px;
    }
  }
  input {
    width: 200px;
    padding: 5px;
  }
}
.sort {
  margin-left: 15px;
  text-align: start;
  select {
    padding: 5px;
  }
}
</style>
