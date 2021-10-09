<template>
    <div class="schedule-container">
        <div class="schedule" style="width: 100%;"

        >
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
                    v-for="(item, index) in utils.cross(utils.range(1, days.length  + 1 ), utils.range(1, times.length + 1))"
                    :key="`empty${index}`"
                    :week-day="item[0]" :time="item[1]"
                    style="z-index: 10">
                </schedule-empty>
                <schedule-time
                    v-for="(item, index) in times" :key="`time-${index}`"
                    :from-time="index + 1" :to-time="index + 1" :text="item" :index="String(index + 1)"
                    border="1px dotted #DDD"
                    style="z-index: 20"
                >
                    <!--                    <schedule-time-->
                    <!--                        :weekIndex="cntWeekIndex" :month=""-->
                    <!--                        border="1px dotted #DDD"-->
                    <!--                    >-->
                </schedule-time>
                <schedule-item v-for="(item, index) in timetable" :key="`normal-${index}`"
                               :week-day="item.weekDay" :from-time="item.from" :to-time="item.to"
                               :bg-color="item.bgcolor" :class-info="item.classInfo"
                               style="z-index: 30"
                >
                </schedule-item>
                <schedule-empty
                    style="border: unset; background-color: unset; z-index: 40"
                    v-for="(item, index) in utils.cross(utils.range(1, days.length  + 1 ), utils.range(1, times.length + 1))"
                    :key="`cover${index}`"
                    :week-day="item[0]" :time="item[1]"
                    :clickinfo="[cntWeekIndex, item[0], item[1]]"
                    @touchstart.native="touchstart" @touchend.native="touchend"
                >
                    <!--                    @click.native="clickItem(cntWeekIndex, item[0], item[1])"-->
                </schedule-empty>
            </div>
        </div>
    </div>
</template>

<script>
import ScheduleItem from "@/components/ScheduleItem";
import ScheduleEmpty from "@/components/ScheduleEmpty";
import ScheduleTime from "@/components/ScheduleTime";
import config from "@/config";
import utils from "@/utils";

export default {
    name: "Schedule.vue",
    components: {
        ScheduleItem,
        ScheduleEmpty,
        ScheduleTime,
    },
    data() {
        return {
            utils,
            beginDate: config.beginDate,
            days: config.days,
            times: config.times,
            totalWeek: config.totalWeek,
            cntWeekIndex: 1,
            classes: config.schedule,
            config,
            startTouch: {
                x: 0,
                y: 0
            }
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
        dateStr: utils.dateStr,
        hex2dec: utils.hex2dec,
        hex2rgb: utils.hex2rgb,
        initClassInfo() {
            for (let i = 0; i < this.classes.length; i++) {
                this.classes[i].bgcolor = this.hex2rgb(config.theme.normal[i]);
            }
        },
        clickItem(week, day, time) {
            console.log(week, day, time);
            let ret = utils.getClassDetail(this.classes, week, day, time);
            let s = `选择的共 ${ret.length} 门课\n`;
            ret.forEach(item => {
                console.log(item.name);
                s += item.name + '\n';
            });
            alert(s);
            // alert(`${week} - ${day} - ${time}`);
        },
        touchstart(e) {
            // console.log("start", e);
            this.startTouch.x = e.touches[0].pageX;
            this.startTouch.y = e.touches[0].pageY;
        },
        touchend(e) {
            console.log("end", e);
            let dx = e.changedTouches[0].pageX - this.startTouch.x;
            let dy = e.changedTouches[0].pageY - this.startTouch.y;
            let deg = Math.atan2(dy, dx) / Math.PI * 180;
            // console.log(deg);
            const between = (a, b, x) => {
                // e.preventDefault();
                return a <= x && x <= b;
                // return false;
            }
            const abs = x => {
                return x > 0 ? x : -x;
            }
            let dir = "";
            if (abs(dx) <= 50 && abs(dy) <= 50) {
                let l = e.target.getAttribute("clickinfo").split(",").map(item => Number(item));
                let week = l[0];
                let day = l[1];
                let time = l[2];
                let ret = utils.getClassDetail(this.classes, week, day, time);
                let s = `点击了第${week}周，星期${day}，第${time}节课\n该时间共 ${ret.length} 门课\n`;
                ret.forEach(item => {
                    console.log(item.name);
                    s += item.name + '\n';
                });
                alert(s);
                // alert(`${week} - ${day} - ${time}`);
                return false;
            }
            if (between(-45, 45, deg) && abs(dx) >= 50) {
                dir = "R";
                this.switchPrevWeek();
            }
            if ((between(135, 180, deg) || between(-180, -135, deg)) && abs(dx) >= 50) {
                dir = "L";
                this.switchNextWeek();
            }
            if (between(-135, -45, deg) && abs(dy) >= 50) {
                dir = "T";
            }
            if (between(45, 135, deg) && abs(dy) >= 50) {
                dir = "B";
            }
            console.log(dir);
        },
        switchToWeek(week) {
            if (week <= 0 || week > this.totalWeek) {
                return;
            }
            this.cntWeekIndex = week;
        },
        switchNextWeek() {
            this.switchToWeek(this.cntWeekIndex + 1);
        },
        switchPrevWeek() {
            this.switchToWeek(this.cntWeekIndex - 1);
        }
    }
    ,
    mounted() {
        this.initClassInfo();
        this.cntWeekIndex = 5;
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
