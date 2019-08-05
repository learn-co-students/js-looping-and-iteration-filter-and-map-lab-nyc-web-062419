// Code your solution here:
function driversWithRevenueOver(arr, revenue) {
  return arr.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driver, revenue) {
  return driversWithRevenueOver(driver, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(driver, attr) {
  return driver.filter(function(driver) {
    let matches = false;
    for (const key in attr) {
      matches = attr[key] === driver[key];
    }
    return matches;
  });
}

function exactMatchToList(driver, attr) {
  return exactMatch(driver, attr).map(function(driver) {
    return driver.name;
  });
}
