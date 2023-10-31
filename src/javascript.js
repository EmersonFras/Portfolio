const container = document.querySelectorAll("#line");

container.forEach((element, index) => {
    const para = document.createElement("p");
    const lineNumber = index + 1;
    para.innerHTML = `&nbsp;${lineNumber < 10 ? ` ${lineNumber}` : lineNumber}`;
    para.classList.add("number"); // add class "number" to the paragraph
    element.insertBefore(para, element.firstChild);
});

const content = document.querySelector("#includedContent");
$(function(){
    content.load("Etch-a-Sketch/index.html"); 
});