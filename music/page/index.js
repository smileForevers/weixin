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
      },
        {
            title:'独家放送',
            logo:'../image/music.jpg',
            class:'bigitem',
            con:[
                {
                    img:'../image/biglist1.jpg',
                    text:'音乐专栏 蓝莓之夜：打开心门，扔掉钥匙'
                },
                {
                    img:'../image/biglist2.jpg',
                    text:'充豪华会员 赢天籁之战入场券 '
                }
                ,
                {
                    class:'big-pic',
                    img:'../image/biglist3.jpg',
                    text:'福利优选：口袋音符篇--入耳式耳机集结号 '
                }
            ]
        } ,
        {
            title:'最新音乐',
            logo:'../image/new.jpg',
            class:'item',
            con:[
                {
                    img:'../image/list7.jpg',
                    text:'[小众华语]忘记你，不如忘记我自己'
                },
                {
                    img:'../image/list8.jpg',
                    text:'【电子 音瀑】魂灵飞升，破碎虚空 '
                }
                ,
                {
                    img:'../image/list9.jpg',
                    text:'【守望先锋】不定更新 '
                },
                {
                    img:'../image/list10.jpg',
                    text:'你知道思念一个人的滋味吗'
                },
                {
                    img:'../image/list11.jpg',
                    text:'好似轻轻的耳语，世界突然安静下来'
                },
                {
                    img:'../image/list12.jpg',
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
