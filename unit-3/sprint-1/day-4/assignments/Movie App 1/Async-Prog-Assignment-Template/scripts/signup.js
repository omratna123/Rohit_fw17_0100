// document.querySelector("form").addEventListener("submit", singnUp);
// function Constructor(name,contact,email,pass){
//     this.name=name;
//     this.contact=contact;
//     this.email=email;
//     this.pass=pass;
// }
// var store=JSON.parse(localStorage.getItem("sign"))||[];
// function singnUp(){
//     event.preventDefault();
//  var name=document.querySelector("#name").value;
//  var contact=document.querySelector("#contact").value;
//  var email=document.querySelector("#email").value;
//  var pass=document.querySelector("#password").value;
// //   console.log(name,pass);
//   var p= new Constructor(name,contact,email,pass);
//   store.push(p)
//   localStorage.setItem("sign",JSON.stringify(store));
//   console.log("rohit kumar malav")
//  }
// function myFun(){
//     console.log("rohit kumar malav")
// }
document.querySelector("form").addEventListener("submit", singnUp);
function Constructor(name,contact,email,pass){
    this.name=name;
    this.contact=contact;
    this.email=email;
    this.pass=pass;
}
 var store=JSON.parse(localStorage.getItem("sign"))||[];
function singnUp(){
    event.preventDefault();
 var name=document.querySelector("#name").value;
 var contact=document.querySelector("#contact").value;
 var email=document.querySelector("#email").value;
 var pass=document.querySelector("#password").value;
//   console.log(name,pass);
  var p= new Constructor(name,contact,email,pass);
  store.push(p)
  localStorage.setItem("sign",JSON.stringify(store));

 }