// pages/home/home.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  onShow: function () {
    setTimeout(() => {
      wx.switchTab({
        url: '/pages/test/test',
      })
    },3000)
  },
})