function search(nameKey, myArray) {
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].id === nameKey) {
      return myArray[i];
    }
  }
}

module.exports.search = search