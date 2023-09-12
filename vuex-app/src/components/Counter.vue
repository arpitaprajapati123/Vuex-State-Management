<template>
    <div>
        <!-- {{ $store.state.count }} -->
        
    </div>
    <p>Value of count returning by computed property: {{ count }}</p>
    <button v-on:click="incrementVal">+</button>
</template>
<script>
export default{
    name:'CounterPg',
    data(){
        return {
            // counter:0
        }
    },
    computed:{
        count(){
            return this.$store.state.count;
        }
    },
    methods:{
        incrementVal(){
            // this.$store.state.count++
            this.$store.commit({
                type:'increment',
                value:5,
            });
        }
    }
}
</script>