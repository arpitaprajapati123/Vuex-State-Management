<template>
<div style="text-align:left">
    <h3>Completed tasks Status - {{ doneListCount }}</h3>
    <ul>
        <li v-for="todo in todosList" :key="todo.id">
            {{ todo.text }} - ({{ todo.done ? 'Done' : 'Not Done' }})
        </li>
    </ul>
</div>
<div style="text-align:left">
    <h4>List of completed todos.</h4>
    <ul v-for="todo in doneTodos" :key="todo.id">
        <li>{{ todo.text }} - {{ todo.done ? "Done":"Not Done" }}</li>
    </ul>
</div>
</template>
<script>
export default{
    name:'TodosList',
    data(){
        
        return {};
    },
    computed:{
        todosList(){
            return this.$store.state.todos;
        },
        doneListCount(){
            return this.$store.getters.doneTodosListCount;
        },
        doneTodos(){
            return this.$store.getters.doneTodos;
        }
    },
    methods:{
    //    getDoneListCount(){
    //     return this.todosList.filter((todo)=>todo.done).length;
    //    }
    }
}
</script>