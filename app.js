//app.js
App({
  data: {
    films: [{
      "title": "碟中谍6：全面瓦解",
      "director": "克里斯托弗·麦奎里",
      "scriptwriter": "克里斯托弗·麦奎里 / 布鲁斯·盖勒",
      "protagonist": "汤姆·克鲁斯 / 亨利·卡维尔 / 文·瑞姆斯 ...",
      "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529365085.jpg"
    },
    {
      "title": "快把我哥带走",
      "director": "郑芬芬",
      "scriptwriter": "赵越 / 郑芬芬 / 吕旭",
      "protagonist": "张子枫 / 彭昱畅 / 赵今麦 / 孙泽源 ...",
      "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2531080870.jpg"
    }, {
      "title": "阿尔法：狼伴归途",
      "director": "艾尔伯特·休斯",
      "scriptwriter": "达恩·威登霍普 / 艾尔伯特·休斯",
      "protagonist": "柯蒂·斯密特 - 麦菲 / 娜塔莎·迈尔兹 ...",
      "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2530871439.jpg"
    },
    {
      "title": "蚁人2：黄蜂女现身",
      "director": "佩顿·里德",
      "scriptwriter": "克里斯·麦克纳 / 埃里克·萨默斯 / 保罗·路德 ...",
      "protagonist": "保罗·路德 / 伊万杰琳·莉莉 / 迈克尔·佩纳 ...",
      "poster": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2529389608.jpg"
    }
    ]
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})