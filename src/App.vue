<template>
    <div id="app">
        <schedule/>
    </div>
</template>

<script>
import Schedule from './components/Schedule.vue'

export default {
    name: 'App',
    components: {
        // HelloWorld
        Schedule
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
    box-sizing: border-box;
    height: 100vh;
}
html, body {
    margin: 0;
}

</style>
