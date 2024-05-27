const popup = document.querySelector(".popup");
const cancleBtn = document.querySelector(".cancle_btn"); 
const qsBtns = document.querySelectorAll(".qs-btn");
const answers = document.querySelectorAll(".answer");

// 버튼을 클릭 했을 때
$(qsBtns).each(function(i) {
    $(this).click(function(e) {
        e.preventDefault();
        $(answers[i]).slideToggle(100);
        $(answers[i]).toggleClass("active");
    });
});

// 팝업
cancleBtn.addEventListener("click", function(){
    popup.classList.add("none");
});