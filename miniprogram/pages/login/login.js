// miniprogram/pages/login/login.js
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userNumber: '',
        userPassword: '',
        isStudent: '',
        userName: '',
        right: false,
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

    login: function () {

        setTimeout(() => {
            this.updateData();
        }, 500);

        const db = wx.cloud.database();
        var that = this;
        db.collection("T_userI").where({
            userNumber: that.data.userNumber,
            // userPassword: that.data.userPassword,
        }).get({
            success: res => {
                // console.log(res.data)
                if (res.data[0] == undefined) { } else {
                    if (res.data[0].userPassword == that.data.userPassword) {
                        that.setData({
                            isStudent: res.data[0].isStudent,
                            userName: res.data[0].userName,
                            right: true
                        })
                    }
                }
            },
            fail: err => {
                console.log('err')
            }
        });
    },
    updateData: function () {
        // console.log(this.data);
        //更新全局数据
        app.globalData.isStudent = this.data.isStudent;
        app.globalData.userName = this.data.userName;
        app.globalData.userPassword = this.data.userPassword;
        app.globalData.userNumber = this.data.userNumber;
        console.log(app.globalData)

        //根据信息跳转
        if (this.data.right) {
            //登录后，许可恢复为false用以下一次检验
            this.setData({
                right: false
            })
            if (this.data.isStudent) {
                wx.navigateTo({
                    url: '../stuPage/stuPage',
                })
            } else {
                wx.navigateTo({
                    url: '../manaPage/manaPage',
                })
            }
        } else {
            wx.showToast({
                icon: 'none',
                title: '序号或密码输入错误',
            })

        }
    },


    getUserNumber: function (e) {
        this.setData({
            userNumber: e.detail.value
        })
        // console.log(this.data.userNumber)
    },
    getUserPassword: function (e) {
        this.setData({
            userPassword: e.detail.value
        })
        // console.log(this.data.userPassword)
    },

})