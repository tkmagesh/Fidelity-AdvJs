(function(){
	var salaryCalculatorBase = {
		calculate : function(){
			var gross = this.basic() + this.hra() + this.da(),
				taxDeductible = gross * (this.tax() / 100);
				this.net(gross - taxDeductible);
		},
		basic : (function(){
			var _basic = 0;
			return function(){
				if (arguments.length != 0) _basic = arguments[0];
				return _basic;
			}
		})(),
		hra : (function(){
			var _hra = 0;
			return function(){
				if (arguments.length != 0) _hra = arguments[0];
				return _hra;
			}
		})(),
		da : (function(){
			var _da = 0;
			return function(){
				if (arguments.length != 0) _da = arguments[0];
				return _da;
			}
		})(),
		tax : (function(){
			var _tax = 0;
			return function(){
				if (arguments.length != 0) _tax = arguments[0];
				return _tax;
			}
		})(),
		net : (function(){
			var _net = 0;
			return function(){
				if (arguments.length != 0) _net = arguments[0];
				return _net;
			}
		})()
	};
	function SalaryCalculator(){

	};
	SalaryCalculator.prototype = salaryCalculatorBase;
	window.SalaryCalculator = SalaryCalculator;	
})();

