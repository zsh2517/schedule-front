<template>
    <div>
        <div class="column">
            <div v-for="(item, index) in TimesInDay" :key="index" class="column-item"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        DayInWeek: String,
        TimesInDay: Array,
        ColumnInfo: Array,
        ClassList: Array
    },
    name: "ScheduleColumnEmpty",
    computed: {
        test() {
            // let emm = [{from: 1, to: 2, name: "语文"}, {from: 3, to: 6, name: "语文"}, {from: 9, to: 10, name: "语文"},],;
            return  "";
        }
    }
}
</script>

<style scoped>
.column {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    /*border: 1px solid gray;*/
    font-size: x-small;
    display: flex;
    flex-direction: column;
}

.column-item {
    margin: 2px;
    box-sizing: border-box;
    border: 1px dotted #EEE;
    border-radius: 5px;
    height: 100%;
    overflow: hidden;
    /*min-height: 4em;*/
    /*height: 7em;*/
    /*max-height: calc(100vh / 12);*/
    /*background-color: white;*/
    line-break: anywhere;
}
</style>
