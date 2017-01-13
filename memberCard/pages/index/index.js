//index.js
//获取应用实例
const app = getApp()
const API_URL = "http://apicloud.mob.com/v1/cook/menu/search?name=%E7%BA%A2%E7%83%A7%E8%82%89&cid=0010001007&key=17113fceca309&size=20&page="
Page({
  data: {
    open:false,
    display:true,
    list:0,
    caiItems: [],
    loading: true,
    hasMore: false,
    page: 1,
    userInfo: {}
  },
  //事件处理函数
  catchCodeTap: function() {
    wx.navigateTo({
      url: '../code/code'
    })
  },
  bindHeadTap:function(){
    this.setData({
      open:false,
      display:true,
      list:0
    })
    wx.setNavigationBarTitle({
      title: "会员卡"
    })
  },
  bindListTap:function(event){
    this.setData({
      open:true
    })
    setTimeout(()=>{
      this.setData({
        display:false,
        list:event.currentTarget.id
      })
    },1000)
    wx.setNavigationBarTitle({
      title: event.currentTarget.dataset.tit
    })

  },
  //list
  onPullDownRefresh: function(){
    if(this.data.list == 2){
      console.log('re')
    }
  },
  onShow: function() {
    wx.getSystemInfo({
      success:(res)=>{
        this.setData( {
          windowHeight: res.windowHeight
        })
      }
    })
  },
  pullUpLoad:function () {

    this.setData({page: this.data.page + 1})

    console.log("上拉拉加载更多...." + this.data.page)

    this.getDataFromServer(this.data.page)
  },
  getDataFromServer: function (page) {
    this.setData({
      loading: false,
      hasMore: true
    })
    //调用网络请求
    app.httpClient(API_URL + page, (error, data) => {

      if (data.retCode == 200) {

      this.setData({caiItems: data.result.list, loading: true, hasMore: false})

    } else {
      console.log("服务器异常")
    }

  })
  },
  onLoad: function () {
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    this.getDataFromServer(this.data.page)
  }
})
