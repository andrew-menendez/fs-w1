
function repeat(str,num){
	var newstring=""
	
	for (i=0;i<num;i++){
	newstring=newstring.concat(str)
	console.log(newstring)
	};

return newstring
};



function sum(array){

	x=0
	for (var i = array.length - 1; i >= 0; i--) {
		x=x+array[i]
	};
	return x

};


function gridGenerator(num){
	result=""
	hash="#"
	space=" "
	newl="\n"
	
	i=0;
	

    while(i<num){
    console.log(i)
        j=0;
        line_result=""
    
        if (i%2==0){
            while(j<num){
                //console.log("even")
                if(j%2==0){
                    //console.log(hash)
                    line_result=line_result.concat(hash)
                    }else {
                        //console.log(space)
                        line_result=line_result.concat(space)
                    }
                
                j++;
            }
        } else {
            while(j<num){
                //console.log("odd")
                if(j%2==0){
                    //console.log(space)
                    line_result=line_result.concat(space)
                    }else {
                        //console.log(hash)
                        line_result=line_result.concat(hash)
                    }
                j++;
        }
        }
    console.log(line_result)
    result=result.concat(line_result,newl)
    i++;
    }
return result

};

/// End Grid Gen


function join(array,delim){
    str="";
    myArray=array
    len=array.length
    for (i=0;i<len;i++){
        if (typeof delim !== 'undefined') {
            str=str.concat(myArray[i],delim)
        } else {
            str=str.concat(myArray[i])
        }
        
        
    }
    if (str.slice(-1)==delim) {
        str=str.substring(0, str.length - 1);
    }
    return str
};

/// Paramify

function paramify(object){
    str="";
    myObj=object;
    params=[]
    

    for (x in myObj){
        if (myObj.hasOwnProperty(x)){
        params.push(x)
        }
    }
   
    sortedP=params.sort()
    
    for (i in sortedP){
        console.log(sortedP[i])
        str=str.concat(sortedP[i],"=",myObj[sortedP[i]],"&")
    }
    if (str.slice(-1)=="&") {
        str=str.substring(0, str.length - 1);
    }
    
    return str

}




