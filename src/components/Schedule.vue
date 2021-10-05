<template>
    <div class="schedule-container">
        <div class="schedule" style="width: 100%;">
            <div class="schedule-title">
                <div v-for="(item, index) in [''].concat(days)" :key="index" style="width: 100%; font-size: small;">
                    {{ item ? item : `${cntWeekIndex}周` }}
                    <br>
                    {{
                        item ? `${dateStr(null, cntWeekIndex * 7 - 7 + index - 1).split(".")[1]}日` :
                            `${dateStr(null, cntWeekIndex * 7 - 7 + index).split(".")[0]}月`
                    }}
                </div>
            </div>
            <div class="schedule-main"
                 :style="`grid-template-rows: repeat(${nTimes}, 1fr); grid-template-columns: repeat(${nDays + 1}, 1fr);`">
                <schedule-empty
                    v-for="(item, index) in cross(range(1, days.length  + 1 ), range(1, times.length + 1))"
                    :key="`empty${index}`"
                    :week-day="item[0]" :time="item[1]">
                </schedule-empty>
                <schedule-time
                    v-for="(item, index) in times" :key="`time-${index}`"
                    :from-time="index + 1" :to-time="index + 1" :text="item" :index="index + 1"
                    border="1px dotted #DDD"
                >
                    <!--                    <schedule-time-->
                    <!--                        :weekIndex="cntWeekIndex" :month=""-->
                    <!--                        border="1px dotted #DDD"-->
                    <!--                    >-->

                </schedule-time>
                <schedule-item v-for="(item, index) in timetable" :key="`normal-${index}`"
                               :week-day="item.weekDay" :from-time="item.from" :to-time="item.to"
                               :bg-color="item.bgcolor" :class-info="item.classInfo"
                >
                </schedule-item>
            </div>
        </div>
    </div>
</template>

<script>
import ScheduleItem from "@/components/ScheduleItem";
import ScheduleEmpty from "@/components/ScheduleEmpty";
import ScheduleTime from "@/components/ScheduleTime";
import ScheduleLeftTop from "@/components/ScheduleLeftTop";
import base from "@/base";

