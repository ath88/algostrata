const { differenceAfterYear, differenceAfterYearWithFirstYear, valueAtYearWithStandardDeviation } = require("./index");

const iVal = 1000000;
const returns = 0.05;
const cost1 = 0.02;
const cost2 = 0.01;

{
    const savings = (atYear) => differenceAfterYear(iVal, returns, cost1, cost2, atYear);

    console.log("Calculating example for differenceAfterYear");
    console.log(`initialValue: ${iVal}`);
    console.log(`returnPerYear: ${returns}`);
    console.log(`baseCostPerYear: ${cost1}`);
    console.log(`newCostPerYear: ${cost2}`);

    [0, 1, 3, 5, 10].forEach(year => {
        console.log(`Savings at year ${year}: ${savings(year).toFixed(2)}`)
    })
}

{
    const costFirstYear = 0.015;
    const savings = (atYear) => differenceAfterYearWithFirstYear(iVal, returns, cost1, costFirstYear, cost2, atYear);

    console.log("Calculating example for differenceAfterYearWithFirstYear");
    console.log(`initialValue: ${iVal}`);
    console.log(`returnPerYear: ${returns}`);
    console.log(`baseCostPerYear: ${cost1}`);
    console.log(`newCostFirstYear: ${costFirstYear}`);
    console.log(`newCostPerYear: ${cost2}`);

    [0, 1, 3, 5, 10].forEach(year => {
        console.log(`Savings at year ${year}: ${savings(year).toFixed(2)}`)
    })
}

{
    const standardDeviationOfReturns = 0.2;
    const getValue = (numberOfStandardDeviations, atYear) => valueAtYearWithStandardDeviation(
      iVal,
      { average: returns, standardDeviation: standardDeviationOfReturns },
      numberOfStandardDeviations,
      atYear
    );

    console.log("Calculating example for valueAtYearWithStandardDeviation");
    console.log(`initialValue: ${iVal}`);
    console.log(`returnPerYear:`);
    console.log(`  average: ${returns}`);
    console.log(`  standardDeviation: ${standardDeviationOfReturns}`);

    [0, 1, 3, 5, 10].forEach(year => {
        [-2, -1, 0, 1, 2].forEach(numberOfStandardDeviations => {
          const value = getValue(numberOfStandardDeviations, year).toFixed(2)
          console.log(`Value at year ${year} with ${numberOfStandardDeviations}σ: ${value}`);
        })
    })
}
