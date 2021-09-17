function next_page() {
    window.location="game_page.html";
}

function send() {
    number1=document.getElemntById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt("number1")*parseInt("number2");
    question_number="<h4>" + number1 + "X" + number2 + "</h4>";
    input_box="<br>Answer : <input id='input_check_box' type='text'>";
    check_button="<br><br><button class='btn btn-info' onclick='send()'>Check</button>";
    row=question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElemntById("number1").innerHTML="";
    document.getElementById("number2").innerHTML="";
}