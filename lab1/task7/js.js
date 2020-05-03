function add() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    if (name.length === 0 || phone.length === 0){
        alert("Wypełnij wszystkie pola");
        return;
    }
    if (! /[a-zA-Z]/.test(name) || /[0-9]/.test(name)){
        alert("Wprowadź swoje prawdziwe imię");
        return;
    }
    if (! /[0-9]{3}-[0-9]{3}-[0-9]{3}/.test(phone)){
        alert("Wprowadź numer telefonu w poprawnym formacie");
        return;
    }
    localStorage.setItem(name, "<li class=\"user\" id='" + name + "'>\n" +
        "            <div class=\"user-data\">\n" +
        "                <div class=\"user-name\">" + name + "</div>\n" +
        "                <div class=\"user-phone\">" + phone + "</div>\n" +
        "            </div>\n" +
        "            <button type=\"button\" class=\"btn user-delete\" onclick=\"remove('" + name + "')\">\n" +
        "                Usuń\n" +
        "            </button>\n" +
        "        </li>");
    update();
}



function update() {
    document.getElementById("users").innerHTML = "";
    for (var i = 0; i < localStorage.length; i++){
        document.getElementById("users").innerHTML += localStorage.getItem(localStorage.key(i));
    }
}

function remove(name) {
    var users = document.getElementsByClassName('user');
    var usersList = Array.prototype.slice.call(users);
    for (var i = 0; i < usersList.length; i++){
        if (name === usersList[i].id){
            usersList[i].parentNode.removeChild(usersList[i]);
            localStorage.removeItem(name);
            update();
            return;
        }
    }
}


