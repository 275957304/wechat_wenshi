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

module.exports = {
  formatTime: formatTime,
  checkImgType: checkImgType,
}
