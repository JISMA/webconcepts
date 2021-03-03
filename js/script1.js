//these functions used in java2. and java3.html pages
function click_Action(){
    //alert("Hello world")
}
function load(){
    let name = prompt("Please enter your name")
    alert ("Hey"  +name+  "Welcome")
}
    function getvalue(){
      let uname=  document.getElementById('username').value
      alert(uname)
    }
function add(){
    let num1=parseInt(document.getElementById("num1").value)
    let num2=parseInt(document.getElementById("num2").value)
    let sum=num1+num2
    document.getElementById("result").value=sum
    
}