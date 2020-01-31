var radomnum = Math.floor(Math.random() * 100) + 1;
var guess = document.querySelector(".mynum");
var answer = document.querySelector(".answer");
var selectnum = document.querySelector(".go");
var c = document.querySelector(".currect");

function checkednum() {
    var guessnum = Number(guess.value);
    if (radomnum == guessnum) {
        answer.innerHTML = ("恭喜答對！");

    } else {
        answer.innerHTML = ("答案錯誤");
        c.innerHTML = radomnum;
    }

}
selectnum.addEventListener("click", checkednum);