$(document).ready(function(){
let body = $("body");
let divMain = $("<div>").addClass("container");
let main = $("<main>").addClass("jumbotron my-4");
let footer = $("<footer>");

// Header & nav
let header = $("<header>");
let nav = $("<nav>").addClass("navbar navbar-expand-lg navbar-dark bg-dark fixed-top");

// Centralizing header nav
let divNav = $("<div>").addClass("container");

// Creating nav title/logo
let divStart = $("<div>");
let navTitle = $("<a>").attr({
    class:"navbar-brand",
    href: "#"
}).text("Start Bootstrap");
divStart.append(navTitle);

// Creating nav right links
let divUl = $("<div>").addClass("collapse navbar-collapse");
let ulList = $("<ul>").addClass("navbar-nav ml-auto");
divUl.append(ulList);

// Object for nav right links
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


// Function for nav right links
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

//Warm Welcome section
let h1Warm= $("<h1>").addClass("display-3").text("A Warm Welcome!");
let pWarm = $("<p>").addClass("lead").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.");
let aBtn = $("<a>").addClass("btn btn-primary btn-lg").attr("href", "#").text("Call to action!");
main.append(h1Warm, pWarm, aBtn);

// Object for card section

let cardForms =[{
    title:"Card title 1",
    img: "http://placehold.it/500x325",
    cardText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
    buttonTitle:"Find Out More!",
    buttonLink:"#"
},{
    title:"Card title 2",
    img: "http://placehold.it/500x325",
    cardText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
    buttonTitle:"Find Out More!",
    buttonLink:"#"
},{
    title:"Card title 3",
    img: "http://placehold.it/500x325",
    cardText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
    buttonTitle:"Find Out More!",
    buttonLink:"#"
},{
    title:"Card title 4",
    img: "http://placehold.it/500x325",
    cardText:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
    buttonTitle:"Find Out More!",
    buttonLink:"#"
}];

let divCardRow = $("<div>").addClass("row text-center");

// Function for card section

cardForms.forEach(function(cardForm){
    let divCardMain = $("<div>").addClass("col-lg-3 col-md-6 mb-4");
    let divCardContent = $("<div>").addClass("card h-100");
    let cardImage = $("<img>").addClass("card-img-top").attr("src", cardForm.img);
    divCardContent.append(cardImage);

    let divCardBody = $("<div>").addClass("card-body");
    let divCardTitle = $("<h4>").addClass("card-title").text(cardForm.title);
    let cardDescribtion = $("<p>").addClass("card-text").text(cardForm.cardText);
    divCardBody.append(divCardTitle, cardDescribtion);
    divCardContent.append(divCardBody);
    
    let divCardFooter = $("<div>").addClass("card-footer");
    let cardButton = $("<a>").addClass("btn btn-primary").attr("href",cardForm.buttonLink).text(cardForm.buttonTitle);

    divCardFooter.append(cardButton);
    divCardContent.append(divCardFooter);
    divCardMain.append(divCardContent);
    divCardRow.append(divCardMain);
});

divMain.append(main, divCardRow);

// Footer Section
footer.addClass("py-5 bg-dark");
let divFooter = $("<div>").addClass("container");
let pFooter = $("<p>").addClass("m-0 text-center text-white").text("Copyright © Your Website 2019");

// Additional appends
footer.append(divFooter, pFooter);
divNav.append(divStart,divUl);
nav.append(divNav);
header.append(nav);
body.append(header, divMain, footer);

});