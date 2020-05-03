function add() {
    const name = prompt("Enter the new element:", "new element");

    if (name) {
        document.getElementById("list-container").innerHTML +=
            "<div class=\"item text-light\">&nbsp" + name + "&nbsp</div>";
    }
}

function remove() {
    document.getElementsByClassName("item text-light")[0].remove();
}



