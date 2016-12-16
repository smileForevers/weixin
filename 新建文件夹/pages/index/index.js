//index.js
Page({
  onReady:function(){
      var context = wx.createContext();
      context.rect(55,0,200,200);
      context.stroke();
      context.translate(55,100);
      context.rotate(15*Math.PI/180);
      context.rect(55,0,200,200);
      context.stroke();
      context.rotate(15*Math.PI/180);
      context.rect(55,0,200,200);
      context.stroke();
      context.rotate(15*Math.PI/180);
      context.rect(55,0,200,200);
      context.stroke();
      wx.drawCanvas({
          canvasId: 'aa',
          actions: context.getActions()
      })
  }
})
