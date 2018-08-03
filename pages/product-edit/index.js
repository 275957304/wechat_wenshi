
Page({
    data: {
        setProductStyle:'',
        pStyle: ['橘红','俄罗斯红','经典红','暗红色'],
      files:[]
    },

    //设置产品款式
    addStyle:function(){
        var style = this.data.setProductStyle,
            styleArr = this.data.pStyle;
        if (style != ''){
            styleArr.push(style);
            this.setData({
                pStyle: styleArr,
                setProductStyle : ''
            })
        }
    },
    bindBadge:function(e){
        this.setData({
            pStyle: e.detail
        })
    },
    productStyle : function(e){
        this.setData({
            setProductStyle: e.detail.value
        })
    },
    //上传图片
    chooseImage: function (e) {
      var that = this;
      wx.chooseImage({
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          that.setData({
            files: that.data.files.concat(res.tempFilePaths)
          });
        }
      })
    },
    previewImage: function (e) {
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.data.files // 需要预览的图片http链接列表
      })
    }

})