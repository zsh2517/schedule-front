<template>
    <div class="schedule-container">
        <div class="schedule">
            <schedule-column-empty style="width: 12.5%"/>
            <schedule-column-empty v-for="(item, index) in days" :key="index" :day-in-week="item"
                             :times-in-day="times"
                             :column="table[cntWeekIndex][index]"
                             style="width: 12.5%; color: red; font-weight: bold;"
            />
        </div>
        <div class="schedule" style="position: fixed; top: 0; left: 0; width: 100%;">
            <schedule-column style="width: 12.5%"/>
            <schedule-column v-for="(item, index) in days" :key="index" :day-in-week="item"
                             :times-in-day="times"
                             :schedule-column="table[cntWeekIndex][index]"
                             :class-list="classList"
                             style="width: 12.5%"
            />
        </div>
        <div class="detail-container" style="background-color: gray;">

        </div>
    </div>
</template>

<script>
import ScheduleColumn from "@/components/ScheduleColumn";
import ScheduleColumnEmpty from "@/components/ScheduleColumnEmpty";

export default {
    name: "Schedule.vue",
    components: {
        ScheduleColumn,
        ScheduleColumnEmpty
    },
    data() {
        return {
            beginDate: new Date("2021-09-06"),
            days: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            times: ["8:00~8:50", "8:55~9:45", "10:00~10:50", "10:55~11:45",
                "13:45~14:35", "14:40~15:30", "15:45~16:35", "16:40~17:30",
                "18:30~19:20", "19:25~20:15", "20:30~21:20", "21:25~22:15"
            ],
            table: [
                [
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 6, id: 0}, {from: 9, to: 10, id: 0},],
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 6, id: 0}, {from: 9, to: 10, id: 0},],
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 6, id: 0}, {from: 9, to: 10, id: 0},],
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 6, id: 0}, {from: 9, to: 10, id: 0},],
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 6, id: 0}, {from: 9, to: 10, id: 0},],
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 6, id: 0}, {from: 9, to: 10, id: 0},],
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 6, id: 0}, {from: 9, to: 10, id: 0},],
                ]
            ],
            cntWeekIndex: 0,
            classList: [
                {name: "CSAPP", place: "正心 12", color: "#e7bfda"}
            ]
        }
    }
}
</script>

<style scoped>
.schedule-container {
    height: 100%;
}

.schedule {
    display: flex;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    border: 1px solid #000;
}

.detail-container {
    position: fixed;
    left: 10%;
    width: 80%;
    height: 400px;
    top: calc(50% - 200px);
}
</style>
