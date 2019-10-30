//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {

  },

  bindStatus(e){
    console.log('e',e);
    var type=e.currentTarget.dataset.type;
    var types = encodeURIComponent(JSON.stringify(type));
    wx.navigateTo({
      url: '../map/map?types=' + types,
    })
  },

  bindDesc(){
    wx.navigateTo({
      url: '../desc/desc'
    })
  }
})
