// pages/login/login.js
Page({
    data: {
        loginSelect: true,
        gary:'color:#fcfcfc;background:#e5e5e5',
        red: 'color:#fcfcfc;background:#ec3573;border:2rpx solid #ba2d5d;',
        userStatus : {
            btnStyle: '',
            loading: false,            
            disabled: true,
        },
        username:'',
        password:'',
        mobile:'',
        code:'',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    onReady: function () {
        this.setData({userStatus: {btnStyle: this.data.gary}})
    },
    bindName : function(e){
        this.setData({
            username: e.detail.value
        });
        this.isDisabled();
    },
    bindPassword: function (e) {
        this.setData({
            password: e.detail.value
        });
        this.isDisabled();
    },
    isDisabled : function(){
        var that = this;
        if (this.data.username != '' && this.data.password){
            this.setData({
                userStatus : {
                    disabled: false,
                    btnStyle: that.data.red
                }                
            })
        }else{
            this.setData({
                userStatus: {
                    disabled: true,
                    btnStyle: that.data.gary
                }                
            })
        }
    },
    userLogin :function(e){
        console.log(e.detail.value)
    },
    mobileLogin : function(e){
        console.log('手机登录')
    },
    tabLogin : function(){
        this.setData({
            loginSelect: !this.data.loginSelect           
        })
    }
})