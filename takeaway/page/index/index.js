var util = require('../../util/util.js');
// console.log(util.footer)
Page({
  data: {
      indicatorDots: false,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1200,
      banner:[
          {
              id:'pic1',
              src:'/image/index/banner1.jpg',
              url:''
          },
          {
              id:'pic2',
              src:'/image/index/banner2.jpg',
              url:''

          },
          {
              id:'pic3',
              src:'/image/index/banner3.jpg',
              url:''
          },
          {
              id:'pic4',
              src:'/image/index/banner4.jpg',
              url:''
          }
      ],
      on:'1',
      item:[
          {
            id: '1',
            name: '推荐',
            open: true
          }, {
            id: '2',
            name: '热门',
            open: false,
          }, {
            id: '3',
            name: '最新',
            open: false
          }
        ],
      // canvasArc:[
      //   {
      //     id:'canvasCon',
      //     color:'#fa6175'
      //   },{
      //     id:'canvasCon2',
      //     color:'#00b7f0'
      //   }
      // ],
      recommend: [
      {
        tag:'#fa6175',
        image:'../../image/index/rank_logo.jpg',
        name:'巷子里的猫',
        time:'5分钟前',
        con_tit:'草莓奶油蛋糕',
        canvas_id:'recommend0',
        canvas_botid:'recommend_bot0',
        canvas_text:'心得',
        canvas_color:'#fa6175',
        con_img:['../../image/index/rank_con.jpg','../../image/index/rank_con2.jpg','../../image/index/rank_con3.jpg'],
        text:'在自家阳台专门划出一小部分空间作为“烘焙区”，每逢周末，我都亲手做一份蛋糕或甜点。“因为自己烘焙的蛋糕倾注了感情，所以更有意义。',
        friend:['../../../image/index/rank_f.jpg','../../image/index/rank_f2.jpg','../../image/index/rank_f3.jpg','../../image/index/rank_f4.jpg'],
        see_img:'../../image/index/see.jpg',
        see_num:'6823',
        bottom:[{
          img:'../../image/index/save.jpg',
          txt:'312'
        },
          {
            img:'../../image/index/love.jpg',
            txt:'675'
          },
          {
            img:'../../image/index/comment.jpg',
            txt:'65'
          }
        ]
      },
      {
        tag:'#00b7f0',
        image:'../../image/index/rank_logo2.jpg',
        name:'梨子酱',
        time:'20分钟前',
        con_tit:'第一次做',
        canvas_id:'recommend1',
        canvas_botid:'recommend_bot1',
        canvas_text:'创作',
        canvas_color:'#00b7f0',
        con_img:['../../image/index/rank_con4.jpg','../../image/index/rank_con5.jpg','../../image/index/rank_con6.jpg'],
        text:'在自家阳台专门划出一小部分空间作为“烘焙区”，每逢周末，我都亲手做一份蛋糕或甜点。“因为自己烘焙的蛋糕倾注了感情，所以更有意义。',
        friend:['../../image/index/rank_f.jpg','../../image/index/rank_f2.jpg','../../image/index/rank_f3.jpg','../../image/index/rank_f4.jpg'],
        see_img:'../../image/index/see.jpg',
        see_num:'7861',
        bottom:[{
          img:'../../image/index/save.jpg',
          txt:'456'
        },
          {
            img:'../../image/index/love.jpg',
            txt:'547'
          },
          {
            img:'../../image/index/comment.jpg',
            txt:'24'
          }
        ]
      }
    ],
      hot: [
      {
        tag:'#00b7f0',
        image:'../../image/index/rank_logo2.jpg',
        name:'梨子酱',
        time:'20分钟前',
        con_tit:'第一次做',
        canvas_id:'hot0',
        canvas_botid:'hot_bot0',
        canvas_text:'创作',
        canvas_color:'#00b7f0',
        con_img:['../../image/index/rank_con4.jpg','../../image/index/rank_con5.jpg','../../image/index/rank_con6.jpg'],
        text:'在自家阳台专门划出一小部分空间作为“烘焙区”，每逢周末，我都亲手做一份蛋糕或甜点。“因为自己烘焙的蛋糕倾注了感情，所以更有意义。',
        friend:['../../image/index/rank_f.jpg','../../image/index/rank_f2.jpg','../../image/index/rank_f3.jpg','../../image/index/rank_f4.jpg'],
        see_img:'../../image/index/see.jpg',
        see_num:'7861',
        bottom:[{
          img:'../../image/index/save.jpg',
          txt:'456'
        },
          {
            img:'../../image/index/love.jpg',
            txt:'547'
          },
          {
            img:'../../image/index/comment.jpg',
            txt:'24'
          }
        ]
      },
      {
          tag:'#fa6175',
          image:'../../image/index/rank_logo.jpg',
          name:'巷子里的猫',
          time:'5分钟前',
          con_tit:'草莓奶油蛋糕',
          canvas_id:'hot1',
        canvas_botid:'hot_bot1',
          canvas_text:'心得',
          canvas_color:'#fa6175',
          con_img:['../../image/index/rank_con.jpg','../../image/index/rank_con2.jpg','../../image/index/rank_con3.jpg'],
          text:'在自家阳台专门划出一小部分空间作为“烘焙区”，每逢周末，我都亲手做一份蛋糕或甜点。“因为自己烘焙的蛋糕倾注了感情，所以更有意义。',
          friend:['../../image/index/rank_f.jpg','../../image/index/rank_f2.jpg','../../image/index/rank_f3.jpg','../../image/index/rank_f4.jpg'],
          see_img:'../../image/index/see.jpg',
          see_num:'6823',
          bottom:[{
            img:'../../image/index/save.jpg',
            txt:'312'
          },
            {
              img:'../../image/index/love.jpg',
              txt:'675'
            },
            {
              img:'../../image/index/comment.jpg',
              txt:'65'
            }
          ]
        }
    ],
      new: [
      {
        tag:'#9933FF',
        image:'../../image/index/rank_logo.jpg',
        name:'美食分享',
        time:'15分钟前',
        con_tit:'草莓奶油蛋糕',
        canvas_id:'new0',
        canvas_botid:'new_bot0',
        canvas_text:'分享',
        canvas_color:'#fa6175',
        con_img:['../../image/index/rank_con7.jpg','../../image/index/rank_con8.jpg','../../image/index/rank_con4.jpg'],
        text:'在自家阳台专门划出一小部分空间作为“烘焙区”，每逢周末，我都亲手做一份蛋糕或甜点。“因为自己烘焙的蛋糕倾注了感情，所以更有意义。',
        friend:['../../image/index/rank_f.jpg','../../image/index/rank_f2.jpg','../../image/index/rank_f3.jpg','../../image/index/rank_f4.jpg'],
        see_img:'../../image/index/see.jpg',
        see_num:'6823',
        bottom:[{
          img:'../../image/index/save.jpg',
          txt:'312'
        },
          {
            img:'../../image/index/love.jpg',
            txt:'675'
          },
          {
            img:'../../image/index/comment.jpg',
            txt:'65'
          }
        ]
      },
      {
        tag:'#00b7f0',
        image:'../../image/index/rank_logo2.jpg',
        name:'蓝莓慕斯',
        time:'20分钟前',
        con_tit:'第一次做',
        canvas_id:'new1',
        canvas_botid:'new_bot1',
        canvas_text:'创作',
        canvas_color:'#00b7f0',
        con_img:['../../image/index/rank_con4.jpg','../../image/index/rank_con5.jpg','../../image/index/rank_con6.jpg'],
        text:'在自家阳台专门划出一小部分空间作为“烘焙区”，每逢周末，我都亲手做一份蛋糕或甜点。“因为自己烘焙的蛋糕倾注了感情，所以更有意义。',
        friend:['../../image/index/rank_f.jpg','../../image/index/rank_f2.jpg','../../image/index/rank_f3.jpg','../../image/index/rank_f4.jpg'],
        see_img:'../../image/index/see.jpg',
        see_num:'7861',
        bottom:[{
          img:'../../image/index/save.jpg',
          txt:'456'
        },
          {
            img:'../../image/index/love.jpg',
            txt:'547'
          },
          {
            img:'../../image/index/comment.jpg',
            txt:'24'
          }
        ]
      }
    ],
      footer:util.footer,

  },
  navClick:function(e){
    var item = this.data.item , id = e.currentTarget.id;
    item = util.clickTab(item,id);
    this.setData({
      item:item,
      on:id
    })
    this.fn(this.data.recommend);
    this.fn(this.data.hot);
    this.fn(this.data.new);
  },
  footerClick:function (e){
    var footer = this.data.footer , id = e.currentTarget.id;
    footer = util.clickTab(footer,id);
    this.setData({
      footer:footer
    })
  },
  line:function (id) {
    const ctx = wx.createCanvasContext(id)
    ctx.setLineWidth(20)
    ctx.setStrokeStyle("#fa6175")
    ctx.setLineCap('round')
    ctx.moveTo(10,10)
    ctx.lineTo(44, 10)
    ctx.stroke()
    ctx.setFontSize(12)
    ctx.setFillStyle('#ffffff')
    ctx.fillText('请教Ta', 10, 14)
    ctx.draw()
  },
  onLoad: function () {
    util.canvas();
    this.fn(this.data.recommend);
    this.fn(this.data.hot);
    this.fn(this.data.new);
  },
  fn:function(data){
    let canvasArc = [];
    for(let i=0;i<data.length;i++){
      canvasArc[i] = {};
      canvasArc[i].id = data[i].canvas_id;
      canvasArc[i].color = data[i].tag;
      this.line(data[i].canvas_botid)
    }
    util.canvasArc(canvasArc);
  }


});
