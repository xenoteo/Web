function validate() {
    var isValid = true;
    var name = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    if (! /[a-zA-Z]/.test(name) || /[0-9]/.test(name)||
        ! /[a-zA-Z]/.test(lastname) || /[0-9]/.test(lastname) ){
        alert("Please enter your real name")
        isValid = false;
    }
    var age = document.getElementById("age").value;
    if (isNaN(age) || parseInt(age) > 120 || parseInt(age) < 5){
        alert("Please enter your real age")
        isValid = false;
    }
    var phone = document.getElementById("number").value;
    if (!phone.match(/^\d{9}$/)){
        alert("Please enter phone in the right format")
        isValid = false;
    }
    var email = document.getElementById("email").value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        alert("Please enter your right email");
        isValid = false;
    }
    if(document.getElementById("married").checked){
        var partner = document.getElementById("partner-name").value;
        if (! /[a-zA-Z]/.test(partner) || /[0-9]/.test(partner)){
            alert("Please enter your partner's real name");
            isValid = false;
        }
    }
    if(isValid){
        document.getElementById("input-form").reset();
        document.getElementById("single").checked = true;
        handlePartner();
    }
}

function handlePartner(){
    if (document.getElementById("married").checked){
        document.getElementById("partner").classList.remove("d-none");
    }
    else{
        document.getElementById("partner").classList.add("d-none");
    }
}
