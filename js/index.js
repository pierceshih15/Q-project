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

  // 關閉 Mobile-Header
  $('.header-close').on('click', function () {
    $('#offcanvas').toggleClass('open');
  })

  // 開啟 Mobile-Schedule
  $('[data-toggle="mobileSchedule"]').on('click', function () {
    $('#mobileSchedule').toggleClass('open');
  })

  // 關閉 Mobile-Schedule
  $('.icon-close-schedule').on('click', function () {
    $('#mobileSchedule').toggleClass('open');
  })
})

// 依照使用者所選擇的孩童數，增加相對應的年齡欄位
const Num = document.getElementById('number');
Num.addEventListener('change', function (e) {
  const numOfKids = e.target.value;

  if (numOfKids == 1) {
    $('#age-2').addClass('d-none');
    $('#age-3').addClass('d-none');
  }

  if (numOfKids == 2) {
    $('#age-2').removeClass('d-none');
    $('#age-3').addClass('d-none');
  }

  if (numOfKids == 3) {
    $('#age-1').removeClass('d-none')
    $('#age-2').removeClass('d-none')
    $('#age-3').removeClass('d-none')
  }

})