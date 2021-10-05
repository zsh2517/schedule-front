<template>
    <div id="app">
        <schedule ref="schedule" style="height: 80vh; width: 90%; display: block; box-sizing: border-box; margin: 10px auto; border: 1px solid #000;"/>
        课表测试<br>
<!--        Design. zsh2517-->
        <button @click="prevWeek">上一页</button>
        <button @click="nextWeek">下一页</button>
    </div>
</template>

<script>
import Schedule from './components/Schedule.vue'

export default {
    name: 'App',
    components: {
        // HelloWorld
        Schedule
    },
    methods: {
        nextWeek() {
            this.$refs.schedule.switchNextWeek();
        },
        prevWeek() {
            this.$refs.schedule.switchPrevWeek();
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
    /*color: #2c3e50;*/
    box-sizing: border-box;
    /*height: 100vh;*/
    /*background-color: black;*/
    /*color: white;*/
}

html, body {
    margin: 0;
}

</style>
