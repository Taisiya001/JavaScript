//Задание 1
//Создать переменные num1, num2 которые пользователь 
//вводит с клавиатуры
//Проверьте, что переменная num1 равна или меньше 1, 
//а переменная num2 больше или равна 3.
let num1 = prompt("Введите первое число");
let num3 = prompt("Введите второе число");
if(num1 <=1){
    alert("Yes,num1 = or < 1")
}else{
    alert("No")
}
if(num3 => 3){
    alert("Yes,num3 > or = 3")
}else{
    alert("No')")
}
//Задание 2
//Перепишите код к тернарному оператору
//let test = true;
//if (test === true) {
//console.log('+++');
//} else {
//console.log('---');
//}
let test = true ? "+++" : "---";
console.log(test);
//Задание 3
//В переменной day лежит какое-то число из интервала от 1 до 31. 
//Определите в какую декаду месяца попадает это число
//(в первую, вторую или третью).
let day = prompt("Введите число от 1 до 31");
if(day => 10){
    alert("First decada");
}if(10 <= day <= 20){
    alert("Second decada");
}if(20 <= day <= 31){
    alert("Third decada");
}
//Задание 4
//Необходимо от пользователя получить число.
//Необходимо вывести разряды числа, 
//а именно: количество сотен, десятков и единиц.
let num = promt("Введите число");
let units = num % 10;
let tenth = num / 10 % 10;
let hundred = num / 100 % 10;
console.log('В числе ${num} количество сотен ${hundred}, десятков: ${tens}, единиц: ${units}')