const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/* 
* 判断图片类型 
*/
function checkImgType(filePath) {
    if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(filePath)) {
        return false;
    }
    else {
        return true;
    }
}

// 防抖
const debounce = function (fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

//验证是否是手机号码
function vailPhone(number) {
    let flag = false;
    let myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (number.length != 11) {
        flag = flag;
    } else if (!myreg.test(number)) {
        flag = flag;
    } else {
        flag = true;
    }
    return flag;
}
// 遍历对象属性和值
function displayProp(obj) {
    var names = "";
    for (var name in obj) {
        names += name + obj[name];
    }
    return names;
}

// 去除字符串所有空格
function sTrim(text) {
    return text.replace(/\s/ig, '')
}

//浮点型乘法
function mul(a, b) {
    var c = 0,
        d = a.toString(),
        e = b.toString();
    try {
        c += d.split(".")[1].length;
    } catch (f) { }
    try {
        c += e.split(".")[1].length;
    } catch (f) { }
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

module.exports = {
    formatTime: formatTime,
    checkImgType: checkImgType,
    debounce: debounce,
    vailPhone: vailPhone,
    displayProp: displayProp,
    sTrim: sTrim
}
