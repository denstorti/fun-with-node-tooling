// https://medium.com/javascript-scene/3-different-kinds-of-prototypal-inheritance-es6-edition-32d777fa16c9

import Events from 'eventemitter3';

const modelMixin = Object.assign({
  attrs: {},
  set (name, value) {
    this.attrs[name] = value;

    this.emit('change', {
      prop: name,
      value: value
    });
  },

  get (name) {
    return this.attrs[name];
  }
}, Events.prototype);


const george = { name: 'george' };
const model = Object.assign(george, modelMixin);
console.log(model);
debugger;
model.on('change', data => console.log(data));

model.set('name', 'Sam');
/*
{
  prop: 'name',
  value: 'Sam'
}
*/
