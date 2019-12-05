//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    key: 'tab1',
    key2: 'tab1'
  },
  onChangeTab (event) {
    this.setData({key: event.detail.key})
  },
  onChangeTab2 (event) {
    this.setData({key2: event.detail.key})
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
  }
})
