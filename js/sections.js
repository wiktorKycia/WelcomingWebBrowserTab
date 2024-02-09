// side-section class
class SideSection
{
    constructor()
    {
        this.template = document.querySelector("#side-section").content.cloneNode(true);
        console.log(this.template);
    }
}
let sekcja = new SideSection();