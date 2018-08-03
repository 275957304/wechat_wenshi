Component({    
    externalClasses: [''], //外部样式类
    created() {},
    ready() { },
    properties: {
        badgeVal: {
            type: Array,
            value: [], 
            observer(newVal, oldVal, changedPath) {
            }
        }
    },
    data:{

    },
    methods : {
        badgeDele : function(e){
            this.properties.badgeVal.splice(e.currentTarget.dataset.id, 1);
            this.triggerEvent( 'badge', this.properties.badgeVal );
        }
    }
})