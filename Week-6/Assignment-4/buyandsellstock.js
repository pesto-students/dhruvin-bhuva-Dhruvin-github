function bestTimeToBuyAndSellStock(prices){

    var minPrice = Math.min(...prices);

    var minPriceIndex = prices.indexOf(minPrice);

    var subArrayAfterIndex = prices.splice(minPriceIndex,prices.length);

    var maxPrice = Math.max(...subArrayAfterIndex);

    if(maxPrice > minPrice)
    {
        let maxProfit = maxPrice - minPrice;
        console.log(maxProfit)
    }
    else
    {
        console.log('0');
    }


}
bestTimeToBuyAndSellStock([7,1,5,3,6,4]);

bestTimeToBuyAndSellStock([7,6,4,3,1]);


//Time Complexity : O(1)
//Space Complexity : O(1)