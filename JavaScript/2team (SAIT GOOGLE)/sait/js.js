touchActive = false;
goTo = document.querySelector("#windowForSearch").value

function sendTo(){
    location.href = "https://www.google.ru/search?q=" + goTo + "&newwindow=1&sxsrf=ALeKk033kfCziFE-5SvNvJLM8u7nfAWDuw%3A1621142073138&source=hp&ei=OaqgYK_YBcnrrgT3y5-IBA&iflsig=AINFCbYAAAAAYKC4SebT2MywWK04YmNa_NQ-nIZNGhVg&oq=d&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgjECcyBAgAEEMyBAguEEMyAggAMgsIABCxAxDHARCjAjIFCAAQsQMyBQgAELEDMgUIABCxAzICCAA6BwgjEOoCECdQ7Q1Y7Q1gkB5oAXAAeACAAYQBiAGEAZIBAzAuMZgBAKABAaoBB2d3cy13aXqwAQo&sclient=gws-wiz&ved=0ahUKEwjv2JbruM3wAhXJtYsKHfflB0EQ4dUDCAY&uact=5"
}

function onScreenKeyboard(){
    touchActive = true;

    
}
touchActive = false;

//setTimeout(() => {
//    location.href = "http://127.0.0.1:5500/2team%20(SAIT%20GOOGLE)/dino/index.html"
//}, 10000);