// pages/service-edit/index.js
Page({
    data: {
        setExpert :'姚一',
        expert: ['谭集务', '郑春踩', '叶冬冬', '陈凯'],
    },
    //专家
    addExpert: function () {
        var style = this.data.setExpert,
            styleArr = this.data.expert;
        if (style != '') {
            styleArr.push(style);
            this.setData({
                expert: styleArr,
                setExpert: ''
            })
        }
    },
    bindBadge: function (e) {
        this.setData({
            expert: e.detail
        })
    },
    expertName: function (e) {
        this.setData({
            setExpert: e.detail.value
        })
    },
})