function calculate(amount) {
  const taxableAmount = amount - 250000;
  let tax = 0;

  if (taxableAmount > 250000) {
    if (taxableAmount > 500000) {
      tax += 250000 * 0.05;
    }
    else {
      tax += (500000 - taxableAmount) * 0.05;
    }
  }

  if (taxableAmount > 500000) {
    if (taxableAmount > 750000) {
      tax += 250000 * 0.1;
    }
    else {
      tax += (750000 - taxableAmount) * 0.1;
    }
  }

  if (taxableAmount > 750000) {
    if (taxableAmount > 1000000) {
      tax += 250000 * 0.15;
    }
    else {
      tax += (1000000 - taxableAmount) * 0.15;
    }
  }

  if (taxableAmount > 1000000) {
    if (taxableAmount > 1250000) {
      tax += 250000 * 0.2;
    }
    else {
      tax += (1250000 - taxableAmount) * 0.2;
    }
  }

  if (taxableAmount > 1250000) {
    if (taxableAmount > 1500000) {
      tax += 250000 * 0.25;
    }
    else {
      tax += (1500000 - taxableAmount) * 0.25;
    }
  }

  if (taxableAmount > 1500000) {
    tax += (taxableAmount - 1500000) * 0.3;
  }

  const totalIncome = amount - tax;

  return {
    taxableAmount,
    yearly: totalIncome,
    monthly: Math.floor(totalIncome / 12),
    tax
  };
}

console.log(calculate(2300000));