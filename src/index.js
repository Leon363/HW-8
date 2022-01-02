console.log("script launched");
let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let detailsName = document.querySelector(".details-name")
let anchors = document.querySelectorAll(".thumbnails-anchor");
for(let i = 0; anchors.length; i++){
    anchors[i].addEventListener("click", function(event){
        event.preventDefault();
        console.log(anchors[i].getAttribute("href"));
        setDetails(anchors[i]);
    })
}
function setDetails(anchor){
    console.log("anchor element was pressed", anchor);
    detailsImage.setAttribute("src", anchor.getAttribute("href"));
    detailsTitle.textContent = anchor.getAttribute("data-details-title");
  
    
for(let i = 0; span.length; i++){
    span[i].addEventListener("click", function(event){
        event.preventDefault();
        console.log(span[i].getAttribute1("href"));
        setDetails(span[i]);
    })
}    
}
// function setDetails(span){
//     console.log("span element", span);
//     detailsImage.setAttribute1("src", span.getAttribute1("href"));
//     thumbnails-title.textContent = span.getAttribute1("data-details-name");

// }