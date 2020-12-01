// pages/01-compareVersion/01-compareVersion.js
import Tool from '../../common/Tool'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   *  getSystemInfoSync() 获取当前小程序基础库版本
   *  Tool.compareVersion() 版本对比
   */
  onLoad: function (options) {
    console.log(options);
    const {
      SDKVersion
    } = wx.getSystemInfoSync()
    console.log('SDKVersion', SDKVersion)
    const compareRes = Tool.compareVersion(SDKVersion, '1.9.9')
    console.log('compareRes', compareRes)
  },

})