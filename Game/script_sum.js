var ball = document.getElementById('ball');
var body = document.getElementById('body');
var again=1;
var speed=1;
function move(e){
    if(e.keyCode == 39){
        var i = 0;
        while(i!=60){
        ball.style.marginLeft =  again*speed + 'px';
        again++;
        i++;
        }
    }
}