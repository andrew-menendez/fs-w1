function RPNCalculator(){
	//this.total=0;
	this.stack=[];
};

RPNCalculator.prototype.value= function (){
	return this.stack.slice(-1)[0]
};

RPNCalculator.prototype.push= function (num){
	this.stack.push(num)
};

RPNCalculator.prototype.plus= function (){
	
	if (this.stack.length <1 ){
        throw "rpnCalculator is empty"
    }

	x=this.stack.pop();
	y=this.stack.pop();
    //console.log(x,y);
    this.stack.push(x+y);
	
	
};

RPNCalculator.prototype.minus= function (){
	if (this.stack.length <1 ){
        throw "rpnCalculator is empty"
    }
	x=this.stack.pop();
	y=this.stack.pop();
    this.stack.push(y-x);
 
};

RPNCalculator.prototype.times= function (){
	if (this.stack.length <1 ){
        throw "rpnCalculator is empty"
    }
	x=this.stack.pop();
	y=this.stack.pop();
    this.stack.push(x*y);
 
};

RPNCalculator.prototype.divide= function (){
	if (this.stack.length <1 ){
        throw "rpnCalculator is empty"
    }
	x=this.stack.pop();
	y=this.stack.pop();
    console.log(x,y);
    this.stack.push(y/x);

};



