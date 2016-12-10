Page({
  data: {
    item: [
      {
        id: '1',
        name: '个性推荐',
        open: true,
      }, {
        id: '2',
        name: '歌单',
        open: false,
      }, {
        id: '3',
        name: '主播电台',
        open: false,
      }, {
        id: '4',
        name: '排行榜',
        open: false,
      }

    ],
    list:[
      {
        title:'推荐歌单',
        logo:'../image/recommend.jpg',
        class:'item',
        con:[
          {
            img:'../image/list1.jpg',
            text:'[小众华语]忘记你，不如忘记我自己'
          },
          {
            img:'../image/list2.jpg',
            text:'【电子 音瀑】魂灵飞升，破碎虚空 '
          }
          ,
          {
            img:'../image/list3.jpg',
            text:'【守望先锋】不定更新 '
          },
          {
            img:'../image/list4.jpg',
            text:'你知道思念一个人的滋味吗'
          },
          {
            img:'../image/list5.jpg',
            text:'好似轻轻的耳语，世界突然安静下来'
          },
          {
            img:'../image/list6.jpg',
            text:'【电子 音瀑】魂灵飞升，破碎虚空'
          }
        ]
      }
    ]
  },
  navClick:function(e){
    var item = this.data.item , id = e.target.id;
    console.log(this);
    for(var i = 0,len = item.length;i<len;i++){
      if( item[i].id == id ){
        item[i].open = true ;
      }else{
        item[i].open = false ;
      }
    }

    this.setData({
      item:item
    })

  }
});
