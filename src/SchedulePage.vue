<template>
    <div style="height: 100vh;">
        <schedule ref="schedule"
                  style="height: 100vh; width: 100%; display: block; box-sizing: border-box; margin: 10px auto; border: 1px solid #000;"/>
        课表测试<br>
    </div>
</template>

<script>
import Schedule from "@/components/Schedule";
export default {
    name: "SchedulePage",
    components: {
        Schedule
    }
}
</script>

<style scoped>

</style>
