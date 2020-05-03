var sum = 0;
var isPropagationOn = false;

function gray(){
    alert("You've clicked gray of 1");
    sum += 1;
    update();
}

function red(){
    if (sum < 30){
        alert("You've clicked red of 2");
        sum += 2;
        update();
    }
}

function yellow(){
    if (sum < 50){
        alert("You've clicked yellow of 3");
        sum += 3;
        update();
    }

}

function update() {
    document.getElementById("sum").innerText = sum.toString();
}

function reset() {
    sum = 0;
    alert("The sum is set to 0")
    update();
    if (isPropagationOn) switchPropagation();
}

function switchPropagation() {
    if (isPropagationOn){
        document.getElementById("propagation").innerText = "OFF";
        isPropagationOn = false;
    }
    else {
        document.getElementById("propagation").innerText = "ON";
        isPropagationOn = true;
    }

}

function yellowHandler() {
    if (isPropagationOn){
        yellow();
    }
    else{
        event.stopPropagation();
        yellow();
    }
}

function redHandler() {
    if (isPropagationOn){
        red();
    }
    else{
        event.stopPropagation();
        red();
    }
}
