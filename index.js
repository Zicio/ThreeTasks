import StringManager from "./firstTask.js";
import Calculator from "./secondTask.js";
import {getProducts, Product} from "./thirdTask.js";


//Task #1
console.log(StringManager.getLowerCase("ABsCd"));
console.log(
  StringManager.fixWhitespace(
    "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены."
  )
);
console.log(
  StringManager.getNumberOfWords(
    "Вот пример строки, в которой используются знаки препинания."
  )
);
console.log(
  StringManager.getINumberOfUniqueWords(
    "Текст, в котором слово текст несколько раз встречается и слово тоже"
  )
);


//Task #2
console.log(Calculator.add(89476546456834756834456534456847645473446753688546846465748768876768794955456679568797567889, 2));


//Task #3
const arr = [];
const firstProduct = new Product("apple", 70, 4, "fruit");
const secondProduct = new Product("carrot", 30, 3, "vegetable");
arr.push(firstProduct, secondProduct);

console.log(getProducts(arr, "name-contains-fd&price-=2&quantity->5&description-ends-abc"));
console.log(getProducts(arr, "quantity->=2"));
console.log(getProducts(arr, "price-<=30&description-contains-eg"));
