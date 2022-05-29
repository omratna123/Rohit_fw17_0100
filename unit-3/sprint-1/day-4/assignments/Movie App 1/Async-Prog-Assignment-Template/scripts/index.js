var arr=["https://thumbs.dreamstime.com/b/sherlock-netflix-television-screen-popular-series-choice-movies-internet-tv-menu-modern-media-broadcasting-156503765.jpg", 
"https://thumbs.dreamstime.com/b/iphone-netflix-logo-king-crown-money-inc-iphone-netflix-logo-king-crown-money-inc-which-168943795.jpg", 
"https://thumbs.dreamstime.com/b/uk-march-tv-television-friends-sitcom-netflix-screen-176589550.jpg",
"https://thumbs.dreamstime.com/b/lucifer-netflix-television-screen-popular-series-choice-movies-lucifer-netflix-television-screen-popular-series-choice-178977208.jpg",
"https://thumbs.dreamstime.com/b/gossip-girl-netflix-television-screen-popular-series-choice-movies-178980749.jpg"]
let id =setInterval(show,2000);

let i=0;
function show(){
 if(i==arr.length){
     i=0;
 }
  document.querySelector("#slideshow").innerHTML="";
  var img=document.createElement("img");
  
  img.src=arr[i];
  i++;
  document.querySelector("#slideshow").append(img)

// if(x==50){

// }
// document.qu
// x++;
// console.log(x)
}