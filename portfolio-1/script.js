var links=document.getElementsByClassName("links");
var contents=document.getElementsByClassName("contents");

function opentab(tabname){
    for(link of links){
        link.classList.remove("act-link");
    }

    for(content of contents){
        content.classList.remove("act-cont");
    }
    event.currentTarget.classList.add("act-link");
    document.getElementById(tabname).classList.add("act-cont")

}
