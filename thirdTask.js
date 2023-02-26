export class Product {
  name;
  price;
  quantity;
  description;

  constructor(name, price, quantity, description) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }
}

const getObjRequest = (request) => {
  const objRequest = {};
  const arrRequest = request.split("&");
  const regexpForString = /(\w+)-(\w+)-(\w+)/;
  const regexpForNum = /(\w+)-([=<=>=><]+)(\S+)/;
  for (const condition of arrRequest) {
    isNaN(condition.at(-1))
      ? decomposeArrRequest(objRequest, condition, regexpForString)
      : decomposeArrRequest(objRequest, condition, regexpForNum);
  }
  return objRequest;
};

const decomposeArrRequest = (obj, string, regexp) => {
  obj[string.match(regexp)[1]] = {
    operator: string.match(regexp)[2],
    value: string.match(regexp)[3],
  };
};

const filterProducts = (product, objRequest) => {
  let result = [];
  for (const position of Object.keys(objRequest)) {
    switch (objRequest[position].operator)  {
      case 'contains':
        result.push(product[position].includes(objRequest[position].value));
        break;
      case 'starts':
        result.push(product[position].startsWith(objRequest[position].value));
        break;
      case 'ends':
        result.push(product[position].endsWith(objRequest[position].value));
        break;
      case '=':
        result.push(product[position] === (objRequest[position].value));
        break;
      case '>':
        result.push(product[position] > (objRequest[position].value));
        break;
      case '<':
        result.push(product[position] < (objRequest[position].value));
        break;
      case '>=':
        result.push(product[position] >=(objRequest[position].value));
        break;
      case '<=':
        result.push(product[position] <=(objRequest[position].value));
        break;
    }
  }
  return !result.includes(false);
};

export const getProducts = (arr, request) => {
  const objRequest = getObjRequest(request);
  return arr.filter((product) => filterProducts(product, objRequest));

};
