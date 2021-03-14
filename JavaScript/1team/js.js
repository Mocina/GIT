function f1(input){//1 Задание
    if(input%2 == 0){
        document.querySelector("#task1").textContent = "Чётное."
    }else{
        document.querySelector("#task1").textContent = "Нечётное."
    }
    if(input == ""){
        document.querySelector("#task1").textContent = ""
    }
}




function f2(input2){//2 Задание
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




function f3(input3){//3 Задание
    if(input3 == ""){
        document.querySelector("#task3").textContent = ""
    }
}




function f4(input4){//4 Задание
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

let d = b*b-4*a*c;
let x1 = (-b + Math.sqrt(d))/(2*a)
let x2 = (-b - Math.sqrt(d))/(2*a)
let a = Number("#a")
let b = Number("#b")
let c = Number("#c")

function f5(input5){//5 Задание
    if(input5 == "#a"){
        if(input5 == "#b"){
            if(input5 == "#c"){
                document.querySelector("#task5").textContent = "Любое x"
            }else{
                document.querySelector("#task5").textContent = "Нет решений"
            }
        }else{
            document.querySelector("#task5").textContent = "x : = " + -c/b
        }
    }else{
        document.querySelector("#task5").textContent = "d : = " + d
        if(d < 0){
            document.querySelector("#task5").textContent = "Нет вещественных корней"
        }else{
            document.querySelector("#task5").textContent = x1 + ", " + x2
        }
    }
    if(input5 == ""){
        document.querySelector("#task5").textContent = ""
    }
}




function f6(input6){ //6 Задание
    let num = "";
    for(let i = 0; i<"num2"; i++){
        num += "<br>" + "num2";
        document.querySelector("#task6").textContent = num
    }
    if(input7 == ""){
        document.querySelector("#task7").textContent = ""
    }
}




function f7(input7){//7 Задание
    let stroka = "";
    for (let i = 0; i<input7; i++){
    	stroka += "Q";
    	document.querySelector("#task7").innerHTML = stroka + "<br>"
    }
    if(input7 == ""){
        document.querySelector("#task7").textContent = ""
    }
}