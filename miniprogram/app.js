//app.js
App({
    onLaunch: function() {
        wx.cloud.init({
            traceUser:true,
            env:"cl-zju-qg1na"
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