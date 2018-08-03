//index.js
//获取应用实例
const app = getApp();
var Api = require('../../utils/api.js');
Page({
    data: {
        placeholder:"请输入搜索内容",
    },   

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        /*
         * 获取系统信息
         */
        wx.getSystemInfo({
            success: function (res) {
                console.log(res)
                that.setData({
                    winWidth: res.windowWidth,
                    winHeight: res.windowHeight
                });
            }

        });

        var longs = Api.getbasic();
        longs.then(res =>{
            // if(res.data.code == '-3'){
            //     wx.navigateTo({
            //         url: "/pages/login/login"
            //     })
            // };
            console.log(res.data)
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    // 搜索
    handleSearch : function(e){
        console.log( e.detail )
    }
})