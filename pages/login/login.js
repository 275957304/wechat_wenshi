// pages/login/login.
var Api = require('../../utils/api.js');
var Util = require('../../utils/util.js');
Page({
    data: {
        loginSelect: true,
        obtain:true,
        time:60,
        userStatus : {
            loading: false,            
            disabled: true,
        },
        mobileStatus:{
            loading: false,
            disabled: true,
        },
        username:'',
        password:'',
        mobile:'',
        code:'',
        isCode : false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    onReady: function () {
        
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
    bindMobile:function(e){
        var getVal = e.detail.value;
        if (Util.vailPhone(getVal)){
            this.setData({
                mobile: getVal,
                isCode : true
            });
        }
    },
    bindCode:function(e){
        var getVal = e.detail.value;
        if(getVal != '' && this.data.isCode ){
            this.setData({
                code: getVal,
                mobileStatus: {
                    disabled: false
                }
            });
        }
    },
    isDisabled : function(){
        if (this.data.username != '' && this.data.password){
            this.setData({
                userStatus : {
                    disabled: false
                }                
            })
        }else{
            this.setData({
                userStatus: {
                    disabled: true
                }                
            })
        }
    },
    //用户名及密码登录
    userLogin :function(e){
        var getVal = e.detail.value;
        var login = Api.Login({ username: getVal.username, password: getVal.password});
        login.then(res => {
            console.log(res.data);
            wx.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 1000
            })
        })
    },
    //获取
    obtainCode:function(){
        var getMobile = this.data.mobile;
        if ( Util.vailPhone(getMobile) ){
            Api.Sendcode({ moblie: getMobile }).then(res => {
                console.log(res.data);
            });
            this.setData({
                obtain : false
            });
            this.setTimes();
        }else{
            wx.showToast({
                title: '手机号码不正确',
                icon: 'none',
                duration: 1000
            })
        }
    },
    setTimes: function () {
        var that = this,
            ts = this.data.time;
        if(ts == 0){
            this.setData({
                time : 60,
                obtain : true
            })
            return
        }
        setTimeout(function () {
            that.setData({
                time: --ts
            })
            that.setTimes();
        }, 1000);
    },
    mobileLogin : function(e){
        var getVal = e.detail.value;
        Api.Mobilelogin({ mobile: getVal.mobile, code:getVal.code }).then(res => {
            console.log(res.data);
        });
    },
    tabLogin : function(){
        this.setData({
            loginSelect: !this.data.loginSelect           
        })
    }
})