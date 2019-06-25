$(function () {
  'use strict'

  // 開啟 Mobile-Header
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('#offcanvas').toggleClass('open');
  })

  // 關閉 Mobile-Header
  $('.icon-close-header').on('click', function () {
    $('#offcanvas').toggleClass('open');
  })

  // 開啟 Mobile-Schedule
  $('[data-toggle="mobileSchedule"]').on('click', function () {
    $('#mobileSchedule').toggleClass('open');
    console.log('有喔');
  })

  // 關閉 Mobile-Schedule
  $('.icon-close-schedule').on('click', function () {
    $('#mobileSchedule').toggleClass('open');
  })

})