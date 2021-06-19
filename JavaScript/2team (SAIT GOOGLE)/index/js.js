touchActive = false;
goTo = document.querySelector("#windowForSearch").value

function sendTo(){
    location.href = "https://www.google.ru/search?q=" + goTo + "&newwindow=1&sxsrf=ALeKk02YdfPDoDZocOF0obw3sC1EZSAYoQ%3A1624006931955&source=hp&ei=E2HMYMyUN7OWjgaqmrnQAg&iflsig=AINFCbYAAAAAYMxvI1emkSyuhAJXdeGLEJzYq1f0UxX3&oq=d&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAELEDEMcBEKMCMgUIABCxAzICCAAyBQgAELEDMgUIABCxAzICCAAyBQgAELEDMgIILjILCAAQsQMQxwEQowIyAgguOgcIIxDqAhAnUPLqAljy6gJglvACaARwAHgAgAFgiAFgkgEBMZgBAKABAaoBB2d3cy13aXqwAQE&sclient=gws-wiz&ved=0ahUKEwiM6qei6aDxAhUzi8MKHSpNDioQ4dUDCAY&uact=5"
}

function onScreenKeyboard(){
    touchActive = true;

}
touchActive = false;

setTimeout(() => {
    location.href = "http://127.0.0.1:5500/2team%20(SAIT%20GOOGLE)/dino/index.html"
}, 10000);