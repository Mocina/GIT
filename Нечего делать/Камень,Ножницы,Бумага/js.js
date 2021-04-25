let player = prompt("1 - Ножницы, 2 - Бумага, 3 - Камень")
let bot = 3
document.write("1 - Ножницы, 2 - Бумага, 3 - Камень<br>")

//Пишем для игрока

if(player == 1){
    document.write("Вы выбрали Ножницы<br>")
}
if(player == 2){
    document.write("Вы выбрали Бумагу<br>")
}
if(player == 3){
    document.write("Вы выбрали Камень<br>")
}
if(player < 1 || player > 3){
    document.write("Низя больше 3 или меньше 1...")
}

//Теперь пишем для бота

if(bot == 1){
    document.write("Бот выбрал Ножницы<br>")
}
if(bot == 2){
    document.write("Бот выбрал Бумагу<br>")
}
if(bot == 3){
    document.write("Бот выбрал Камень<br>")
}

//Пишем код самого камня ножницы бумага

if(bot == 1 && player == 3){
    document.write("Вы победили!")
}
if(bot == 1 && player == 2){
    document.write("Победил Бот.")
}
if(bot == 1 && player == 1){
    document.write("Ничья.")
}
if(bot == 2 && player == 3){
    document.write("Победил Бот.")
}
if(bot == 2 && player == 2){
    document.write("Ничья.")
}
if(bot == 2 && player == 1){
    document.write("Вы победили!")
}
if(bot == 3 && player == 3){
    document.write("Ничья.")
}
if(bot == 3 && player == 2){
    document.write("Вы победили!")
}
if(bot == 3 && player == 1){
    document.write("Победил Бот.")
}