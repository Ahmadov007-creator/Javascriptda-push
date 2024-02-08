function addText() {
    var text = document.getElementById("wordInput").value;
    var elInp = document.getElementById("wordInput");
    var position = document.getElementById("positionInput").value;
    var h1Element = document.getElementById("text");

    if (position.toLowerCase() === "boshiga") {
        h1Element.textContent = text + " " + h1Element.textContent;
    } else if (position.toLowerCase() === "ohiriga") {
        h1Element.textContent += " " + text;
    } else {
        alert("Noto'g'ri so'z kiritildi. Iltimos, 'boshiga' yoki 'ohiriga'ni kiriting.");
    }
    elInp.value = ''
    elInp.focus()
}
setTimeout(() => {
    let loader = document.queryader_boSelector('.lox')
    loader.style.height = 0
}, 4000)

setTimeout(() => {
    let loader = document.querySelector('.loader_box')
    loader.style.display = "none"
}, 4000)
