// Generate random integers
function randInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Get the Numbers
var M = randInt(300, 600);
var N = randInt(100, 300);
var K = randInt(0, 100);
// Update the Questions -- total, giveout, takeback
document.querySelector('#total').textContent = M.toString();
document.querySelector('#takeback').textContent = N.toString();
document.querySelector('#balls').textContent = K.toString();
// Update the answers
// M-N+K , M-N-K , M-(N+K) , M-(N-K)
var T = N+K;
var S = N-K;
document.querySelector('[value="1"]').nextSibling.nodeValue=M.toString() +"-"+N.toString() +"+"+K.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue=M.toString() +"-"+N.toString() +"-"+K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue=M.toString() +"-"+"("+N.toString() +"+"+K.toString()+")";
document.querySelector('[value="4"]').nextSibling.nodeValue=M.toString() +"-"+"("+N.toString() +"-"+K.toString()+")";

// Pick the answer
function changeStyle(e){
    e.preventDefault(); //Prevent the checkbox clicked --otherwise two clicks
    var classname = this.getAttribute("class");
    alert("clicked class "+classname);
    if (classname == "answer"){
        this.setAttribute("class","answer selected");
    }else{
        //The style goes back to answer
        this.setAttribute("class","answer");
    }
    // Testing on Animation
    this.animate([{transform:'rotate(0deg)'},{transform:'rotate(180deg)'}],{duration:3000, fill: 'forward'});
}
// add eventlistener on the answer!!
var answerlist = document.getElementsByClassName('answer');
for(var i = 0; i<4; i++){
    answerlist[i].addEventListener('click', changeStyle, false);
}