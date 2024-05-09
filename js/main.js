let searchbar = document.querySelector("input#search");

searchbar.addEventListener('keydown', function (e){
    if(e.code == "Enter")
    {
        search();
    }
});

function search()
{
    let q = searchbar.value;
    window.open("https://www.google.com/search?q=" + q + "", "_blank").focus();
}