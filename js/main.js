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
const sections = [
        {
            "heading": "Google",
            "expansive": true,
            "contents": [
                {
                    "name": "Youtube",
                    "url": "https://www.youtube.com/playlist?list=WL",
                    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" style=\"fill: rgba(0, 0, 0, 1);transform: ;msFilter:;\"><path d=\"M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z\"></path></svg>"
                },
                {
                    "name": "Gmail",
                    "url": "https://mail.google.com/mail/u/0/#inbox",
                    "icon":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" style=\"fill: rgba(0, 0, 0, 1);transform: ;msFilter:;\"><path d=\"m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z\"></path></svg>"
                },
                {
                    "name": "Google Drive",
                    "url": "https://drive.google.com/drive/u/0/my-drive",
                    "icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" style=\"fill: rgba(0, 0, 0, 1);transform: ;msFilter:;\"><path d=\"m21.983 13.821-1.851-10.18A1.998 1.998 0 0 0 18.165 2H5.835a2 2 0 0 0-1.968 1.643l-1.85 10.178.019.003c-.012.06-.036.114-.036.176v5c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-5c0-.063-.024-.116-.035-.176l.018-.003zM5.835 4h12.331l1.637 9H4.198l1.637-9zM4 19v-4h16l.002 4H4z\"></path><path d=\"M17 16h2v2h-2zm-3 0h2v2h-2z\"></path></svg>"
                }
            ]
        }
    ]

document.addEventListener("DOMContentLoaded", function () {
    
    for(section of sections)
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