function handleClear() {
    var tablo = document.getElementById("tablo");
    if(tablo.textContent){
        tablo.innerHTML="0";
    }
}
function handleOn() {
    document.getElementById("tablo").innerHTML = "0";
}
function handleOff() {
    document.getElementById("tablo").innerHTML = "";
}
function handleKey(val) {
    var tablo = document.getElementById("tablo");
    if(tablo.textContent === "" || tablo.textContent.length >= 15) {

    } else if (tablo.textContent === "0") {
        tablo.innerHTML = val;
    } else {
        tablo.innerHTML = tablo.textContent + val;
    }
}
function calculate() {
    var tablo = document.getElementById("tablo");
    const sum = eval(tablo.textContent);
    tablo.textContent = sum;
}
function handleBack() {
    var tablo = document.getElementById("tablo");
    const text = tablo.textContent.slice(0, -1);

    if(text.length) {
        tablo.innerHTML = text;
    }else{
        tablo.innerHTML = 0;
    }
}
