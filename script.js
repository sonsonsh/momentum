const calculator = {
    add : function(a,b){
        return a+b;
    },
    minus : function(a,b){
        return a-b;
    },
    divide : function(a,b){
        return a/b;
    },
    power : function(a,b){
        return a**b;
    },
    multi : function(a,b){
        return a*b;
    }
}

const plusResult = calculator.add(5,10);
const minusResult = calculator.minus(plusResult,1);
console.log(minusResult)


function calc2 (a, b) {
    return calc3(a, b)
    return a * b
}
  
function calc3 (a, b) {
    return a - b	
}

const result = calc2(8,5)
console.log(result)





