//6. Tạo 2 nút, nút thứ nhất có value = "Xanh", nút thứ hai có value = "Đỏ". Yêu cầu: Khi người dùng click vào nút xanh thì màu nền của tài liệu là xanh (blue), còn khi người dùng click vào nút đỏ thì màu nền của tài liệu là: Đỏ (red).
function redBgr(){
    document.body.style.backgroundColor= "red"
}
function blueBgr(){
   document.body.style.backgroundColor= "blue"
}
function resetBgr(){
    document.body.style.backgroundColor= "white"
}
//13 Làm một chiếc đồng hồ bấm giờ
var second = 0,
    minute = 0,
    hour =0;
function declareTime(){
    
    second++;
    if(second==60){
        second=0;
        minute++
    }
    if(minute==60){
        minute=0;
        hour++;
    }
    showTime();
}
/* setInterval(declareTime, 1000) */

var display = document.getElementById("display");

function showTime(){ 
var formatSecond = second,
    formatMinute = minute,
    formatHour = hour;
    if(second<10){
        formatSecond = "0" + second;
    }
    if(minute<10){
        formatMinute = "0" + minute;
    }
    if(hour<10){
        formatHour = "0" + hour;
    }
    display.innerHTML = formatHour + ":" + formatMinute + ":" + formatSecond;
}

var startBtn = document.getElementById("start"),
    pauseBtn = document.getElementById("pause"),
    resetBtn = document.getElementById("reset");
let timer;
startBtn.addEventListener("click", () =>{
    timer = setInterval(declareTime, 1000);
});
pauseBtn.addEventListener("click", () =>{
    timer = clearInterval(timer);
});
resetBtn.addEventListener("click", () =>{
    timer = clearInterval(timer);
    second = 0;
    minute = 0;
    hour = 0;
    display.innerHTML = "00:00:00"
})

//10. Tạo show more và showless của một đoạn text khi quá dài.
var dots = document.getElementById("dots"),
    continueText = document.getElementById("continue"),
    showMore = document.getElementById("showMore");

function processing(){
    if(dots.style.display == "none"){
        dots.style.display = "inline";
        showMore.innerHTML = "Show more";
        continueText.style.display = "none";
    }
    else{
        dots.style.display = "none";
        showMore.innerHTML = "Show less";
        continueText.style.display = "inline";
    }
}

showMore.addEventListener("click", () =>{
    processing()
})
    