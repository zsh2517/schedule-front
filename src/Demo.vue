<template>
    <div>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Demo",
    methods: {
        login: function () {
            axios.get("/api/demo").then((resp) => {
                console.log(resp.message);
                this.$router.push('schedule');
            }).catch((err) => {
                console.error(err);
                this.$router.push('schedule');
            })
        }
    },
    mounted: function() {
        this.login();
    }
}
</script>

<style scoped>

</style>
