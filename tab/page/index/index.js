const app = getApp()

Page({
  data: {
    // 轮播图数据
    background: ['../images/banner1.jpg', '../images/banner1.jpg', '../images/banner1.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular:true,
    interval: 2000,
    duration: 500,
    index:0,

    array:['不限','男','女'],//无用数据
    list: [//无用数据
      {name: '商品1', price: '￥100'},
      {name: '商品2', price: '￥100'},
      {name: '商品3', price: '￥100'}
    ],
    // 置顶用户数据
    top_user: [
      {top_user_url:'/navigate/navigate?title=navigate',top_user_logo: '../images/banner1.jpg', top_user_name: 'Scorpio',top_user_age:'26岁',top_user_city:'重庆',top_user_attention:'50000',},
      {top_user_url:'/navigate/navigate?title=navigate',top_user_logo: '../images/banner1.jpg', top_user_name: 'Scorpio',top_user_age:'26岁',top_user_city:'重庆',top_user_attention:'50000',},
      {top_user_url:'/navigate/navigate?title=navigate',top_user_logo: '../images/banner1.jpg', top_user_name: 'Scorpio',top_user_age:'26岁',top_user_city:'重庆',top_user_attention:'50000',},
    ],
    page_recommend: [
      {page_recommend_auth:['身份','车'],page_recommend_image:'../images/banner1.jpg',page_recommend_name:'Fred',page_recommend_expectation:'两年',page_recommend_title:['30岁','160cm','30W~50W'],page_recommend_city:'北京',page_recommend_info:'我，北京男孩（110108），英国留学硕士研究生我，北京男孩（110108），英国留学硕士研究生',page_recommend_infobtnitem:true},
      {page_recommend_auth:['身份','车'],page_recommend_image:'../images/banner1.jpg',page_recommend_name:'Fred',page_recommend_expectation:'两年',page_recommend_title:['30岁','160cm','30W~50W'],page_recommend_city:'北京',page_recommend_info:'我，北京男孩（110108），英国留学硕士研究生我，北京男孩（110108），英国留学硕士研究生',page_recommend_infobtnitem:true},
      {page_recommend_auth:['身份','车'],page_recommend_image:'../images/banner1.jpg',page_recommend_name:'Fred',page_recommend_expectation:'两年',page_recommend_title:['30岁','160cm','30W~50W'],page_recommend_city:'北京',page_recommend_info:'我，北京男孩（110108），英国留学硕士研究生我，北京男孩（110108），英国留学硕士研究生',page_recommend_infobtnitem:true},
    ]
  },
  onLoad: function () {
    // 使用  •  连接认证信息
    let page_recommend = this.data.page_recommend;
    page_recommend.forEach((element,index) => {
      // console.log(page_recommend[index].page_recommend_auth.join("·"));
      page_recommend[index].page_recommend_auth=page_recommend[index].page_recommend_auth.join(" • ");
    });
    this.setData({//设置修改信息
      page_recommend
    });
    // console.log(this.data.page_recommend);
    // console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    // console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html');
    let cache = wx.getStorageSync("_list");
    if(cache.length > 0) {
      wx.setTabBarBadge({
        index: 1,
        text: cache.length + "",
      })
    }
  },
  // 点击全文展开
  infobtn:function(e){
    let index = e.currentTarget.dataset.index;
    let page_recommend = this.data.page_recommend;
    page_recommend[index].page_recommend_infobtnitem=!page_recommend[index].page_recommend_infobtnitem,
    this.setData({//设置修改信息
      page_recommend
    });
  },

  addOrder: function (e) {
    let index = e.currentTarget.dataset.index;
    let item = this.data.list[index];
    let cache = wx.getStorageSync("_list") || [];
    cache.push(item);
    wx.setTabBarBadge({
      index: 1,
      text: cache.length + "",
    })
    wx.setStorage({
      key: '_list',
      data: cache,
    })
  }
})
