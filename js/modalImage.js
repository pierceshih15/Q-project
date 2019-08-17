const img = document.getElementsByClassName('myImg')
const close = document.getElementsByClassName('close')

// 顯示圖片
for (let i = 0; i < img.length; i++) {
  img[i].addEventListener('click', function (e) {
    // Get the modal
    let targetImg = e.target.parentElement.nextElementSibling;
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    targetImg.style.display = "block";
    targetImg.children[1].src = e.target.src;
  })
}

// 關閉圖片
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function (e) {
    // 指定的 Modal
    let el = e.target.parentElement.parentElement;
    el.style.display = "none";
  })
}