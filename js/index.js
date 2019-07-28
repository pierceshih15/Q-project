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

// // 表單 email 驗證
// function checkEmail(strEmail) {
//   if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) != -1) {
//     $('.email-message').toggleClass('d-none')
//     return true;
//   } else {
//     $('#email').focus();
//     $('.email-message').toggleClass('d-none');
//     return false;
//   }
// }

// Google API 儲存前端資料
$(function () {
  // 監聽 送出訂單 按鈕點擊
  // 下面這段主要在組合資料，還有擋使用者不填資料不能送出
  $('.submit-send').click(function () {
    var status = true;

    var name = $('#name').val();
    var gender = $('#gender').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var number = $('#number').val();
    var age1 = $('#age1').val();
    var age2 = $('#age2').val();
    var age3 = $('#age3').val();
    var textarea = $('#textarea').val();

    // 擋住不填資料邏輯
    if (name == '') {
      $('#name').css('border', '1px solid #ff0000');
      status = false;
    }
    if (gender == 'select') {
      $('#gender').css('border', '1px solid #ff0000');
      status = false;
    }
    if (email == '') {
      $('#email').css('border', '1px solid #ff0000');
      status = false;
    }
    if (phone == '') {
      $('#phone').css('border', '1px solid #ff0000');
      status = false;
    }
    if (number == 'select') {
      $('#number').css('border', '1px solid #ff0000');
      status = false;
    }
    if (age1 == 'select' || age2 == 'select' || age3 == 'select') {
      $('#age').css('border', '1px solid #ff0000');
      status = false;
    }

    // 若資料皆填寫完畢，才執行
    if (status) {
      // 增加日期資料
      let currentdate = new Date();
      let timeStamps = currentdate.getFullYear() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getDate() + "  " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

      // 檢查 age1 是否已選擇，若已選擇，則 age2 & age3 為空
      if (age1 != 'select') {
        $('#age2').val('');
        $('#age3').val('');
      }

      // 檢查 age2 是否已選擇，若已選擇，則 age3 為空
      if (age2 != 'select') {
        $('#age3').val('');
      }

      // 打包 要的資料
      let data = {
        'time': timeStamps,
        'name': name,
        'gender': gender,
        'email': email,
        'phone': phone,
        'number': number,
        'age1': age1,
        'age2': age2,
        'age3': age3,
        'textarea': textarea,
      }
      // 呼叫 send ajax function
      // console.log(data);
      send(data);

      $('#name').val('');
      $('#gender').val('');
      $('#email').val('');
      $('#phone').val('');
      $('#number').val('');
      $('#age1').val('');
      $('#age2').val('');
      $('#age3').val('');
      $('#textarea').val('');
    }
  });
});

function send(data) {
  $.ajax({
    type: "get",
    // api url - google appscript 產出的 url
    url: "https://script.google.com/macros/s/AKfycbwDIwLiLgiWXjFbKoOetCUnaWtNi1rfCRqh5HWmgTJM4XyCw10/exec",
    // 剛剛整理好的資料帶入
    data: data,
    // 資料格式是JSON 
    dataType: "JSON",
    // 成功送出觸發事件
    success: function (response) {
      $(".form-submit-success-content").removeClass('d-none');
      // alert(`感謝您，我們將會安排專人盡快與您聯繫！！`);
    }
  });
}