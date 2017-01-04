var util = require('../../util/util.js');
// console.log(util.footer)
Page({
  data: {
    footer:util.footer,
    list:[
      '../../image/find/1.jpg',
      '../../image/find/2.jpg',
      '../../image/find/3.jpg',
      '../../image/find/1.jpg',
      '../../image/find/2.jpg',
      '../../image/find/3.jpg'
    ]
  },
  onLoad: function (option) {
    // console.log(option)
    let that = this;
    util.navigator(option,that)
  }




});
