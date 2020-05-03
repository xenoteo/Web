var isValid = true;

function reset() {
    document.getElementById("input-form").reset();
    document.getElementById("single").checked = true;
    handlePartner();
}

function isAllFilled() {
    var isAll = true;
    var name = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    if(document.getElementById("married").checked){
        var partner = document.getElementById("partner-name").value;
        if (partner.length === 0) isAll = false;
    }
    return isAll && name.length > 0 && lastname.length > 0 && age.length > 0 && phone.length > 0 && email.length > 0;
}

function validate() {
    if(isValid && isAllFilled()){
        reset();
    }
    else{
        alert("Please fill all fields")
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

function checkName(id) {
    var name = document.getElementById(id).value;
    if (! /[a-zA-Z]/.test(name) || /[0-9]/.test(name)){
        document.getElementById(id + "-err").classList.remove("d-none");
        isValid = false;
        return false;
    }
    isValid = true;
    return true;
}

function checkAge() {
    var age = document.getElementById("age").value;
    if (isNaN(age) || parseInt(age) > 120 || parseInt(age) < 5){
        document.getElementById( "age-err").classList.remove("d-none");
        isValid = false;
        return false;
    }
    isValid = true;
    return true;
}

function checkPhone() {
    var phone = document.getElementById("phone").value;
    if (!phone.match(/^\d{9}$/)){
        document.getElementById( "phone-err").classList.remove("d-none");
        isValid = false;
        return false;
    }
    isValid = true;
    return true;
}

function checkEmail() {
    var email = document.getElementById("email").value;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        document.getElementById( "email-err").classList.remove("d-none");
        isValid = false;
        return false;
    }
    isValid = true;
    return true;
}

function change(id) {
    var isToChange = false;
    if (id.includes("name") && checkName(id)) isToChange = true;
    else if (id === "age" && checkAge()) isToChange = true;
    else if (id ==="phone" && checkPhone()) isToChange = true;
    else if (id === "email" && checkEmail()) isToChange = true;
    if (isToChange) document.getElementById(id + "-err").classList.add("d-none");
}

