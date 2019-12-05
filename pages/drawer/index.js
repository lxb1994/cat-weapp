//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    leftShow: false,
    rightShow: false,
    topShow: false,
    bottomShow: false,
    noCloseShow: false
  },
  handleClick(event) {
    let data = {}
    data[`${event.currentTarget.dataset.mode}Show`] = true
    this.setData(data)
  },
  handleClose(event) {
    let data = {}
    data[`${event.currentTarget.dataset.mode}Show`] = false
    this.setData(data)
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
  }
})
