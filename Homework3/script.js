//Задание 1
//Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
//0 – это ноль
//1 – нечетное число
//2 – четное число
//3 – нечетное число
//…
//10 – четное число
for (let i = 0; i < 11; i++) {
    if(i == 0){
        console.log('${i} - это ноль');
    }else if(i % 2 == 0){
        console.log('${i} - четное число');
    }else{
        console.log('${i} - нечетное число')
    }
}
//Задание 2
//Дан массив [1, 2, 3, 4, 5, 6, 7]
//Сделайте из этого массива следующий [1, 2, 3, 6, 7]
arrayFirst = [1, 2, 3, 4, 5, 6, 7];
let arrayLast = arrayFirst.pop();
arrayFirst.pop();
arrayFirst.pop();
arrayFirst.push(arrayLast);
console.log(arrayFirst);
//Задание 3
//Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
//1. Рассчитать сумму элементов этого массива
//2. Найти минимальное число
//3. Найти есть ли в этом массиве число 3
const array = [];
for (let i = 0; i < 5; i++) {
  array[i] = Math.floor(Math.random() * (10 - 1) + 1);
}
console.log(array);

let sumArr = 0;
let minNum = array[0];

for (let i = 0; i < array.length; i++) {
  sumArr += array[i];
  if (minNum > array[i]) {
    minNum = array[i];
  }
}
console.log(`Сумма элементов массива = ${sumArr}`);
console.log(`Минимальное число в массиве - ${minNum}`);
if (array.indexOf(3) !== -1) {
  console.log("Число 3 есть в массиве.");
} else {
  console.log("Числа 3 нет в массиве.");
}
