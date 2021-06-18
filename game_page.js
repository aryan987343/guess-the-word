player1 = localStorage.getItem("player_1");
player2 = localStorage.getItem("player_2");

player1_score = 0
player2_score = 0

document.getElementById("player_1").innerHTML = player1 + ":";
document.getElementById("player_2").innerHTML = player2 + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = player1;
document.getElementById("player_answer").innerHTML = player2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    char1 = word.charAt(1);

    middlength = Math.floor(word.length /2);
    char2 = word.charAt(middlength);
    lengthmines1 = word.length-1;

    char3 = word.charAt(lengthmines1);

    replaceword1 = word.replace(char1, "_");
    replaceword2 = replaceword1.replace(char2, "_");
    replaceword3 = replaceword2.replace(char3, "_");
    console.log(replaceword3);

    question_word = "<h4 id='word_display'> Q. "+replaceword3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

answer_turn = "p2";
question_turn = "p1";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if (answer == word) {
        if (answer_turn == "p1") {player1_score = player1_score+1;
        document.getElementById("player1_score").innerHTML = player1_score;}
        else {player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;}
    }
    else {
        if (answer_turn == "p1") {player1_score = player1_score-1;
            document.getElementById("player1_score").innerHTML = player1_score;}
            else {player2_score = player2_score-1;
                document.getElementById("player2_score").innerHTML = player2_score;}
    }
    if (question_turn == "p1") {
    question_turn = "p2";
    document.getElementById("player_question").innerHTML = player2;
    }
    else{
        question_turn = "p1";
        document.getElementById("player_question").innerHTML = player1;   
    }
    if (answer_turn == "p1") {
        answer_turn = "p2";
        document.getElementById("player_answer").innerHTML = player2;
        }
        else{
            answer_turn = "p1";
            document.getElementById("player_answer").innerHTML = player1;   
        }
        document.getElementById("output").innerHTML = ""
}