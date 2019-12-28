// miniprogram/pages/manaPage/manaPage.js
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userName: '',
        isStudent: '',
        userPassword: '',
        userNumber: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //获取变量数据
        this.updateData();

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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

    },

    updateData: function () {
        this.setData({
            isStudent: app.globalData.isStudent,
            userName: app.globalData.userName,
            userNumber: app.globalData.userNumber,
            userPassword: app.globalData.userPassword

        })
        console.log(this.data)
    },
    toStuInfoManaSys: function () {
        wx.navigateTo({
            url: '../stuInfoManaSys/stuInfoManaSys',
        })

    },
    toStuSIQuerySys: function () {
        wx.navigateTo({
            url: '../stuPage/stuPage',
        })

    }
})