//app.js
App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })

        // 获取用户信息
        wx.getSetting({
            success: res => {
            if (res.authSetting['scope.userInfo']) {
                // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                wx.getUserInfo({
                success: res => {
                    // 可以将 res 发送给后台解码出 unionId
                    this.globalData.userInfo = res.userInfo

                    // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                    // 所以此处加入 callback 以防止这种情况
                    if (this.userInfoReadyCallback) {
                    this.userInfoReadyCallback(res)
                    }
                }
                })
            }
            }
        })

        // 判断是否登录
        let token = wx.getStorageSync('token');
        if (!token) {        
            this.goLoginTime()
            return
        }
    },
    globalData: {
        userInfo: null
    },
    goLoginTime: function () {
        setTimeout(function () {
            console.log('去登录');
            // wx.navigateTo({
            //     url: "/pages/login/index"
            // })
        }, 1000)
    }
})

//https://github.com/Tencent/weui-wxss
//https://www.xiaopiu.com/h5/byId?id=5b1dcc777619de17aefee586&type=project&activePage=7
//https://github.com/EastWorld/wechat-app-mall
//https://developers.weixin.qq.com/miniprogram/dev/component/