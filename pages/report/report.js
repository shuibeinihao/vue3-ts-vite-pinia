// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    formData: {
      tenantName: "",
      baseName: ""
    },
    array: ['美国', '中国', '巴西', '日本'],
  },

  formSetData: function (e) {
    this.setData({
      "formData.tenantName": e.detail.value
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      "formData.baseName": this.data.array[e.detail.value]
    })
    console.log(e);
  },
  chooseImage() {
    var that = this;
    wx.chooseImage({
      count: 3 - that.data.addedCount,
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          images: that.data.images.concat(res.tempFilePaths),
          addedCount: that.data.addedCount + res.tempFilePaths.length,
        });
      }
    })
  },
  // 删除图片
  deleteImage(e) {
    this.data.images.splice(e.detail, 1)
    this.setData({
      images: this.data.images,
      addedCount: this.data.addedCount - 1
    })
  },
  formSubmit: function (e) {
    console.log('formData', this.data.formData);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})