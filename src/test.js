let test_real = [
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
];

let test_all = [
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 1, to: 3}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 1, to: 2}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 1, to: 2}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 1, to: 2}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 1, to: 2}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 3, to: 4}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 3, to: 4}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 3, to: 4}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 3, to: 4}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 3, to: 4}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 5, to: 6}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 5, to: 6}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 5, to: 6}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 5, to: 6}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 5, to: 6}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 7, to: 8}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 7, to: 8}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 7, to: 8}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 7, to: 8}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 7, to: 8}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 9, to: 10}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 9, to: 10}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 9, to: 10}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 9, to: 10}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 9, to: 10}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 1, time: {from: 11, to: 12}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 2, time: {from: 11, to: 12}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 3, time: {from: 11, to: 12}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 4, time: {from: 11, to: 12}}]},
    {name: "人工智能", teacher: "李钦策", place: "正心32", time: [{week: [1, 2, 3, 4, 5, 6, 7, 8, 9], day: 5, time: {from: 11, to: 12}}]},
];

export default {
    classes: test_real,
    test_real,
    test_all
}
