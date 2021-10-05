<template>
    <div class="item-normal"
         :style="`grid-row: ${fromTime} / ${toTime + 1}; grid-column: 1;
         ${css_bgColor} ${css_border}`">
        <div style="font-size: larger;">{{ index }}</div>
        <div>{{ text.split("~")[0] }}</div>
        <!--        {{classInfo.bgcolor}}-->
    </div>
</template>

<script>
export default {
    name: "ScheduleTime",
    props: {
        fromTime: Number,
        toTime: Number,
        bgColor: Array,
        index: String,
        text: String,
        border: String
    },
    data() {
        return {}
    },
    mounted() {
        console.log("qwerty");
        console.log(this.props);
    },
    computed: {
        css_bgColor() {
            if (this.bgColor && this.bgColor.length > 0) {
                return `background-color: rgba(${this.bgColor[0]}, ${this.bgColor[1]}, ${this.bgColor[2]}, 0.6);`
            } else {
                return "";
            }
        },
        css_border() {
            return "border-radius: 5px;" + (this.border ? `border: ${this.border};` : "");
        }
    },
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
    padding: 5px 2px;
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
