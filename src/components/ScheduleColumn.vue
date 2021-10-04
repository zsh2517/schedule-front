<template>
    <div>
        <div v-if="!ShowTime" class="column" :style="`grid-template-rows: repeat(12, 1fr);`">
            <div v-for="(item, index) in times" :key="item" class="column-item-empty"
                 :style="`background-color: unset; grid-column: 1; grid-row: ${index + 1}/${index + 2};
                    // ${index % 2 === 0? 'border-top: 1px solid black;' : ''};`">
            </div>
            <div v-for="(item, index) in table" :key="index" class="column-item"
                 :style="`background-color: ${classes[item.id].bgcolor}; grid-column: 1;
                    grid-row: ${item.from}/${item.to + 1};`">
                <div class="column-item-text">
                    {{ classes[item.id].name }}<br>
                    {{ classes[item.id].place }}<br>
                </div>
            </div>
        </div>
        <div v-if="ShowTime" class="column" :style="`grid-template-rows: repeat(12, 1fr);`">
            <div v-for="(item, index) in times" :key="index" class="column-item"
                 :style="`background-color: unset;
                    grid-column: 1;
                    // ${index % 2 === 0? 'border-top: 1px solid black;' : ''};
                    grid-row: ${index + 1}/${index + 2};`">
                {{ index + 1 }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        weekDay: String,
        times: Array,
        table: Array,
        classes: Array,
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
    font-size: 12px;
    font-weight: 500;
    display: grid;
    flex-direction: column;
}

.column-item {
    margin: 2px;
    border-radius: 5px;
    line-break: anywhere;
}

@media screen and (max-width: 360px) {
    .column {
        font-size: 10px;
    }
    .column-item {
        padding: 0;
    }
    .column-item-text {
        margin: 0;
    }
}

@media screen and (min-width: 720px) {
    .column {
        font-size: 14px;
    }
    .column-item {
        padding: 0;
    }
}

.column-item-text {
    margin: 5px 2px 5px 2px;
    width: calc(100% - 4px);
    height: calc(100% - 10px);
    overflow-y: hidden;
}

.column-item-empty {
    margin: 2px;
    box-sizing: border-box;
    border: 1px dotted #EEE;
    border-radius: 5px;
    overflow: hidden;
    line-break: anywhere;
}
</style>
