let searchbar = document.querySelector("#search");

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
import fs from 'fs';
document.addEventListener("DOMContentLoaded", function () {
    let content = fs.readdirSync('./json/sections.json');
    for(section of content)
    {
        let h2 = document.createElement('h2');
        h2.innerHTML = section.heading;
        document.body.appendChild(h2);
        for(content of section.contents)
        {
            let a = document.createElement('a');
            a.href = content.url;
            a.innerHTML = content.icon + "<br>" + content.name;
            document.body.appendChild(a);
        }
    }
});