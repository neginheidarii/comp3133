const Calculator = require("../app/calculator");
const assert = require("assert");

function testCalculatorOperation(
  description,
  operation,
  input1,
  input2,
  expected
) {
  it(description, () => {
    assert.equal(operation(input1, input2), expected);
  });
}

describe("Testing Calculator functionality", () => {
  testCalculatorOperation(
    "should return 7 when value is 5 + 2",
    Calculator.add,
    5,
    2,
    7
  );
  testCalculatorOperation(
    "should return 7 when value is 5 + 2 -> wrong answer passed, expect failure",
    Calculator.add,
    5,
    2,
    8
  );

  testCalculatorOperation(
    "should return 3 when value is 5 - 2",
    Calculator.sub,
    5,
    2,
    3
  );
  testCalculatorOperation(
    "should return 3 when value is 5 - 2 -> wrong answer passed, expect failure",
    Calculator.sub,
    5,
    2,
    5
  );

  testCalculatorOperation(
    "should return 10 when value is 5 * 2",
    Calculator.mul,
    5,
    2,
    10
  );
  testCalculatorOperation(
    "should return 10 when value is 5 * 2 -> wrong answer passed, expect failure",
    Calculator.mul,
    5,
    2,
    12
  );

  testCalculatorOperation(
    "should return 5 when value 10 is divided by 2",
    Calculator.div,
    10,
    2,
    5
  );
  testCalculatorOperation(
    "should return 5 when value 10 is divided by 2 -> wrong answer passed, expect failure",
    Calculator.div,
    10,
    2,
    2
  );
});
