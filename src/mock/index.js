const Mock = require("mockjs");

Mock.mock(/friend\/friendList/, 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return friendList
})

Mock.mock(/friend\/chatMsg/, 'post', (config) => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    let params = JSON.parse(config.body)
    if (params.frinedId == "1002")
        return chatMsg1002
    if (params.frinedId == "1003")
        return chatMsg1003
    if (params.frinedId == "1004")
        return chatMsg1004
})


let friendList = Mock.mock(
    [
        {
            img: "",
            name: "Bonaparte",
            detail: "Emperor of France",
            lastMsg: "to do",
            id: "1002",
            headImg: require("@/assets/img/head_portrait1.jpg"),

        },
        {
            img: "",
            name: "Eleanor Roosevelt",
            detail: "United States First lady",
            lastMsg: "dada dw ertgthy j uy",
            id: "1003",
            headImg: require("@/assets/img/head_portrait2.jpg"),

        },
        {
            img: "",
            name: "Hannibal",
            detail: "Highly intelligent criminal",
            lastMsg: "大萨达萨达所大大萨达",
            id: "1004",
            headImg: require("@/assets/img/head_portrait3.jpg"),

        },
    ]
)

let chatMsg1002 = Mock.mock(
    [
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "Napoléon Bonaparte",
            time: "09：12 AM",
            msg: "The stupid speak of the past, the wise of the present, and fools of the future.",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        },
    ]
)
let chatMsg1003 = Mock.mock(
    [
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "Eleanor Roosevelt",
            time: "09：12 AM",
            msg: "When you live your life well, it always results in a happy life",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        },
    ]
)
let chatMsg1004 = Mock.mock(
    [
        {
            headImg: require("@/assets/img/head_portrait.jpg"),
            name: "Hannibal",
            time: "09：12 AM",
            msg: "A Valentine written on a broken man.",
            chatType: 0, //信息类型，0文字，1图片
            uid: "1002", //uid
        },
    ]
)
