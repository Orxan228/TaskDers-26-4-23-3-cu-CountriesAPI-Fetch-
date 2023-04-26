function sum(a) {
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return a+b+c+d+e 
                }
            }
        }
    }
}
console.log(sum(1)(2)(3)(4)(5));

function sum1(a,b) {
    return a+b
}
console.log(sum1(7,8));