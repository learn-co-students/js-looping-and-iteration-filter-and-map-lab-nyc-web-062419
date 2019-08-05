
 
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(d) {
        return d.revenue > revenue;
    })
}

function driverNamesWithRevenueOver(drivers, revenue) {
    return driversWithRevenueOver(drivers, revenue).map(function(d) {
        return d.name;
    })
}

//struggled with this one ^^^
//and this one vvv

function exactMatch(drivers, match) {
    return drivers.filter(function (d) {
        let matches;
        for (const key in match) {
            if (d[key] === match[key]) {
                matches = d[key];
            } else {
                let matches = [];
            }
        }
        return matches;
    });
}

function exactMatchToList(drivers, match) {
    return exactMatch(drivers, match).map(function (d) {
        return d.name;
    });
}