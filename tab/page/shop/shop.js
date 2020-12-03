// shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  onShow: function () {
    let cache = wx.getStorageSync("_list");
    this.setData({
      list: cache
    })
    if(cache.length > 0) {
      wx.setTabBarBadge({
        index: 1,
        text: cache.length + "",
      })
    }
  },
  delOrder: function (e) {
    let index = e.currentTarget.dataset.index;
    let list = this.data.list;
    list.splice(index, 1)
    this.setData({
      list
    })
    wx.setStorage({
      key: '_list',
      data: list,
    })
    wx.setTabBarBadge({
      index: 1,
      text: '' + list.length,
    })
  }
  
})