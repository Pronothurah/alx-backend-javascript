import Currency from './3-currency';

const dollar = new Currency('$', 'Dollars');
const pound = new Currency('&', 'Pounds');
console.log(dollar.displayFullCurrency());
console.log(pound.displayFullCurrency());
