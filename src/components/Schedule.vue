<template>
    <div class="schedule-container">
        <div class="schedule" style="position: fixed; top: 0; left: 0; width: 100%;">
            <div style="display: flex; width: 100%; height: 3em; padding-top: 0.5em; box-sizing: border-box; ">
                <div v-for="(item, index) in [''].concat(days)" :key="index" style="width: 100%; font-size: small;">
                    {{ item }}<br>{{ item ? "3.4" : "" }}
                </div>
            </div>
            <div style="display: flex; width: 100%; height: calc(100% - 3em);">
                <schedule-column style="width: 12.5%"
                                 :times="times"
                                 :show-time="true"
                />
                <schedule-column v-for="(item, index) in days" :key="index"
                                 :week-day="item"
                                 :times="times"
                                 :table="timetable[cntWeekIndex - 1][index]"
                                 :classes="classes"
                                 :show-time="false"
                                 style="width: 12.5%"
                />
            </div>
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
        // eslint-disable-next-line vue/no-unused-components
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
            timetable: [
                [
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 4, id: 1}, {from: 5, to: 6, id: 2},],
                    [{from: 1, to: 2, id: 3}, {from: 3, to: 4, id: 4}, {from: 7, to: 8, id: 5},],
                    [{from: 3, to: 4, id: 0}, {from: 5, to: 6, id: 2},],
                    [{from: 3, to: 4, id: 4}, {from: 7, to: 8, id: 5}, {from: 5, to: 6, id: 2},],
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 4, id: 1}, {from: 5, to: 6, id: 2},],
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 4, id: 1}, {from: 5, to: 6, id: 2},],
                    [{from: 1, to: 2, id: 0}, {from: 3, to: 4, id: 1}, {from: 5, to: 6, id: 2},],
                ]
            ],
            cntWeekIndex: 1,
            classes: [
                {
                    name: "计算机网络", teacher: "李全龙", place: "正心221", bgcolor: "rgb(248,230,208)", time: [
                        {week: [1, 2, 3, 4], class: {from: 1, to: 2}}, // from to
                    ]
                },
                {name: "习近平新时代中国特色社会主义思想专题辅导", teacher: "由田", place: "格物201", bgcolor: "rgb(237,223,235)"},
                {name: "软件过程与工具", teacher: "范国祥", place: "致知11", bgcolor: "rgb(212,229,239)"},
                {name: "移动互联网技术", teacher: "唐好选", place: "致知22", bgcolor: "rgb(226,240,218)"},
                {name: "人工智能", teacher: "李钦策", place: "正心32", bgcolor: "rgb(246,221,213)"},
                {name: "面向服务的软件系统", teacher: "样大易", place: "正心410", bgcolor: "rgb(231,234,234)"},
                {name: "软件过程与工具（实验）", teacher: "范国祥", place: "致知11", bgcolor: "rgb(212,229,239)"},
                {name: "计算机网络（实验）", teacher: "范国祥", place: "致知11", bgcolor: "rgb(212,229,239)"},
                {name: "人工智能（实验）", teacher: "范国祥", place: "致知11", bgcolor: "rgb(246,221,213)"},
            ]
        }
    }
}
</script>

<style scoped>
.schedule-container {
    height: 100%;
    /*background-color: lightgray;*/
}

.schedule {
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
}

.detail-container {
    position: fixed;
    left: 10%;
    width: 80%;
    height: 400px;
    top: calc(50% - 200px);
}
</style>
