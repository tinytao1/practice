
  //    START SECTION 3 CODE 
 const s3 = {
  name : 'Dairy',
  count : 0,
  limit : 2,
  items : [ this.item1, this.item2, this.item3, /*this.item4, this.item5, this.item6, this.item7, this.item8, */],
  limit_reached : false,
  title : document.querySelector('#s3-title'),
  choose : document.querySelector('#s3-choose-amount'),

 item1 : {
  __proto__: itemMethods,
  get section() { return s3; }, 
  name : 'Whole Milk',
  count : 0,
  limit : null,
  selected : false,
  limit_reached : false,
  button : document.querySelector('#s3-1'),
  counter : document.querySelector('#s3-1c'),
},

 item2 : {
  __proto__: itemMethods,
  get section() { return s3; }, 
  name : '2% Milk',
  count : 0,
  limit : null,
  selected : false,
  limit_reached : false,
  button : document.querySelector('#s3-2'),
  counter : document.querySelector('#s3-2c'),
},

 item3 : {
  __proto__: itemMethods,
  get section() { return s3; }, 
  name : 'Fat Free Milk',
  count : 0,
  limit : null,
  selected : false,
  limit_reached : false,
  button : document.querySelector('#s3-3'),
  counter : document.querySelector('#s3-3c'),
},

};

  //    END SECTION 3 CODE 