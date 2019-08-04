// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
    return drivers.filter(function(driver) {
        return driver.revenue > revenue
    })
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map (function(driver){ 
        return driver.name
    })
}

function exactMatch(drivers, info) {
    return drivers.filter(function(driver) {
        let match = false;
        for (const key in info) {
            match = driver[key] === info[key]
        }
        return match
    })
}   

function exactMatchToList(drivers, info) {
    return exactMatch(drivers, info).map(function(driver){
        return driver.name
    })
}