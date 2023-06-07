export const calculateLoyaltyPoints = (amount) => {

    let number = Math.trunc(Number(amount.replace(/[^0-9\.-]+/g, "")));
    let doublePointsBase = number >= 100 ? (number - 100) : 0;
    let singlePointsBase = (number >= 50) ? (number - doublePointsBase - 50) : 0;
    console.log(`number ${number}, doublePointsBase ${doublePointsBase}, singlePointsBase ${singlePointsBase}`)

    return ((doublePointsBase * 2) + singlePointsBase);
}

// module.exports.calculateLoyaltyPoints = calculateLoyaltyPoints;