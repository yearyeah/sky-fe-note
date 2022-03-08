JSTPost({
  url: '/erp/webapi/JGD/JGDPlatformInformationOperate/IsPay',
  isNeedBaseUrl: true,
  data: JSON.stringify({
    coid: $.cookie('u_co_id') || '0',
    uid: $.cookie('u_id') || '0',
    data: {}
  }),
  success: function (res) {
    console.log('success', res)
  },
  error: function (err) {
    console.log(err)
    _this._init(options)
  },
  contentType: 'application/json;charset=utf-8'
})
