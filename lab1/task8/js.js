function getIdCount() {
    if (localStorage.getItem("idCount") === null){
        var newId = 11;
        localStorage.setItem("idCount", newId.toString());
        return 10;
    }
    else{
        var idCount = parseInt(localStorage.getItem("idCount"));
        var newId = idCount + 1;
        localStorage.setItem("idCount", newId);
        return idCount;
    }
}

function getCatCont() {
    if (localStorage.getItem("catCount") === null){
        var newCat = 11;
        localStorage.setItem("catCount", newCat.toString());
        return 10;
    }
    else{
        var catCount = parseInt(localStorage.getItem("catCount"));
        var newCat = catCount + 1;
        localStorage.setItem("catCount", newCat.toString());
        return catCount;
    }
}

function show(id) {
    var li = document.getElementById(id);
    var ul = li.getElementsByTagName("ul")[0];
    if (ul.classList.contains("d-none")) ul.classList.remove("d-none");
    else ul.classList.add("d-none");
}

function addUser() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var catName = document.getElementById("cat-name").value;
    var src = document.getElementById("cat-photo").value;
    if (name.length === 0 || age.length === 0 || catName.length === 0 || src.length === 0){
        alert("Please fill all fields");
        return;
    }
    if (! /[a-zA-Z]/.test(name) || /[0-9]/.test(name)){
        alert("Please enter your real name");
        return;
    }
    var idCount = getIdCount();
    var catCount = getCatCont();
    localStorage.setItem("user" + idCount.toString(), "<li class=\"user\" id=\"user" + idCount.toString() + "\">\n" +
        "            <div class=\"user-data\">\n" +
        "                <div class=\"user-name\">"+ name +"</div>\n" +
        "                <div class=\"user-age\">" + age + " y.o.</div>\n" +
        "                <ul class=\"user-cat-list\">\n" +
        "                </ul>\n" +
        "                <div class=\"user-buttons\">\n" +
        "                    <button class=\"btn\" onclick=\"show('user"+ idCount.toString() +"')\">Show/hide cats</button>\n" +
        "                    <button type=\"button\" class=\"btn\" onclick=\"remove('user"+ idCount.toString() +"')\">\n" +
        "                        Delete user\n" +
        "                    </button>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </li>");
    localStorage.setItem("user" + idCount.toString() + "cat" + catCount.toString(), "<li class=\"cat\" id=\"user" + idCount.toString() + "cat" + catCount.toString() +"\">\n" +
        "                        <div class=\"cat-data\">\n" +
        "                            <div class=\"cat-name\">\n" +
        "                                "+ catName +"\n" +
        "                            </div>\n" +
        "                            <img src=\""+ src +"\" alt=\""+ catName +"\">\n" +
        "                        </div>\n" +
        "                        <button type=\"button\" class=\"btn user-delete\" onclick=\"remove('user"+ idCount.toString() + "cat" + catCount.toString() + "')\">\n" +
        "                            Delete\n" +
        "                        </button>\n" +
        "                    </li>");
    update();
}

function update() {
    document.getElementById("users").innerHTML = "";
    for (var i = 0; i < localStorage.length; i++){
        if(!localStorage.key(i).includes("cat") && localStorage.key(i).includes("user"))
            document.getElementById("users").innerHTML += localStorage.getItem(localStorage.key(i));
    }
    for (var i = 0; i < localStorage.length; i++){
        if (localStorage.key(i).includes("cat") && !localStorage.key(i).includes("Count")){
            var user = localStorage.key(i).split("cat")[0];
            var userHTML = document.getElementById(user);
            var ul = userHTML.getElementsByClassName("user-cat-list")[0];
            ul.innerHTML += localStorage.getItem(localStorage.key(i));
        }
    }
    for (var i = 0; i < localStorage.length; i++){
        if(!localStorage.key(i).includes("cat") && localStorage.key(i).includes("user")) {
            var userHTML = document.getElementById(localStorage.key(i));
            var ul = userHTML.getElementsByClassName("user-cat-list")[0];
            ul.innerHTML += "<button type=\"button\" class=\"btn\" onclick=\"showForm('"+ localStorage.key(i) +"')\">\n" +
                "                            Add cat\n" +
                "                        </button>";
        }
    }
}

function remove(id) {
    if (!id.includes("cat")){
        for (var i = 0; i < localStorage.length; i++){
            if (localStorage.key(i).includes("cat") && localStorage.key(i).includes(id)){
                localStorage.removeItem(localStorage.key(i));
            }
        }
    }
    var toRemove = document.getElementById(id);
    toRemove.parentNode.removeChild(toRemove);
    localStorage.removeItem(id);
    update();
}

function showForm(id) {
    alert("Fill form below");
    document.getElementById("new-cat").classList.remove("d-none");
    localStorage.setItem("forUser", id);
}

function addCat() {
    var user = localStorage.getItem("forUser");
    if (user === null) return;
    localStorage.removeItem("forUser");
    var catName = document.getElementById("cat-name-2").value;
    var src = document.getElementById("cat-photo-2").value;
    if (src.length === 0 || catName.length === 0){
        alert("Please fill all fields");
        return;
    }
    var catCount = getCatCont()
    localStorage.setItem(user + "cat" + catCount.toString(), "<li class=\"cat\" id=\"" + user + "cat" + catCount.toString() +"\">\n" +
        "                        <div class=\"cat-data\">\n" +
        "                            <div class=\"cat-name\">\n" +
        "                                "+ catName +"\n" +
        "                            </div>\n" +
        "                            <img src=\""+ src +"\" alt=\""+ catName +"\">\n" +
        "                        </div>\n" +
        "                        <button type=\"button\" class=\"btn user-delete\" onclick=\"remove('" + user + "cat" + catCount.toString() + "')\">\n" +
        "                            Delete\n" +
        "                        </button>\n" +
        "                    </li>")
    document.getElementById("new-cat").classList.add("d-none");
    update();
}
