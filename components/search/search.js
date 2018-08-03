const debounce = require("../../utils/util").debounce;
Component({    
    externalClasses: [''], //外部样式类
    created() {}, //组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
    ready() { }, //组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息
    properties: { //组件的对外属性 驼峰写法propertyName  wxml中  property-name
        placeholder: {
            type: String, //类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: '请输入搜索内容', // 属性初始值（可选），如果未指定则会根据类型选择一个
            observer(newVal, oldVal, changedPath) {
                // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
                // 通常 newVal 就是新设置的数据， oldVal 是旧数据
                // this.setData({placeholderVal: newVal});
            }
        }
    },
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    moved: function () { },
    detached: function () { },
    /// 私有数据，可用于模版渲染
    data: {
        inputVal: "",
    },
    methods : {
        onLoad: function () {
            console.log('搜索组件onLoad')
        },
        //内部方法建议以下划线开头
        //输入
        _inputTyping: function (e) {
            var val = e.detail.value;
            this.setData({
                inputVal: val
            });
            debounce(this.emit(val), 1000);
        },
        //通过triggerEvent来给父组件传递信息的  父组件可以通过 this.selectComponent 方法获取子组件实例对象
        emit : function(){
            var that = this,
                valData = that.data.inputVal;
            if (valData.length > 0) {
                this.triggerEvent('search', that.data.inputVal);
            } else {
                console.log('请输入搜索内容')
            }            
        },
        _inputSearch : function(){
            this.emit();                        
        }
    }
})