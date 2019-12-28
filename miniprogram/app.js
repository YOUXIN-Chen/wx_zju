//app.js
App({
    onLaunch: function() {
        wx.cloud.init({
            traceUser:true
        })
    },
    globalData: {
        userInfo: null,
        isStudent: '',
        userName: '',
        userPassword: '',
        userNumber: ''
    }
})