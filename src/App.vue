<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
// import Schedule from './components/Schedule.vue'

export default {
    name: 'App',
    components: {
        // HelloWorld
        // Schedule
    },
    methods: {}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /*color: #2c3e50;*/
    box-sizing: border-box;
    line-height: 1em;
    height: 100vh;
    /*background-color: black;*/
    /*color: white;*/
}

html, body {
    margin: 0;
}

</style>
