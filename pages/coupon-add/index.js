Page({
    data: {
        countries: ["满减 ", "抵扣"],
        countryIndex: 0,
        range: ["商品 ", "服务"],
        rangeIndex: 0,
        startDate: '2016-09-01',
        endDate: '2016-09-01',
    },
    bindStartDate: function (e) {
        this.setData({
            startDate: e.detail.value
        })
    },
    bindEndDate: function (e) {
        this.setData({
            endDate: e.detail.value
        })
    }
})
