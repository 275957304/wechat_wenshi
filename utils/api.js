var wxRequest = require('wxRequest.js');
var domain = "https://www.idwenshi.com";
//https://www.easyapi.com/api/?documentId=15509&themeId=&categoryId=28939
//https://www.idwenshi.com/index.php/avenapi/Basicmanager/Getbasic


//基础管理
const getbasic = (params) => wxRequest.getRequest(domain + '/index.php/avenapi/Basicmanager/Getbasic', params );
module.exports = { 
    // getUrl: function (param){
    //     var url = domain + 'api?name=5' + param ;
    //     return url;
    // },    
    getbasic: getbasic
}

