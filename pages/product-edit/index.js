
Page({
    data: {
        setProductStyle:'',
        pStyle: ['橘红','俄罗斯红','经典红','暗红色']
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
    }
})