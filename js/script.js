document.write("hello world")
function test(){
    console.log("This is a sample test function")
}
test()
test()
function greetings(msg){
console.log("hello all",msg)
}
greetings("have a good day")
greetings("Good morning all....")
greetings()
function add(x,y) {
    let sum=x+y
    console.log(sum)
    
}
add(23,35)
add(3,7)

//using return statement sum is to be returned
function add(x,y) {
    let sum=x+y
    console.log(sum)
    return sum
    
}
let result=add(23,35)
console.log(result)
console.log(add(3,4))
//console.log(sum)// if removed its not an error

for(let i=1;i<10;i +=2)
{
    console.log(i)
    if (i==3){
        //break // it will exit the loop at i=3
     continue //it will skip 3 and continue after it
    }
    console.log(i)

}

let k = 0
while (k<10){
    console.log(k)
    k +=1
}
function avg(a,b,c){
    let avrg=((a+b+c)/3)
    console.log(avrg)
    return avrg
}
let output=avg(2,2,2)
//or
function Average(p,q,r)
{
   return (p+q+r)/3
   
}
console.log("Average =" ,Average(10,15,20))
console.log(demo)
demo()