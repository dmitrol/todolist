<template>
  <div class="todo-item">
    <div class="text">{{ item?.text }}</div>
    <div class="status" :class="{ 'active': item.complited }">
      {{ item.complited ? 'Выполнено' : 'Не выполнено' }}
    </div>
    <div class="edit-button" @click="$emit('changeStatus', item)">
      {{ item.complited ? 'Отменить' : 'Выполнить' }}
    </div>
    <div v-if="showEditForm === true" class="edit-form">
      <input type="text" v-model="editInput" />
      <button @click="editItem">Ок</button>
    </div>
    <div v-else class="edit-button" @click="showEditForm = true">Изменить</div>
    <div class="remove-button" @click="$emit('remove', item)">Удалить</div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editInput: this.item.text,
      showEditForm: false,
    }
  },
  methods: {
    editItem() {
      this.$emit('edit', {
        id: this.item.id,
        text: this.editInput,
        complited: this.item.complited,
      })
      this.showEditForm = false
    },
  },
}
</script>

<style scoped lang="scss">
.todo-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 7px 10px;
  border: 1px solid rgb(180, 180, 180);
  border-radius: 5px;
  margin: 7px 0;
  .text {
    min-width: 300px;
    width: 100%;
    text-align: start;
  }
  .status {
    min-width: 120px;
    background: rgb(240, 28, 0);
    padding: 5px;
    border-radius: 5px;
    transition: all, 0.7s;
    &.active {
      background: rgb(22, 196, 22);
    }
  }
  div {
    margin-right: 15px;
  }
  .edit-form {
    display: flex;
    min-width: 210px;
    button {
      margin-left: 5px;
    }
  }
  .edit-button {
    padding: 5px 10px;
    background: rgb(29, 111, 235);
    border-radius: 5px;
    cursor: pointer;
  }
  .remove-button {
    padding: 5px 10px;
    background: rgb(240, 28, 0);
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
