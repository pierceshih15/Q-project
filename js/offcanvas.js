$(function () {
  'use strict'

  // 開啟 Header
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
  })

  // 關閉 Header
  $('.icon-close').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
  })
})