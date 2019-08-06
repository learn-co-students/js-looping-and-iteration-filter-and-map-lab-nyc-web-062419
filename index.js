// Code your solution here:
function driversWithRevenueOver(array, num) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].revenue > num) {
            newArr.push(array[i]);
        }
      }
      return newArr
}

function driverNamesWithRevenueOver(array, num) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].revenue > num) {
            newArr.push(array[i].name);
        }
      }
      return newArr
}

function exactMatch(array, obj) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === obj.name) {
            newArr.push(array[i]);
        } else if (array[i].revenue === obj.revenue) {
            newArr.push(array[i]);
        }
      }
      return newArr
}

function exactMatchToList(array, obj) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === obj.name) {
            newArr.push(array[i].name);
        } else if (array[i].revenue === obj.revenue) {
            newArr.push(array[i].name);
        }
      }
      return newArr
}