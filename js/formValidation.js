// 檢查名稱欄位是否填寫
function checkName(name) {
  if (name != '') {
    $('#name').css('border-bottom', '2px #0b0b0b solid');
    $('.name-message').removeClass('d-inline-block');
    $('.name-message').addClass('d-none');
    console.log('name檢查')
    return status = true;
  } else {
    $('#name').css('border-bottom', '1px solid #ff0000');
    $('.name-message').addClass('d-inline-block');
    return status = false;
  }
}

// 檢查性別欄位是否填寫
function checkGender(gender) {
  if (gender == null) {
    $('#gender').css('border-bottom', '1px solid #ff0000');
    $('.gender-message').addClass('d-inline-block');
    return status = false;
  } else {
    $('#gender').css('border-bottom', '2px #0b0b0b solid');
    $('.gender-message').removeClass('d-inline-block');
    $('.gender-message').addClass('d-none');
    return status = true;
  }
}

// 檢查email欄位是否填寫
function checkEmail(email) {
  if (email != '') {
    $('#email').css('border-bottom', '2px #0b0b0b solid');
    $('.email-message').removeClass('d-inline-block');
    $('.email-message').addClass('d-none');

    // 檢查 email 格式
    // 若格式有誤，則跳出訊息，提醒使用者
    if (!/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
      console.log('here')
      $('#email').css('border-bottom', '1px solid #ff0000');
      $('.emailValidate-message').addClass('d-inline-block');
    } else {
      $('.emailValidate-message').removeClass('d-inline-block');
      $('.emailValidate-message').addClass('d-none');
      return status = true;
    }
  } else {
    $('#email').css('border-bottom', '1px solid #ff0000');
    $('.email-message').addClass('d-inline-block');
    return status = false;
  }
}

// 檢查phone欄位是否填寫
function checkPhone(phone) {
  if (phone != '') {
    $('#phone').css('border-bottom', '2px #0b0b0b solid');
    $('.phone-message').removeClass('d-inline-block');
    $('.phone-message').addClass('d-none');
    return status = true;
  } else {
    $('#phone').css('border-bottom', '1px solid #ff0000');
    $('.phone-message').addClass('d-inline-block');
    // $('#phone').focus();
    return status = false;
  }
}

// 檢查孩童數欄位是否填寫
function checkNum(number) {
  if (number == null) {
    $('#number').css('border-bottom', '1px solid #ff0000');
    $('.number-message').addClass('d-inline-block');
    return status = false;
  } else {
    $('#number').css('border-bottom', '2px #0b0b0b solid');
    $('.number-message').removeClass('d-inline-block');
    $('.number-message').addClass('d-none');
    return status = true;
  }
}

// 檢查年齡欄位是否填寫
function checkAge(age) {
  if (age == null) {
    $('#age').css('border-bottom', '1px solid #ff0000');
    $('.age-message').addClass('d-inline-block');
    return status = false;
  } else {
    $('#age').css('border-bottom', '2px #0b0b0b solid');
    $('.age-message').removeClass('d-inline-block');
    $('.age-message').addClass('d-none');
    return status = true;
  }
}

let status = false;

// Google API 儲存前端資料
$(function () {
  // 監聽 送出訂單 按鈕點擊
  // 下面這段主要在組合資料，還有擋使用者不填資料不能送出
  $('.submit-send').click(function () {
    let name = $('#name').val();
    let gender = $('#gender').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let number = $('#number').val();
    let age1 = $('#age1').val();
    let age2 = $('#age2').val();
    let age3 = $('#age3').val();
    let textarea = $('#textarea').val();

    // 內部檢查
    checkName(name)
    checkGender(gender)
    checkEmail(email)
    checkPhone(phone)
    checkNum(number)
    checkAge(age1)

    if (!name || !gender || !email || !phone || !number || !age1) {
      alert('記得填上表單所需的相關欄位呦！')
      return
    }

    // 若資料驗證成功才執行
    if (status) {
      // 增加日期資料
      console.log('true情況')
      let currentdate = new Date();
      let timeStamps = currentdate.getFullYear() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getDate() + "  " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

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
      send(data);
    } else {
      console.log('false情況')
      return status = false;
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
    }
  });
}