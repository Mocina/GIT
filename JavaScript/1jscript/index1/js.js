let x = prompt("Введите первое число: ")
let y = prompt("Введите второе число: ")
if(x%y == 0){
    document.write(x + " : " + y + " = " + x/y + "<br>" + "Остатка от деления нет :(")
}
if(x%y > 0){
    document.write(x + " : " + y + " = " + x/y + "<br>" + "Остаток от деления = " + x%y)
}