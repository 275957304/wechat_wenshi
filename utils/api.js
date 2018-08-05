var wxRequest = require('wxRequest.js');
var domain = "https://www.idwenshi.com";
//https://www.easyapi.com/api/?documentId=15509&themeId=&categoryId=28939
//https://www.idwenshi.com/index.php/avenapi/Basicmanager/Getbasic


//基础管理
const getbasic = (params) => wxRequest.getRequest(domain + '/index.php/avenapi/Basicmanager/Getbasic', params );

//用户名及密码登录
const Login = (params) => wxRequest.postRequest(domain + '/index.php/avenapi/Login/Login', params);
//发送手机验证码
const Sendcode = (params) => wxRequest.postRequest(domain + '/index.php/avenapi/Login/Sendcode', params);
//手机号+验证码登录
const Mobilelogin = (params) => wxRequest.postRequest( domain + '/index.php/avenapi/Login/Mobilelogin', params);

module.exports = { 
    getbasic: getbasic,
    Login: Login,
    Sendcode: Sendcode,
    Mobilelogin: Mobilelogin
}

