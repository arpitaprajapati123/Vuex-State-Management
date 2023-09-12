import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

//initializing store.....
const store = createStore({
    state(){
        return {
            todos:[
                {id:1, text:"wakeup early", done:true},
                {id:2, text:"have breakfast", done:true},
                {id:3, text:"Go to work", done:false},
                {id:4, text:"sleep early", done:false},
                {id:5, text:"work out", done:true}
            ]
        };
    },
    getters:{
        doneTodosListCount(state){
            return state.todos.filter((todo)=>todo.done).length;
        },
        doneTodos(state){
            return state.todos.filter((todo)=>todo.done);
        }
    },
    mutations:{
        increment(state, payload){
            state.count = state.count + payload.value;
        }
    }
})

const app = createApp(App);
app.use(store);
app.mount('#app');
