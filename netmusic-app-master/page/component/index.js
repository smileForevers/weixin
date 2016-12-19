var bsurl=require('../../utils/bsurl.js');
Page({
  data: {
    list: [],
    user: {}
  },
  onLoad: function (options) {
    var id=options.id||'177018'
    var that = this
    console.log(bsurl)
    wx.request({
      url: bsurl,
      success: function (res) {
        var playlist=res.data.jsonData.dataList
        that.setData({
          list: playlist
        })
      }
    });
  }
});
