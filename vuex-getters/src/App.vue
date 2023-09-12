<template>
 <div>
  <TodosList/>
  <div style="text-align: left;">Task done - {{ getDoneListCount() }}</div>
 </div>
</template>

<script>

import TodosList from './components/TodosList.vue';
export default {
  name: 'App',
  components: {
    TodosList
  },
  methods:{
       getDoneListCount(){
        return this.$store.state.todos.filter((todo)=>todo.done).length;
       }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
