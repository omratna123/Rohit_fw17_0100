document.querySelector("form").addEventListener("submit",loginUp);

var store=JSON.parse(localStorage.getItem("sign"));

function loginUp(){
    event.preventDefault();
    var lemail=document.querySelector("#email").value;
    var lpass=document.querySelector("#pass").value;
     
    for(var i=0;i<store.length;i++){
        if(store[i].email==lemail && store[i].pass==lpass){
            alert("login Success");
            window.location.href="index.html";
            break;
        }else{
            alert("login failed")
            break;
        }
    }
}
