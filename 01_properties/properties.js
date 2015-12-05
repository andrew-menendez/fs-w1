
function setPropertiesOnObjLiteral(object){
  object.x=7;
  object['y']=8;

  object.onePlus= function onePlus(num){
  										num=(num+1);
  										return num;
  										};
  return object;
};


function setPropertiesOnArrayObj(arrayObject){

	arrayObject.hello= function hello() {
		return "Hello!"
	}

	arrayObject['full']="stack";

	arrayObject[0]=5;

	arrayObject['twoTimes']= function twoTimes(num) {
		return num*2;
	};

};

function setPropertiesOnFunctionObj(functionObject) {

	functionObject.year=2015;
	functionObject.divideByTwo=function divideByTwo(num){
		return num/2;

	};
	functionObject.prototype.helloWorld = function helloWorld(){
		return "Hello World";
	}
	return "I am a function object, all functions are objects! Function can have their own properties too!";

};