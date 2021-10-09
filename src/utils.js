export default {
    cross: (a, b) => {
        let temp = [];
        a.forEach(ia => {
            b.forEach(ib => {
                temp.push([ia, ib])
            })
        });
        return temp;
    },
    range: (start, end, length = end - start) => {
        return Array.from({length}, (_, i) => start + i);
    },
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
    hex2dec: function (num) {
        num = num.toLowerCase();
        let dict = "0123456789abcdef";
        return dict.indexOf(num[0]) * 16 + dict.indexOf(num[1]);
    },
    hex2rgb: function (x) {
        x = x.replace("#", "").trim();
        return [
            this.hex2dec(x.substr(0, 2)),
            this.hex2dec(x.substr(2, 2)),
            this.hex2dec(x.substr(4, 2)),
        ]
    },
    getClassDetail: function (schedule, week, day, time) {
        let ret = [];
        schedule.forEach(item => {
            let flag = 0;
            item.time.forEach(tm => {
                if (tm.week.indexOf(week) !== -1 && tm.day === day && tm.time.from <= time && tm.time.to >= time) {
                    flag = 1;
                }
            })
            if (flag) {
                console.log(item);
                ret.push(item);
            }
        })
        return ret;
    }
};
