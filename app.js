function insert(value) {
    document.getElementById("textview").value = document.getElementById("textview").value + value;
}
function equal(){
    let exp = document.getElementById("textview").value;
    console.log(eval(exp));
    document.getElementById("textview").value = exp?eval(exp).toFixed(3):''; 
    //setting 3 decimal places because no one is actually gonna use this hah
}
function empty(){
    console.log(document.getElementById("textview").value);
    document.getElementById("textview").value = "";
}
function backspace() {
    let str = document.getElementById("textview").value;
    document.getElementById("textview").value = str.slice(0, -1);
}