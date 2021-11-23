var button = d3.select("#button")

button.on("click", function(){
    var age = document.getElementById("age").value;
    var minutes = document.getElementById("minutes").value;
    var rebounds = document.getElementById("rebounds").value;
    var assists = document.getElementById("assists").value;
    var steals = document.getElementById("steals").value;
    var blocking = document.getElementById("blocking").value;
    var points = document.getElementById("points").value;
    var games = document.getElementById("games").value;
    var salary = ((561941*age) + (2185*minutes) + (423*rebounds) - (4*assists) + (5137*steals) + (45334*blocking) + (9043*points) - (151833*games))
    //console.log(salary),
    d3.select("#salary").text(salary)
});