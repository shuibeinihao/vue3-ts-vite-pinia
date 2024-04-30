//index.js
//获取应用实例
var util = require('../../utils/util.js')
Page({
  data: {
    background: ['bg-01', 'bg-02', 'bg-03'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    news:[]
  },
  onLoad: function () {
		this.getData();
	},
	getData:function(){
		const info = util.getData().data
		this.setData({
			news:info
		});
	},
  lower: function () {
    wx.showNavigationBarLoading();
    var that = this;
    setTimeout(function(){wx.hideNavigationBarLoading();that.nextLoad();}, 1000);
  },
  nextLoad: function(){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 4000
    })
    var next = util.getData();
    var next_data = next.data;
    this.setData({
      news: this.data.news.concat(next_data),
    });
    setTimeout(function(){
      wx.showToast({
        title: '加载成功',
        icon: 'success',
        duration: 2000
      })
    },3000)
  },
  // 转发至朋友圈
  onShareTimeline:function(){
    return {
      title:"EHS隐患上报首页"
    }
  },
  // 发送给朋友
  onShareAppMessage:function(){
    return {
      title:"EHS隐患上报首页",
      path:"pages/index/index"
    }
  },
})
