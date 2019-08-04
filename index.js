// Code your solution here
function driversWithRevenueOver(drivers, num) {
    return drivers.filter(driver => driver.revenue > num)
}

function driverNamesWithRevenueOver(drivers, num) {
    return drivers.filter(driver => driver.revenue > num)
        .map(driver => driver.name);
}

function exactMatch(drivers, obj) {
    return drivers.filter(driver => {
        for (const key in driver) {
            if (driver[key] === obj[key]) {
                return driver
            }
        }
    })
}
function exactMatchToList(drivers, obj) {
    return drivers.filter(driver => {
        for (const key in driver) {
            if (driver[key] === obj[key]) {
                return driver
            }
        }
    }).map(driver => driver.name)
}