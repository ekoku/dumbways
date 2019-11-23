function cetak(count) {
  var items = [];

  while(count > 0 ){
  	var item = generateRandomString();
    if(!items.includes(item)){
    	items.push(item);
      console.log(item);
    count--;
    }
  }
}

function generateRandomString(){
  const character = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var maxLength = 16;
  var randomString = '';

  for(var i = 0; i <= maxLength; i++) {
   	var indexGen = Math.floor(Math.random() * character.length);
    randomString += character[indexGen];
  }

  return randomString;
}
console.log(cetak(3));