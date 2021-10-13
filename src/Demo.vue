<template>
    <div>
        <button @click="test">test</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Demo",
    methods: {
        test: function () {
            axios.get("https://example.com/").then((resp) => {
                console.log(resp)
            })
        }
    },
    mounted: function() {

    }
}
</script>

<style scoped>

</style>
