function f1(input) {
    if(input%2 == 0){
        document.querySelector("#task1").textContent = "Чётное."
    }else{
        document.querySelector("#task1").textContent = "Нечётное."
    }
    if(input == ""){
        document.querySelector("#task1").textContent = ""
    }
}




function f2(input2){
    if(input2*0 == 0){
        document.querySelector("#task2").textContent = "Это число."
    }
    if(input2*0 != 0){
        document.querySelector("#task2").textContent = "Это строка."
    }
    if(input2 == ""){
        document.querySelector("#task2").textContent = ""
    }
}




function f3(input3){
    
}




function f4(input4){
    if(input4 == "5"){
        document.querySelector("#task4").textContent = "Отлично"
    }
    if(input4 == "4"){
        document.querySelector("#task4").textContent = "Хорошо"
    }
    if(input4 == "3"){
        document.querySelector("#task4").textContent = "Удовлетворительно"
    }
    if(input4 == "2"){
        document.querySelector("#task4").textContent = "Неудовлетворительно"
    }
    if(input4 != "5" && input4 != "4" && input4 != "3" && input4 != "2"){
        document.querySelector("#task4").textContent = "Неверная оценка"
    }
    if(input4 == ""){
        document.querySelector("#task4").textContent = ""
    }
}//Я знаю что можно input4 можно было там сделать числом Number() или + но я захотел так
//просто я не хотел забывать про && и ||...




function f5(input5){

}




function f6(input6, num){
    for(let i = 0; i <= num; i++){
        document.querySelector("#task6").textContent = 
    }
}