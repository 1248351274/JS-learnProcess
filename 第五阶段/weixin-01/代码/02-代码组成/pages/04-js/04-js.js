// pages/04-js/04-js.js
import Ball from './Ball'

const msg='1';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //选择器
    const query = wx.createSelectorQuery()
    //请求真正的canvas
    query.select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        //真正的canvas 画布
        const canvas = res[0].node
        //画笔
        const ctx = canvas.getContext('2d')
        //像素适配
        const dpr = wx.getSystemInfoSync().pixelRatio //2
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)
        
        // ctx.fillRect(0, 0, 100, 100)
        const ball=new Ball();
        ball.x=200;
        ball.y=200;
        ball.draw(ctx);

        const {width,height}=res[0]
        let vy=1
        let ay=0.1
        let bounce=0.9
        setInterval(function(){
          ctx.clearRect(0,0,width,height)
          vy+=ay
          ball.y+=vy
          if(ball.y>height-ball.r){
            ball.y=height-ball.r
            vy*=-bounce
          }
          ball.draw(ctx)
        },17)

      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})