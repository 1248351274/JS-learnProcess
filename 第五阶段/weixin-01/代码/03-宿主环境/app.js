//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // onShow(){
  //   console.log('前台状态');
    
  // },
  // onHide(){
  //   console.log('后台状态');
    
  // },
  // onError(){

  // },

  // onLaunch: function () {
  //   console.log('App onLaunch');
  
  // },
  
  // onShow:function (){
  //   console.log('App onShow');
  
  // },
  
  // onHide:function(){
  //   console.log('App onHide');
  
  // },
  onError:function(){
    console.log('App onError');
  
  },
  onLaunch: function () {
    console.log('App onLaunch');
  },

  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log("test1 onLoad");
   },
   onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log("test1 onReady");
   },
   onShow:function(){
    // 生命周期函数--监听页面显示
    console.log("test1 onShow");
   },
   onHide:function(){
    // 生命周期函数--监听页面隐藏
     console.log("test1 onHide");
   },
   onUnload:function(){
    // 生命周期函数--监听页面卸载
     console.log("test1 onUnload");
   },
   onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
     console.log("test1 onPullDownRefresh");
   },
   onReachBottom: function() {
    // 页面上拉触底事件的处理函数
     console.log("test1 onReachBottom");
   },
  
  globalData: {
    userInfo: null,
    motto:'好好学习，天天上上！'
  }
})