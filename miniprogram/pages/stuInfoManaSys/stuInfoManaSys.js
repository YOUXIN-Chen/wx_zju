// miniprogram/pages/stuInfoManaSys/stuInfoManaSys.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isStuHidden: false,
        isStudent: '',
        isAdmHidden: true,
        isSetHidden: true,
        isHidden: true,
        isSet: false,
        addUserName: '',
        addUserNumber: '',
        addUserPassword: '',
        set_id: '' //当前需要修改的序号
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

    addStuInfo: function () {
        this.setData({
            isStuHidden: false,
            isAdmHidden: true,
            isSetHidden: true,
        })
    },

    addAdmInfo: function () {
        this.setData({
            isAdmHidden: false,
            isStuHidden: true,
            isSetHidden: true,
        })
    },

    setStuinfo: function () {
        this.setData({
            isSetHidden: false,
            isStuHidden: true,
            isAdmHidden: true,
        })
    },

    addStuInfoToDB: function () {
        this.setData({
            isStudent: true
        })
        this.handleData();
    },

    addAdmInfoToDB: function () {
        this.setData({
            isStudent: false
        })
        this.handleData();
    },

    handleData: function () {
        //提交数据
        var that = this;
        const db = wx.cloud.database();
        db.collection("T_userI").add({
            data: {
                isStudent: that.data.isStudent,
                userName: that.data.addUserName,
                userPassword: that.data.addUserPassword,
                userNumber: that.data.addUserNumber
            },
            success: res => {
                console.log(res.data)
                wx.showToast({
                    //弹框提示
                    title: '添加成功',
                });
                //清空input
                that.setData({
                    addUserName: '',
                    addUserNumber: '',
                    addUserPassword: ''
                })
            }
        })
    },

    queryStuInfo: function () {
        var that = this;
        const db = wx.cloud.database();
        db.collection("T_userI").where({
            userNumber: that.data.addUserNumber
        }).get({
            success: res => {
                // console.log(res.data[0])
                if (res.data[0] == undefined) {
                    wx.showToast({
                        icon: 'none',
                        title: '查无此号',
                    }),
                        that.setData({
                            isHidden: true
                        })
                } else {
                    that.setData({
                        isHidden: false
                    })
                    that.setData({
                        addUserName: res.data[0].userName,
                        addUserPassword: res.data[0].userPassword,
                        addUserNumber: res.data[0].addUserNumber,
                        set_id: res.data[0]._id,
                        // isSet:true
                    })
                }

            },
            fail: err => {
                wx.showToast({
                    icon: 'none',
                    title: '查无此号',
                })
            }
        })

    },

    setStuInfo: function () {
        console.log(this.data.setUserNumber)
        var that = this;
        const db = wx.cloud.database();
        db.collection("T_userI").doc(that.data.set_id).update({
            data: {
                userNumber: that.data.addUserNumber,
                userPassword: that.data.addUserPassword,
                userName: that.data.addUserName
            },
            success: res => {
                wx.showToast({
                    //弹框提示
                    title: '修改成功',
                })
            }
        }),
            this.setData({
                addUserName: '',
                addUserNumber: '',
                addUserPassword: '',
                set_id: '',
                isHidden: true
            })
    },

    getUserNumber: function (e) {
        this.setData({
            addUserNumber: e.detail.value
        })
        // console.log(this.data.addUserNumber)
    },
    getUserPassword: function (e) {
        this.setData({
            addUserPassword: e.detail.value
        })
        // console.log(this.data.addUserPassword)
    },
    getUserName: function (e) {
        this.setData({
            addUserName: e.detail.value
        })
        // console.log(this.data.addUserName)
    },
})