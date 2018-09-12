var app = getApp();
Page({
  data: {
    films: app.data.films,
    film: 'top-hoverd-btn',
    telv: ''
  },
  onLaunch: function() {
    console.log('douban Launching ...');
  },
  onLoad: function() {
    console.log('douban Loading ...');
    requestData(this, mCurrentPage + 1);
  },
  toFilm: function() {
    this.updateBtnStatus('film');
  },
  toTelv: function() {
    this.updateBtnStatus('telv');
  },
  updateBtnStatus: function(k) {
    this.setData({
      film: this.getHoverd('film', k),
      telv: this.getHoverd('telv', k)
    });
  },
  getHoverd: function(src, dest) {
    return (src === dest ? 'top-hoverd-btn' : '');
  },
  toDetail: function() {
    wx.navigateTo({
      url: '../discovery/detail',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  toMore: function() {
    wx.navigateTo({
      url: '../discovery/more',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  toLine: function() {
    wx.navigateTo({
      url: '../discovery/line',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  },
  toSearch: function() {
    wx.navigateTo({
      url: '../search/index',
      success: function(res) {
        console.log(res)
      },
      fail: function(err) {
        console.log(err)
      }
    })
  }
});

var _url = "https://www.dbmeinv.com/?pager_offset=";
var mCurrentPage = 0;

function requestData(that, targetPage) {
  wx.request({
    url: _url + targetPage,    
    success: function(res) {
      console.info(res);
      if (res == null ||
        res.data == null) {

        console.error("god bless you...");
        return;
      }

      var i = 0;
      for (; i < res.data.results.length; i++)
        bindData(res.data.results[i]);

      //将获得的各种数据写入itemList，用于setData
      var itemList = [];
      for (var i = 0; i < mUrl.length; i++)
        itemList.push({
          url: mUrl[i],
          desc: mDesc[i],
          who: mWho[i],
          time: mTimes[i],
          title: mTitles[i]
        });

      that.setData({
        items: itemList,
        hidden: true,
        loadmorehidden: false,
      });

      mCurrentPage = targetPage;
    }
  });
}