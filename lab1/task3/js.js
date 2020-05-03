var sum = 0;
var isActive = true;

function increment() {
    if (isActive){
        sum += 1;
        document.getElementById("sum").innerHTML = sum.toString();
    }
}

function deactivate() {
    if (isActive){
        isActive = false;
        document.getElementById("active").classList.add("d-none");
        document.getElementById("inactive").classList.remove("d-none");
        sum = 0;
        document.getElementById("sum").innerHTML = sum.toString();
    }
    else{
        isActive = true;
        document.getElementById("active").classList.remove("d-none");
        document.getElementById("inactive").classList.add("d-none");
    }
}
