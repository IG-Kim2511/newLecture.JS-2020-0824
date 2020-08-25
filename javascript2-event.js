// Ex3-이벤트 버블링 멈추기
window.addEventListener("load", function () {
  var section = document.querySelector("#section3");

  var imgList = section.querySelector(".img-list");
  var addButton = section.querySelector(".add-button");
  var currentImg = section.querySelector(".current-img");

  imgList.onclick = function (e) {};

  addButton.onclick = function (e) {};
});

//Ex2- event bubbling 을 이용해 사용자 이벤트 처리하기:event Bubbling
window.addEventListener("load", function () {
  var section = document.querySelector("#section2");
  var imgList = section.querySelector(".img-list");
  var currentImg = section.querySelector(".current-img");

  imgList.onclick = function (e) {
    //   console.log('test');
    //   console.log(e.target.nodeName);

    if (e.target.nodeName != "IMG") return;
    currentImg.src = e.target.src;
  };
});

//연습문제 1-선택된 레코드 삭제하기:event target
window.addEventListener("load", function () {});

//Ex1-선택된 이미지 보여주기:event target
window.addEventListener("load", function () {
  var section = document.querySelector("#section1");

  var imgs = section.querySelectorAll(".img");
  var currentImg = section.querySelector(".current-img");

  //1w
  //   imgs[0].onclick = function (e) {
  //     // console.log(e.target.nodeName);
  //     currentImg.src = e.target.src;
  //   };
  //   imgs[1].onclick = function (e) {
  //     currentImg.src = e.target.src;
  //   };
  //   imgs[2].onclick = function (e) {
  //     currentImg.src = e.target.src;
  //   };

  //2w
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function (e) {
      currentImg.src = e.target.src;
    };
  }

  //3w
  // c41강  event bubbling  ㄱㄱ
});
