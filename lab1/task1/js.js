function setName() {
    const name = prompt("Enter your name:", "John");

    if (name) {
        alert("Hello " + name);
        document.getElementById("name").innerHTML = name;
    }
}

