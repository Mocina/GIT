let x = prompt("Чему равно x? : ")
if(x > 0){
    document.write("2 * " + x + " - 10 " + " = " + (2*x-10))
}
if(x == 0){
    document.write("2 * " + x + " - 10 " + " = " + (2*x-10))
}
if(x < 0){
    if(x < 0){
        x = x*(-1)
    }
    document.write("2 * " + x + " - 1 " + " = " + (2*x-1))
}