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
    var highest_com
    for (x in array){
        factor_sets.push(factors(array[x]))
    }
   
   for (s in factor_sets){
       console.log(factor_sets[s])
       for(x in factor_sets[s]){
            
           allF.push(factor_sets[s][x])
           
       }
      
   }
    console.log(allF)
    
    for (F in allF){
        if (isInArray(allF[F],factor_sets[0]) & isInArray(allF[F],factor_sets[1]) & isInArray(allF[F],factor_sets[2]) ){
            common.push(allF[F])
        }
    }
    for(x in common){
        if (common[x] >0) {
            highest_com=common[x]
        }
    }
    return highest_com
}

GCD([ 24, 7, 25 ])

//isInArray(6, [4,6,12])
