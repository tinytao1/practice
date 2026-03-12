console.log(5);


const s1 = {
  name : '',
  count : 0,
  limit : null,
  items : [], // [ this.item1, this.item2, this.item3, this.item4, this.item5, this.item6, this.item7, this.item8, ],
  limit_reached : false,
  title : document.querySelector('#s1-title'),
  choose : document.querySelector('#s1-choose-amount'),
  // counter : document.querySelector('#s1c'),

  item1 : {
    //__proto__: itemMethods,
    //get section() { return s1; }, 
    name : '',
    count : 0,
    limit : null,
    selected : false,
    limit_reached : false,
    button : document.querySelector('#s1-1'),
    counter : document.querySelector('#s1-1c'),
  },

  item2 : {
    //__proto__: itemMethods,
    //get section() { return s1; }, 
    name : '',
    count : 0,
    limit : null,
    selected : false,
    limit_reached : false,
    button : document.querySelector('#s1-2'),
    counter : document.querySelector('#s1-2c'),
  },

  item3 : {
    //__proto__: itemMethods,
    //get section() { return s1; }, 
    name : '',
    count : 0,
    limit : null,
    selected : false,
    limit_reached : false,
    button : document.querySelector('#s1-3'),
    counter : document.querySelector('#s1-3c'),
  },
};



