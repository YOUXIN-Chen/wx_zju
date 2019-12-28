
// component/infoInput/infoInput.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        item: {
            type: Object,
            value: {}
        },
        placeholder: {
            type: String,
            value: {}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    pageLifetimes: {
        show: function () {
            console.log(this.properties.item)
        },

    },




    /**
     * 组件的方法列表
     */
    methods: {
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


    }
})