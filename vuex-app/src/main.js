import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

//initializing store.....
const store = createStore({
    state(){
        return {
            count:7
        };
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
