//canvas
function canvas (){
  const ctx = wx.createCanvasContext('myCanvas')
  // console.log(ctx);
  ctx.arc(26, 30, 30, 0, 2 * Math.PI)
  ctx.setFillStyle('#ffffff')
  ctx.fill()
  ctx.closePath()
  ctx.beginPath()
  ctx.arc(26, 30, 26, 0, 2 * Math.PI)
  ctx.setFillStyle('#fa6175')
  ctx.fill()
  ctx.closePath()
  ctx.draw()
}
function canvasArc (canvas){
  for(let i=0;i<canvas.length;i++){
      const ctx = wx.createCanvasContext(canvas[i].id)
      console.log(ctx);
      ctx.arc(6, 6, 4, 0, 2 * Math.PI)
      ctx.setStrokeStyle(canvas[i].color)
      ctx.setLineWidth(2)
      ctx.stroke()
      ctx.draw()
  }
}


//tab切换
function clickTab(item,id){
  for(var i = 0,len = item.length;i<len;i++){
    if( item[i].id != id ){
      item[i].open = false ;
    }else{
      item[i].open = true ;
    }
  }
  return item
}
//footer 数据
function footer(){
  return [
    {
      id:1,
      image:"/image/index.jpg",
      imageActive:"/image/index_active.jpg",
      text:"首页",
      class:"item",
      url:"../index/index?id=1",
      open:true
    },
    {
      id:2,
      image:"/image/find.jpg",
      imageActive:"/image/find_active.jpg",
      text:"发现",
      class:"item",
      url:"../find/find?id=2",
      open:false
    },
    {
      id:3,
      image:"/image/photo.jpg",
      text:"",
      class:"item-center",
      open:false
    },
    {
      id:4,
      image:"/image/notice.jpg",
      imageActive:"/image/notice_active.jpg",
      text:"消息",
      class:"item",
      url:"../notice/notice?id=4",
      open:false
    },
    {
      id:5,
      image:"/image/person.jpg",
      imageActive:"/image/person_active.jpg",
      text:"我的",
      class:"item",
      url:"../person/person?id=5",
      open:false
    }
  ]
}
//footer  跳转
function navigator (option,that){
  canvas();
  let footer = clickTab(that.data.footer,option.id);
  that.setData({
    footer:footer
  })
}




//输出
module.exports = {
  footer:footer(),
  canvas:canvas,
  canvasArc:canvasArc,
  clickTab:clickTab,
  navigator:navigator
}
