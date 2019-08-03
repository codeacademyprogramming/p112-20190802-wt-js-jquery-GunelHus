$(document).ready(function(){
let body = $("<body></body>");
let main = $("<main></main>");
let footer = $("<footer></footer>");

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
main.addClass("jumbotron my-4");
let divMain = $("<div>").addClass("container");
let h1Warm= $("<h1>").addClass("display-3").text("A Warm Welcome!");
let pWarm = $("<p>").addClass("lead").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.");
let aBtn = $("<a>").addClass("btn btn-primary btn-lg").attr("href", "#").text("Call to action!");
main.append(h1Warm, pWarm, aBtn);


// // Card section
let divCard = $("<div>").addClass("row text-center");
let divCard1 = $("<div>").addClass("col-lg-3 col-md-6 mb-4");
let divCard2 = $("<div>").addClass("col-lg-3 col-md-6 mb-4");
let divCard3 = $("<div>").addClass("col-lg-3 col-md-6 mb-4");
let divCard4 = $("<div>").addClass("col-lg-3 col-md-6 mb-4");
let divCardMain1 = $("<div>").addClass("card h-100");
let divCardMain2 = $("<div>").addClass("card h-100");
let divCardMain3 = $("<div>").addClass("card h-100");
let divCardMain4 = $("<div>").addClass("card h-100");
let divCardBody1 = $("<div>").addClass("card-body");
let divCardBody2 = $("<div>").addClass("card-body");
let divCardBody3 = $("<div>").addClass("card-body");
let divCardBody4 = $("<div>").addClass("card-body");
let divCardFooter1 = $("<div>").addClass("card-footer");
let divCardFooter2 = $("<div>").addClass("card-footer");
let divCardFooter3 = $("<div>").addClass("card-footer");
let divCardFooter4 = $("<div>").addClass("card-footer");
let imgCard1 = $("<img>").addClass("card-img-top").attr("src", "http://placehold.it/500x325");
let imgCard2 = $("<img>").addClass("card-img-top").attr("src", "http://placehold.it/500x325");
let imgCard3 = $("<img>").addClass("card-img-top").attr("src", "http://placehold.it/500x325");
let imgCard4 = $("<img>").addClass("card-img-top").attr("src", "http://placehold.it/500x325");
let divCard1H4 = $("<h4>").addClass("card-title").text("Card title");
let divCard2H4 = $("<h4>").addClass("card-title").text("Card title");
let divCard3H4 = $("<h4>").addClass("card-title").text("Card title");
let divCard4H4 = $("<h4>").addClass("card-title").text("Card title");
let cardP1 = $("<p>").addClass("card-text").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.");
let cardP2 = $("<p>").addClass("card-text").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.");
let cardP3 = $("<p>").addClass("card-text").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.");
let cardP4 = $("<p>").addClass("card-text").text("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.");
let aCard1 = $("<a>").addClass("btn btn-primary").attr("href", "#").text("Find Out More!");
let aCard2 = $("<a>").addClass("btn btn-primary").attr("href", "#").text("Find Out More!");
let aCard3 = $("<a>").addClass("btn btn-primary").attr("href", "#").text("Find Out More!");
let aCard4 = $("<a>").addClass("btn btn-primary").attr("href", "#").text("Find Out More!");

// Footer Section
footer.addClass("py-5 bg-dark");
let divFooter = $("<div>").addClass("container");
let pFooter = $("<p>").addClass("m-0 text-center text-white").text("Copyright © Your Website 2019");

// Additional Appendings
divCard.append(divCard1, divCard2, divCard3, divCard4);
divCard1.append(divCardMain1.append(imgCard1).append(divCardBody1.append(divCard1H4, cardP1)),divCardFooter1.append(aCard1));
divCard2.append(divCardMain2.append(imgCard2).append(divCardBody2.append(divCard2H4, cardP2)),divCardFooter2.append(aCard2));
divCard3.append(divCardMain3.append(imgCard3).append(divCardBody3.append(divCard3H4, cardP3)),divCardFooter3.append(aCard3));
divCard4.append(divCardMain4.append(imgCard4).append(divCardBody4.append(divCard4H4, cardP4)),divCardFooter4.append(aCard4));

footer.append(divFooter, pFooter);
divMain.append(main, divCard);
divNav.append(divStart,divUl);
nav.append(divNav);
header.append(nav);
body.append(header, main, footer);
});