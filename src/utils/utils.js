export const MONTH= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];

export const calculateLoyaltyPoints = (amount) => {
    let number = Math.trunc(amount);
    let doublePointsBase = Math.max(number - 100, 0);
    let singlePointsBase = Math.max(number - doublePointsBase - 50, 0);

    return ((doublePointsBase * 2) + singlePointsBase);
};

const locale  = {
    US: 'en-US',
    DE: 'en-DE',
    GB: 'en-GB'
};

export const formatPriceUSD = (amount) => {
    return new Intl.NumberFormat(locale.US, { style: "currency", currency: 'USD' })
        .format(
            amount,
        )
};

