//app.js
const hostUrl = require('./config').hostUrl;
App({
  onLaunch: function () {
  },
  createUrl: function (api) {
    return hostUrl + api;
  },
  globalData: {
    
  }
})