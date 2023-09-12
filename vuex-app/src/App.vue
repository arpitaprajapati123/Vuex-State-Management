<template>
  <div>
<Counter/>
<h2>App.vue counter</h2>
<!-- <p>{{ $store.state.count }}</p> -->
<button v-on:click="incrementVal">+</button>
<p>{{ count }}</p>
  </div>
</template>

<script>
import Counter from './components/Counter.vue';
export default {
  name: 'App',
  components: {
    Counter
  },
  computed:{
        count(){
            return this.$store.state.count;
        }
    },
    methods:{
        incrementVal(){
            this.$store.commit({
              type:'increment',
              value:4
            });
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
