function createGoogleSearchLink(searchText) {
    const encodedText = encodeURIComponent(searchText); // Encodes spaces as '%20'
    return `https://www.google.com/search?q=${encodedText}`;
}

let searchbar = document.querySelector("#search");

searchbar.addEventListener('keydown', function (e){
    if(e.code == "Enter")
    {
        search();
    }
});

searchbar.addEventListener('keydown', function (e) {
    if (e.code === "Enter" && e.ctrlKey) {
        search(true);
    }
});

function search(focus = false)
{
    let q = searchbar.value;
    if(focus)
    {
        window.open(createGoogleSearchLink(q), "_blank").focus();
    }
    else
    {
        window.open(createGoogleSearchLink(q), "_blank");
    }
}