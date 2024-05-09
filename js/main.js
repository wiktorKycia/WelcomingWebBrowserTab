function search()
{
    let q = document.querySelector("input#search").value;
    // window.location.href = "https://www.google.com/search?q=" + q + "";
    window.open("https://www.google.com/search?q=" + q + "", "_blank").focus();
}