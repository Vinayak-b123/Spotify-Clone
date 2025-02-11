
//Go to searchbar when slash is pressed!!!
let val1 = "";
document.body.addEventListener("keydown", ()=>{
    search_bar = document.getElementsByClassName("search-bar")[0]
    if (event.key === "/"){
        val1 = document.getElementsByClassName("search-bar")[0].value;
        document.getElementsByClassName("search-bar")[0].focus();
        document.getElementsByClassName("search-bar")[0].value = val1;

    }
})
document.body.addEventListener("keyup", ()=>{
    if (event.key === "/"){
        // val1 = document.getElementsByClassName("search-bar")[0].value;
        document.getElementsByClassName("search-bar")[0].value = val1;
    }
})