var play;
var asnwer = [];
var found = [];
var couter = 1;
function playGame() {
    found = [];
    asnwer = [];
    couter++;
    if(couter > 10 ) {
        alert('Congratulations you have successfully completed all 10 lavel');
        document.getElementById("restart").style.visibility="visible"; 
        return;
    }else {
        document.getElementById("restart").style.visibility="hidden"; 
    }
    resetSquare();
    console.log('playGame method called');
    var num = Math.floor((Math.random()*10) + 1); 
    console.log(num);
    play = (num >>> 0).toString(2).split('');
    for(var i=0; i<play.length; i++) {
        if(play[i] == 1) {
            found.push(1);
        }
          
    }
   
    for(let i=0; i<play.length; i++) {
        if(play[i] != 0) {
            console.log('parse', parseInt(i));
            document.getElementById(i).style.border = "thick solid LightSeaGreen";
        } 
        hidedArea(i);
        
    }
    setTimeout(function() {
        //alert("Please choose your color");
        document.getElementById("alertmsg").innerHTML = "Please choose your color";
        document.getElementById("alertmsg").style.border = "thick solid red";
    }, 500);

    function  hidedArea(i) {
        // (function(i){ 
        //     setTimeout(function() {
        //     document.getElementById(i).style.border ="";
        //     },500);

        // })(i);
    }
      
   
}

function resetSquare() {
    for(var i=0; i<4; i++) {
        document.getElementById(i).style.border = "";
    }
}

function gameScore(id) {
    document.getElementById("alertmsg").innerHTML = "";
    document.getElementById("alertmsg").style.border = "";
    asnwer.push(parseInt(play[id]));
    if(asnwer.length == found.length ) {
        if(JSON.stringify(asnwer)==JSON.stringify(found)) {
            alert("Congratualtions you have successfully completed"+ couter + "lavel");
            resetSquare();
            document.getElementById("label").innerHTML = "Lavel : "+ couter;
        } else {
            couter = 1;
            resetSquare();
            alert("Sorry Game is Over! You have choose wrong color");
            document.getElementById("label").innerHTML = "Lavel : "+ couter;
        }
    }
}


function restartGame() {
    couter = 1;
    document.getElementById("label").innerHTML = "Lavel : "+ couter;
    playGame();
}