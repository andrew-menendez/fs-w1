
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

/// Prim Pythag

function largestTriplet(num){
    ints=[]
    squares=[]
    triplets=[]
    highest_trip_sum=0
    high_trip=[]
    trip2=[]
    good_trip=[]
    
    function factors(num){
    ints=[]
    facts=[]
    for(i=num;i>0;i--){
        ints.push(i)
    }
    //console.log(ints)
    for (i in ints){
        for (j in ints){
            if (ints[i]*ints[j]==num){
                facts.push(ints[i]);
                //facts.push(ints[j]);
            }
        }
    }
    return facts
};

//factors(15)

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function GCD(array){
    factor_sets=[]
    allF=[]
    common=[]
    var highest_com=0
    for (x in array){
        factor_sets.push(factors(array[x]))
    }
   //console.log(factor_sets)
   for (s in factor_sets){
       //console.log(factor_sets[s])
       for(x in factor_sets[s]){
            
           allF.push(factor_sets[s][x])
           
       }
      
   }
    //console.log(allF)
    
    for (F in allF){
        //console.log((allF[F]))
        if (isInArray(allF[F],factor_sets[0]) & isInArray(allF[F],factor_sets[1]) & isInArray(allF[F],factor_sets[2]) ){
            common.push(allF[F])
            
        }
        //console.log(common)
    }
    //console.log("break")
    for(x in common){
        if (common[x] >highest_com) {
            //console.log(common[x])
            highest_com=common[x]
        }
    }
    return highest_com
}//end GCD
    
    sum=function sum(array){
                var count = 0;
                for(var i = 0; i < array.length; i++)
                    {
                        count = count + array[i];
                    }
            return count
            }
    
    
    //x=num
    
    for(i=num;i>0;i--){
        ints.push(i)
        squares.push(i*i)
    }
    //console.log(ints)
    //console.log(squares)
    //return ints, squares
    
    
    for (x in squares){
        //console.log(squares[x])
                for (y in squares){
                    //console.log(squares[y]+squares[x])
                    
                    for (z in squares){
                        //console.log(squares[y],'+',squares[x],'=',squares[z])
                        if(squares[y]+squares[x]==squares[z]){
                            //console.log(squares[y],'+',squares[x],'=',squares[z])
                            //console.log(ints[y],'+',ints[x],'=',ints[z])
                            triplets.push([ints[y],ints[x],ints[z]])
                        }
                    }
                    
                }
            }
        console.log("tripps")
        for (i in triplets){
            trip2.push([triplets[i],GCD(triplets[i])])
            //console.log(triplets[i])
            //console.log("GCD is:")
            //console.log(GCD(triplets[i]))
            
            //gdc_val=GCD(triplets[i])
            //console.log(gdc_val)
            //good_trip.push(triplets[i])
            //console.log(trip2)
        }
        console.log(trip2)
        for (i in trip2){
            console.log(trip2[i][0])
            console.log(trip2[i][0][1])
            if(trip2[i][0][1] >highest_trip_sum & trip2[i][1]<2){
                high_trip=trip2[i][0]
                highest_trip_sum=trip2[i][0][1]
            }
            console.log(trip2[i])
            //console.log(sum(good_trip[i]))
            //console.log("GCD is:")
            //console.log(GCD(good_trip[i]))
        }
    return high_trip
    };//end



