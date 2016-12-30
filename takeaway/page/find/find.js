var util = require('../../util/util.js');
// console.log(util.footer)
Page({
  data: {
    footer:util.footer
  },
  onLoad: function () {
    util.canvas();
    let footer = util.clickTab(this.data.footer,2);
    this.setData({
      footer:footer
    })
  }




});
