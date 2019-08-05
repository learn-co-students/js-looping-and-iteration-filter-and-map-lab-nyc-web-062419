// Code your solution here:
function driversWithRevenueOver(drivers, num) {
  return drivers.filter(d => d.revenue > num);
}
function driverNamesWithRevenueOver(drivers, num) {
  let richDrivers = drivers.filter(d => d.revenue > num);
  return richDrivers.map(d => d.name);
}
function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    let matches = false;

    for (let key in obj) {
      matches = driver[key] === obj[key];
    }
    return matches;
  });
}

function exactMatchToList(drivers, obj) {
  matchedDrivers = exactMatch(drivers, obj);
  return matchedDrivers.map(d => d.name);
}

let drivers = [
  { name: "Sally", revenue: 400 },
  { name: "Annette", revenue: 200 },
  { name: "Jim", revenue: 150 }
];

console.log(exactMatchToList(drivers, { revenue: 200 }));
