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
  $('#submit').click(function (e) {

    var status = true;

    var params = e.parameter;
    var name = params.name;
    var gender = params.gender;
    var email = params.email;
    var phone = params.phone;
    var number = params.number;
    var age = params.age;
    var textarea = params.textarea;

    // // 擋住不填資料邏輯
    // if (name == '') {
    //   $('#name').css('border', '1px solid #ff0000');
    //   status = false;
    // }
    // if (phone == '') {
    //   $('#phone').css('border', '1px solid #ff0000');
    //   status = false;
    // }
    // if (order == '') {
    //   alert('請選擇訂購品項喔');
    //   status = false;
    // }

    // 如果 �必填欄位都過了 才會到這邊
    if (status) {
      // 增加日期資料
      var currentdate = new Date();
      var timeStamps = currentdate.getFullYear() + "/" +
        (currentdate.getMonth() + 1) + "/" +
        currentdate.getDate() + "  " +
        currentdate.getHours() + ":" +
        currentdate.getMinutes() + ":" +
        currentdate.getSeconds();

      // 打包 要的資料
      var data = {
        'name': name,
        'gender': gender,
        'email': email,
        'phone': phone,
        'number': number,
        'age': age,
        'textarea': textarea,
        'time': timeStamps
      }
      console.log(data);
      // 呼叫 send ajax function
      send(data);
    }
  });
});

function send(data) {
  $.ajax({
    type: "post",
    // api url - google appscript 產出的 url
    url: "https://script.google.com/macros/s/AKfycbwDIwLiLgiWXjFbKoOetCUnaWtNi1rfCRqh5HWmgTJM4XyCw10/exec",
    // 剛剛整理好的資料帶入
    data: data,
    // 資料格式是JSON 
    dataType: "JSON",
    // 成功送出 會回頭觸發下面這塊感謝
    success: function (response) {
      console.log(response);
      alert('感謝您，我們將會安排專人盡快與您聯繫！！');
    }
  });
}

// // 中英文切換
// var mlCodes = [{
//     code: "zh",
//     name: "Traditional",
//   },

//   {
//     code: "en",
//     name: "English",
//   },
// ];

// var MLstrings = [{
//     English: "The opportunity for Taiwanese youth",
//     Traditional: "台灣青少年的嶄新機會",
//   },
//   {
//     English: "Carrot",
//     Traditional: "胡蘿蔔",
//   }
// ];

// // Global var :(
// var mlrLangInUse;

// var mlr = function ({
//   dropID = "mbPOCControlsLangDrop",
//   stringAttribute = "data-mlr-text",
//   chosenLang = "Traditional",
//   mLstrings = MLstrings,
//   countryCodes = false,
//   countryCodeData = [],
// } = {}) {

//   // 1. 取得所有的 HTML 元素
//   const root = document.documentElement;

//   // 2. 讀取預設語言（中文），更新網頁內容
//   mlrLangInUse = chosenLang;
//   console.log(mlrLangInUse);

//   // 設定為中文
//   root.setAttribute("lang", updateCountryCodeOnHTML().code);

//   // 3. 若有切換行為，則重新判定選擇內容

//   var mbPOCControlsLangDrop = document.getElementById(dropID);
//   console.log(mbPOCControlsLangDrop);

//   // 2-1. 下拉式選單事件綁定
//   mbPOCControlsLangDrop.addEventListener("click", function (e) {
//     // 取得使用者選定之語言
//     mlrLangInUse = mbPOCControlsLangDrop.value;
//     console.log('mlrLangInUse', mlrLangInUse);

//     [mbPOCControlsLangDrop.selectedIndex].value;

//     root.setAttribute("lang", updateCountryCodeOnHTML().code);
//   });

//   function updateCountryCodeOnHTML() {
//     return countryCodeData.find(this2Digit => this2Digit.name === mlrLangInUse);
//   }

//   function resolveAllMLStrings() {
//     let stringsToBeResolved = document.querySelectorAll(`[${stringAttribute}]`);
//     stringsToBeResolved.forEach(stringToBeResolved => {
//       let originaltextContent = stringToBeResolved.textContent;
//       let resolvedText = resolveMLString(originaltextContent, mLstrings);
//       stringToBeResolved.textContent = resolvedText;
//     });
//   }
// };

// function resolveMLString(stringToBeResolved: string, mLstrings) {
//   var matchingStringIndex = mLstrings.find(function (stringObj) {
//     // Create an array of the objects values:
//     let stringValues = Object.values(stringObj);
//     // Now return if we can find that string anywhere in there
//     return stringValues.includes(stringToBeResolved);
//   });
//   if (matchingStringIndex) {
//     return matchingStringIndex[mlrLangInUse];
//   } else {
//     // If we don't have a match in our language strings, return the original
//     return stringToBeResolved;
//   }
// }

// mlr({
//   // DOM 元素綁定
//   dropID: "mbPOCControlsLangDrop",
//   // 文字節點
//   stringAttribute: "data-mlr-text",
//   // 預設語言
//   chosenLang: "Traditional",
//   // 文字變數內容
//   mLstrings: MLstrings,
//   countryCodes: true,
//   // 語言變數內容
//   countryCodeData: mlCodes,
// });