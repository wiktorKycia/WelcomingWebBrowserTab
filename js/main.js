let searchbar = document.querySelector("input#search");

function search()
{
    let q = searchbar.value;
    window.open("https://www.google.com/search?q=" + q + "", "_blank").focus();
}