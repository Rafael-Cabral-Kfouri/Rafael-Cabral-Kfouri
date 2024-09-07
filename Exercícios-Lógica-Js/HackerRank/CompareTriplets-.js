const a =[1,4,3]
const b = [3,2,1]


function compareTriplets() {
    let alice = 0
    let bob = 0
    let int = []
    for(let index = 0; index < a.length; index += 1){
        if (a[index] > b[index]){
            alice += 1
        }else if(a[index] < b[index]) {
            bob += 1
        }
    }
     return int = [alice, bob] 
}
console.log(compareTriplets())
