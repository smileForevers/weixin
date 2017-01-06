var util = require('../../util/util.js');
// console.log(util.footer)
Page({
  data: {
    footer:util.footer,
    open:false
  },
  onLoad: function (option) {
    // console.log(option)
    let that = this;
    util.navigator(option,that)
  },
  showIOSActionSheet:function(){
    console.log(1);
    this.setData({
      open:!this.data.open
    })
}



});
