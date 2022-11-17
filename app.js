let paragraphs = document.querySelectorAll("p");
let span = document.querySelectorAll("span");
let a = document.querySelectorAll("a");

for (let i = 0; i < paragraphs.length ;i++) {
    paragraphs.item(i).style.color = "blue";
    paragraphs.item(i).style.width = "75%";
}

for (let i = 0; i < span.length; i++) {
    span.item(i).style.backgroundColor = "white";
    span.item(i).style.direction = "rtl";
}

for (let i = 3; i < paragraphs.length ;i++) {
    paragraphs.item(i).style.animationName = "paragraphe";
}

for (let i = 4; i < paragraphs.length ;i++) {
    paragraphs.item(i).innerText = "Bonjour";
}

for (let i = 0; i < a.length ;i++) {
    a.item(i).innerText = "coucou";
    a.item(i).href = "https://www.google.com";
}


console.log(a);
console.log(paragraphs);
console.log(span);