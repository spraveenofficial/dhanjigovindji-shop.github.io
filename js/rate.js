fetch('https://test.1ounce.in/')
    .then(res => res.json())
    .then((rates) => {
        flactuatedRateInGold22 = 1114;
        flactuatedRateInGold24 = 2758;
        gold22data = rates.gold22*10;
        gold24data = rates.gold24*10;
        silver = rates.silver*1000;
        price = gold22data.toFixed(0).toLocaleString("en-IN");
        price1 = gold24data.toFixed(0).toLocaleString("en-IN");
        price2 = silver.toFixed(2).toLocaleString("en-IN");
        // console.log(price, price1, price2);
        $("#rates").text("Rs."+ price)
        $("#rates1").text("Rs."+ price1)
        $("#rates2").text("Rs."+ price2)
})
