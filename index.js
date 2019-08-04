// Code your solution here:

function driversWithRevenueOver (drivers, revenue) {
    return drivers.filter( driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver (drivers, revenue) {
    return drivers.filter( driver => driver.revenue > revenue).map( driver => driver.name)
}

function exactMatch (drivers, object) {
    return drivers.filter( driver => driver[Object.keys(object)[0]] === object[Object.keys(object)[0]])
}

function exactMatchToList (drivers, object) {
    return exactMatch(drivers, object).map( driver => driver.name )
}