class StringBuilder{
  constructor(string) {
    this._value = string;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value += str;
  }
  prepend(str) {
    let srtToArr = this._value.split('');
    srtToArr.unshift(str);
    this._value = srtToArr.join('');
  }
  pad(str) {
    this.append(str);
    this.prepend(str);
  }
  }

 console.log(typeof StringBuilder);
// 'function'


 const builder = new StringBuilder('.');

 builder.append('^^^^');
 console.log(builder.value); // '.^'

 builder.prepend('qwe');
console.log(builder.value); // '^.^'

 builder.pad('=');
 console.log(builder.value); // '=^.^='

