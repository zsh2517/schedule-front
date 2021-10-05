<template>
    <div class="item-empty"
         :style="`grid-row: ${time} ; grid-column: ${weekDay + 1};`">
    </div>
</template>

<script>
export default {
    name: "ScheduleEmpty",
    props: {
        weekDay: Number,
        time: Number
    }
}
</script>

<style scoped>
.item-empty {
    background-color: unset;
    border-radius: 5px;
    border: 1px dotted #eee;
}
</style>
