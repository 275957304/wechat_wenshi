import config from 'config.js'
var domain = config.getDomain;

module.exports = { 
    getUrl: function (param){
        var url = domain + 'api?name=5' + param ;
        return url;
    }
}