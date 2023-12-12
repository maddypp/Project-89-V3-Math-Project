function adduser() {
    var player1_name = document.getElementById("player1_input").value;
    var player2_name = document.getElementById("player2_input").value;

    localStorage.setItem("player1name",player1_name);
    localStorage.setItem("player2name",player2_name);
    window.location = "index.html";
    
}