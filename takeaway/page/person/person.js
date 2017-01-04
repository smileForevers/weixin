var util = require('../../util/util.js');
// console.log(util.footer)
Page({
  data: {
    footer:util.footer
  },
  onLoad: function (option) {
    // console.log(option)
    let that = this;
    util.navigator(option,that)
  }




});
