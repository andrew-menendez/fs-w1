function createCalculator(){

		calculator={};
		calculator.curval=0
		calculator.value= function value() {
		    
			return this.curval
		};

		calculator.add= function add(num) {
			newval=this.curval+num;
			this.curval=newval;
			return newval;
		};

		calculator.subtract= function subtract(num) {
			newval=this.curval-num;
			this.curval=newval;
			return newval;
		};


		return calculator;

};

//calculator= createCalculator();

//console.log(calculator.value());

