var config = require('../../utils/config.js');

Page({
    data: {
        downIcon: config.downIcon,
        imgUrls: [
            'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        indicatorDots: true,
        autoplay: false,
        interval: 5000,
        duration: 1000
    },
    onLoad : function(){
        
    },
    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    },
    //下架
    obtained : function(){
        console.log('下架');
    },
    //取消分享获利
    cancelShear: function () {
        console.log('取消分享获利');
    },
    //编辑
    edit: function () {
        var id = '1000'
        wx.navigateTo({
            url: "/pages/product-edit/index?id=" + id
        })
    },
    //删除
    delete: function () {
        console.log('删除');
    }
})