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
    var age = $('#age').val();
    var textarea = $('#textarea').val();

    // 擋住不填資料邏輯
    if (name == '') {
      $('#name').css('border', '1px solid #ff0000');
      status = false;
    }
    if (gender == '') {
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
    if (number == '') {
      $('#number').css('border', '1px solid #ff0000');
      status = false;
    }
    if (age == '') {
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

      // 打包 要的資料
      let data = {
        'name': name,
        'gender': gender,
        'email': email,
        'phone': phone,
        'number': number,
        'age': age,
        'textarea': textarea,
        'time': timeStamps
      }
      // 呼叫 send ajax function
      send(data);
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
      console.log(response);
      alert(`感謝您，我們將會安排專人盡快與您聯繫！！`);
    }
  });
}