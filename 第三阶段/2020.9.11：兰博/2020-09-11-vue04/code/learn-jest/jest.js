function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }
  module.exports = forEach;
//   let items = [
//       'jest',
//       'typeScript',
//       'vue',
//       'vue-cli'
//   ]
//   forEach(items,(data)=>{
//     return data+1
//   })