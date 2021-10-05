<template>
    <div class="item-normal"
         :style="`grid-row: ${fromTime} / ${toTime + 1}; grid-column: ${weekDay + 1};
         background-color: rgba(${bgColor[0]}, ${bgColor[1]}, ${bgColor[2]}, 0.6)`">
        {{ classInfo.name }}<br>{{ classInfo.place }}<br>
<!--        {{classInfo.bgcolor}}-->
    </div>
</template>

<script>
export default {
    name: "ScheduleItem",
    props: {
        weekDay: Number,
        fromTime: Number,
        toTime: Number,
        bgColor: Array,
        classInfo: Object
    },
    data() {
        return {}
    },
    mounted() {
        console.log("qwerty");
        console.log(this.props);
    },
    computed: {},
    methods: {}
}
</script>

<style scoped>
.item-normal {
    border-radius: 5px;
    /*background-color: #DDDDDD;*/
    border: 1px dotted #DDD;
    line-break: anywhere;
    font-size: 12px;
    padding: 2px;
    overflow: hidden;
}

@media screen and (max-width: 360px) {
    .item-normal {
        font-size: 11px;
        padding: 0;
    }
}

@media screen and (min-width: 640px) {
    .item-normal {
        font-size: 14px;
        padding: 5px;
    }
}
</style>
