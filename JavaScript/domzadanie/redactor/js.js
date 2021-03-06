function qwe(key) {
    console.log(key)
    key = key.key
    let text = document.querySelector("#text")
    text.textContent += key
    if(key == "Backspace"){
        this.remove(key[-1])
    }
    if(key == "Enter"){
        text.textContent += "<br>"
    }
    if(key == "Delete"){
        text.textContent = ""
    }
    if(key == "End"){
        text.textContent = ""
    }
    if(key == ""){
        text.textContent += ""
    }
}