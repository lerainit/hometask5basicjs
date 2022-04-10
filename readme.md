## Метод обьекта

</hr>

Методы - это действия, которые можно выполнять над объектами. 
 - это свойство, содержащее определение функции. 
 - это функции, хранящиеся в виде свойств объекта.
 
```js

const physician = {

firstName:'John',

lastName:'Smith',

medicalField:'surgeon',


sayHi(){
return `Hello , My name is ${this.firstname} ${this.lastName}. I am ${this.medicalField}`

},


}

 console.log(physician.sayHi()). // Hello, my name is John Smith. I am a surgeon

```


## Тип данных значений свойств обьекта

</hr>

Свойства обьекта могут иметь зачения любого типа данных.

```js

 let ivan = {

name: 'Ivan',

surname:'Demydenko',

age:30,

spouse : {
name:'Marina',
surname:'Matvienko',
age:29,

},


 }


console.log(typeof ivan.name);// string

console.log(typeof ivan.age);// number

console.log(typeof ivan.spouse);// object

```
## Обьект как ссылочный тип данных

Когда мы обращаемя к обьекту, то мы получаем не непосредственно его содержимое, а ссылку на ячейку памяти где хранится данный обьект.




