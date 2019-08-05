// Code your solution here:
function driversWithRevenueOver(driver, revenue){
    return driver.filter(function(driver){
        return driver.revenue > revenue
    }
    )
}