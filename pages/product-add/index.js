// pages/product-add/index.js
Page({
    data: {
        countries: ["中国", "美国", "英国"],
        countryIndex: 0,
    },
    bindCountryChange: function (e) {
        console.log('picker country 发生选择改变，携带值为', e.detail.value);

        this.setData({
            countryIndex: e.detail.value
        })
    },
})