const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let a = arrayOfString;
  if (a==null || a==undefined){
    return undefined;
  }else if(a.length ==1){
    return a
  }else {
    let a = [arrayOfString[0]];
    let b = arrayOfString[0];
    for (i = 0; i < arrayOfString.length; i++) {
      if (i + 1 < arrayOfString.length) {
        if (b.length < arrayOfString[i + 1].length) {
          b = arrayOfString[i + 1];
          a = [];
          a = [arrayOfString[i + 1]];
        } else if (b.length == arrayOfString[i + 1].length) {
          a.push(arrayOfString[i + 1]);
        }
      }
    }
    return a;
}
}
module.exports = getMaxLengthString

// #### ให้เขียน Function ชื่อ getMaxLengthString (arrayOfString) เพื่อ return array ของ String เฉพาะที่มีความยาวของจำนวนตัวอักษรมากที่สุด
//  กรณี arrayOfString มีค่าเป็น null หรือ undefined ให้ return undefined

// - ตัวอย่างเช่น
//   1. getMaxLengthString(['hello', 'hi', 'hey']) return ['hello']
//   2. getMaxLengthString(['hello', 'hi', 'hey', 'Good Evening', 'Good Morning']) return ['Good Evening', 'Good Morning']
//   3. getMaxLengthString(['hi']) return ['hi']
//   4. getMaxLengthString(null) return undefined
//   5. getMaxLengthString(undefined) return undefined