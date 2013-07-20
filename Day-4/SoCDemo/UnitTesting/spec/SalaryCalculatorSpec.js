describe("Salary Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new SalaryCalculator();
  });

  it("should return 10000 as Salary with No Tax", function() {
    //arrange
    calculator.basic(10000);

    //act
    calculator.calculate();

    //assert
    expect(calculator.net()).toEqual(10000);
  });

  it("should return 9000 as Salary with 10% Tax", function() {
    //arrange
    calculator.basic(10000);
    calculator.tax(10);

    //act
    calculator.calculate();

    //assert
    expect(calculator.net()).toEqual(9000);
  });

  
});