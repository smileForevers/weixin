function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}
//footer
function footer(){
  return [
    {
      id:1,
      image:"../image/index.jpg",
      imageActive:"../image/index_active.jpg",
      text:"首页",
      class:"item",
      on:true
    },
    {
      id:2,
      image:"../image/find.jpg",
      imageActive:"../image/find-active.jpg",
      text:"发现",
      class:"item",
      on:false
    },
    {
      id:3,
      image:"../image/index.jpg",
      text:"",
      class:"item-center",
      on:false
    },
    {
      id:4,
      image:"../image/notice.jpg",
      imageActive:"../image/index-active.jpg",
      text:"消息",
      class:"item",
      on:false
    },
    {
      id:5,
      image:"../image/person.jpg",
      text:"我的",
      class:"item",
      on:false
    }
  ]
}
module.exports = {
  footer:footer(),
  formatTime: formatTime
}
