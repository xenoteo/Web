function change() {
    var imgs = document.getElementsByTagName("img");
    var imgList = Array.prototype.slice.call(imgs);
    for (i = 0; i < 2; i++){
        if (imgList[i].classList.contains("d-none")){
            imgList[i].classList.remove("d-none");
        }
        else{
            imgList[i].classList.add("d-none");
        }
    }
}



