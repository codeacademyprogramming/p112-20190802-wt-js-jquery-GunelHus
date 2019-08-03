$(document).ready(function(){
let body = $("body");

// header & nav
let header = $("<header>");
let nav = $("<nav>").addClass("navbar navbar-expand-lg navbar-dark bg-dark fixed-top");

// centralizing header nav
let divNav = $("<div>").addClass("container");

// creating nav title/logo
let divStart = $("<div>");
let navTitle = $("<a>").attr({
    class:"navbar-brand",
    href: "#"
}).text("Start Bootstrap");
divStart.append(navTitle);

// creating nav right links
let divUl = $("<div>").addClass("collapse navbar-collapse");
let ulList = $("<ul>").addClass("navbar-nav ml-auto");
divUl.append(ulList);

// object for nav right links
let navLinks = [{
    title:"Home",
    href:"#",
    className: "nav-item active nav-link"
},{
    title:"About",
    href:"#",
    className: "nav-item nav-link"
},{
    title:"Services",
    href:"#",
    className: "nav-item nav-link"
},{
    title:"Contact",
    href:"#",
    className: "nav-item nav-link"
}];


// function for nav right links
navLinks.forEach(function(navLink, index){
    let liClass = "nav-item";
    
    if(index == 0){
        liClass += " active";
    }

    let navLiElm = $("<li>").attr({class: liClass});

    let navLinkElement = $("<a>").attr({
        href : navLink.href,
        class : navLink.className
    }).text(navLink.title);

    navLiElm.append(navLinkElement);

    ulList.append(navLiElm);
});

// Welcome part



let main = $("<main></main>");
let footer = $("<footer></footer>");




divNav.append(divStart,divUl);
nav.append(divNav);
header.append(nav);
body.append(header,main,footer);
});