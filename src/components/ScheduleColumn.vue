<template>
    <div>
        <div v-if="!ShowTime" class="column" :style="`grid-template-rows: repeat(12, 1fr);`">
            <div v-for="(item, index) in ColumnInfo" :key="index" class="column-item"
                 :style="`background-color: ${ClassList[item.id].bgcolor};
                    grid-column: 1;
                    grid-row: ${item.from}/${item.to + 1};`">
                <div class="column-item-text">
                    {{ ClassList[item.id].name }}<br>
                    {{ ClassList[item.id].place }}<br>
                </div>
            </div>
        </div>
        <div v-if="ShowTime" class="column" :style="`grid-template-rows: repeat(12, 1fr);`">
            <div v-for="(item, index) in TimesInDay" :key="index" class="column-item"
                 :style="`background-color: unset;
                    grid-column: 1;
                    grid-row: ${index + 1}/${index + 2};`">
                {{ index + 1 }}
<!--                <br>{{ item }}-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        DayInWeek: String,
        TimesInDay: Array,
        ColumnInfo: Array,
        ClassList: Array,
        ShowTime: Boolean
    },
    name: "ScheduleColumn",
    computed: {
        test() {
            // let emm = [{from: 1, to: 2, name: "语文"}, {from: 3, to: 6, name: "语文"}, {from: 9, to: 10, name: "语文"},],;
            return "";
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
    font-size: 9pt;
    font-weight: 500;
    display: grid;
    flex-direction: column;
}

.column-item {
    margin: 2px;
    border-radius: 5px;
    line-break: anywhere;
}

.column-item-text {
    margin: 10px 2px 10px 2px;
    width: calc(100% - 4px);
    /*height: 100%;*/
    height: calc(100% - 20px);
    /*height: calc(100% - 20px);*/
    overflow-y: hidden;
}
</style>
