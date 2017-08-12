function responsiveNav() {
    var x = document.getElementById("nav-mobile");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}
