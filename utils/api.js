import config from 'config.js'
var domain = config.getDomain;
//https://www.easyapi.com/api/?documentId=15509&themeId=&categoryId=28939

//产品订单管理



module.exports = { 
    getUrl: function (param){
        var url = domain + 'api?name=5' + param ;
        return url;
    }
}