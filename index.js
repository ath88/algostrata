// function savingsAfterYear
// Calculates the difference in accumulated value based on identical returns, but difference in costs
//
// Arguments:
// initialValue: Number
// returnPerYear: Number
// baseCostPerYear: Number
// newCostPerYear: Number
// atYear: Number

function differenceAfterYear(initialValue, returnPerYear, baseCostPerYear, newCostPerYear, atYear) {
  const baseReturns = (1 + returnPerYear - baseCostPerYear);
  const newReturns = (1 + returnPerYear - newCostPerYear);

  const differenceInReturnsAtYear = Math.pow(newReturns, atYear) - Math.pow(baseReturns, atYear);

  return initialValue * differenceInReturnsAtYear;
}


// function valueAtYearWithStandardDeviation
// Calculates the total value at a year, based on return and standard deviation.
//
// Arguments:
// initialValue: Number
// returnPerYear: Object: { average: Number, standardDeviation: Number }
// numberOfStandardDeviations: Number
// atYear: Number

function valueAtYearWithStandardDeviation(initialValue, returnPerYear, numberOfStandardDeviations, atYear) {
  const { average, standardDeviation } = returnPerYear;

  const returns = 1 + (numberOfStandardDeviations * standardDeviation + average);

  const returnAtYear = Math.pow(returns, atYear);

  return initialValue * returnAtYear;
}

module.exports = { differenceAfterYear, valueAtYearWithStandardDeviation };