export default {
    name: "Schedule.vue",
    components: {
        ScheduleItem,
        ScheduleEmpty,
        ScheduleTime,
        // eslint-disable-next-line vue/no-unused-components
        ScheduleLeftTop
    },
    data() {
        return {
            beginDate: new Date("2021-09-06"), // 第一周周一
            days: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            times: ["8:00~8:50", "8:55~9:45", "10:00~10:50", "10:55~11:45",
                "13:45~14:35", "14:40~15:30", "15:45~16:35", "16:40~17:30",
                "18:30~19:20", "19:25~20:15", "20:30~21:20", "21:25~22:15"
            ],
            // timetable: [],
            cntWeekIndex: 1,
            classes: [
                {
                    name: "计算机网络", teacher: "李全龙", place: "正心221", time: [
                        {week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], day: 1, time: {from: 1, to: 2}}, // from to
                        {week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], day: 3, time: {from: 3, to: 4}}, // from to
                    ]
                }, {
                    name: "习近平新时代中国特色社会主义思想专题辅导", teacher: "由田", place: "格物201", time: [
                        {week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 3, to: 4}}, // from to
                    ]
                }, {
                    name: "软件过程与工具", teacher: "范国祥", place: "致知11", time: [
                        {week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], day: 1, time: {from: 5, to: 6}}, // from to
                        {week: [3, 5, 7, 9, 11, 13, 15], day: 3, time: {from: 5, to: 6}}, // from to
                    ]
                }, {
                    name: "移动互联网技术", teacher: "唐好选", place: "致知22", time: [
                        {week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], day: 2, time: {from: 1, to: 2}}, // from to
                        {week: [2, 4, 6, 8, 10, 12, 14, 16], day: 4, time: {from: 7, to: 8}}, // from to
                    ]
                }, {
                    name: "面向服务的软件系统", teacher: "杨大易", place: "正心410", time: [
                        {week: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], day: 2, time: {from: 7, to: 8}}, // from to
                        {week: [3, 5, 7, 9, 11, 13, 15], day: 4, time: {from: 7, to: 8}}, // from to
                    ]
                }, {
                    name: "人工智能", teacher: "李钦策", place: "正心32", time: [
                        {week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 3, to: 4}}, // from to
                        {week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 3, to: 4}}, // from to
                    ]
                },
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 1, to: 2}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 1, to: 2}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 1, to: 2}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 1, to: 2}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 1, to: 2}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 3, to: 4}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 3, to: 4}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 3, to: 4}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 3, to: 4}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 3, to: 4}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 5, to: 6}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 5, to: 6}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 5, to: 6}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 5, to: 6}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 5, to: 6}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 7, to: 8}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 7, to: 8}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 7, to: 8}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 7, to: 8}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 7, to: 8}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 9, to: 10}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 9, to: 10}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 9, to: 10}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 9, to: 10}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 9, to: 10}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 11, to: 12}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 11, to: 12}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 11, to: 12}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 11, to: 12}}]},
                // {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 11, to: 12}}]},

            ]
        }
    },
    computed: {
        nDays() {
            return this.days.length;
        },
        nTimes() {
            return this.times.length;
        },
        weekBeginDate() {
            let d = new Date();
            d.setDate(this.beginDate.getDate() + 7 * this.cntWeekIndex - 7);
            return d;
        },
        timetable() {
            let table = [];
            for (let i = 0; i < this.classes.length; i++) {
                let c = this.classes[i];
                for (let j = 0; j < c.time.length; j++) {
                    let t = c.time[j];
                    if (t && t.week.indexOf(this.cntWeekIndex) > -1) {
                        table.push({
                            weekDay: t.day,
                            from: t.time.from,
                            to: t.time.to,
                            bgcolor: c.bgcolor,
                            classInfo: c
                        });
                    }
                }
            }
            return table;
        }
    },
    methods: {
        cross(a, b) {
            let temp = [];
            a.forEach(ia => {
                b.forEach(ib => {
                    temp.push([ia, ib])
                })
            });
            return temp;
        },
        range: (start, end, length = end - start) =>
            Array.from({length}, (_, i) => start + i)
        ,
        dateStr(date = null, offset = 0) {
            let temp;
            if (date === null) {
                temp = new Date(this.beginDate);
            } else {
                temp = date;
            }
            temp.setDate(temp.getDate() + offset);
            return `${temp.getMonth() + 1}.${temp.getDate()}`
        },
        initClassInfo() {
            const hex2rgb = (x) => {
                const hex2dec = (num) => {
                    num = num.toLowerCase();
                    let dict = "0123456789abcdef";
                    return dict.indexOf(num[0]) * 16 + dict.indexOf(num[1]);
                }
                x = x.replace("#", "").trim();
                return [
                    hex2dec(x.substr(0, 2)),
                    hex2dec(x.substr(2, 2)),
                    hex2dec(x.substr(4, 2)),
                ]
            }
            for (let i = 0; i < this.classes.length; i++) {
                this.classes[i].bgcolor = hex2rgb(base.theme.normal[i]);
                console.log("！！！！", base.theme.normal[i], this.classes[i].bgcolor);
            }
        },
        switchToWeek(week) {
            // if(week < 0 || week > nWeeks)
            this.cntWeekIndex = week;
        },
        switchNextWeek() {
            this.cntWeekIndex += 1;
        },
        switchPrevWeek() {
            this.cntWeekIndex -= 1;
        }
    },
    mounted() {
        this.initClassInfo();
        this.cntWeekIndex = 5;
        this.renderWeek();
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

.schedule-title {
    display: flex;
    width: 100%;
    height: 3em;
    padding-top: 0.5em;
    box-sizing: border-box;
}

.schedule-main {
    display: grid;
    width: 100%;
    height: calc(100% - 3em);
    grid-gap: 2px;
}
</style>
