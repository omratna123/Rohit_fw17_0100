
    let data = []

    let obj1=  {image:"https://igimages.gumlet.io/hindi/gallery/movies/tubelight/tubelight_poster.jpg?w=240&dpr=1.0",
    name:"TUBLIGHT",
    releasedate:"19 APR 2020",
    rating: 4,
   }

   let obj2 =  {image:"https://igimages.gumlet.io/hindi/gallery/movies/jaggajasoos/jagaajasoos_poster.jpg?w=240&dpr=1.0",
   name:"JAGGA JASOOS",
   releasedate:"20 MAR 2018",
   rating: 5,
  }

  let obj3= {image:"https://igimages.gumlet.io/hindi/gallery/movies/toilet-ekpremkatha/toilet_poster.jpg?w=240&dpr=1.0",
  name:"TOILET",
  releasedate:"05 FEB 2015",
  rating: 3,
 }

let obj4 =  {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v",
name:"TANHAJI",
releasedate:"24 JUN 2017",
rating: 2,
}

let obj5 =  {image:"https://igimages.gumlet.io/hindi/gallery/movies/dobaara/dobara_poster.jpg?w=240&dpr=1.0",
name:"Dobbara",
releasedate:"07 AUG 2014",
rating: 3,
}

let obj6 =  {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3318/1253318-v-d5342e64c9c4",
name:"12TH MAN",
releasedate:"23 SEP 2017",
rating: 4,
}

let obj7 = {image:"https://igimages.gumlet.io/hindi/gallery/movies/dearmaya/maya_poster.jpg?w=240&dpr=1.0",
name:"DEAR MAYA",
releasedate:"25 OCT 2020",
rating: 5,
}

let obj8 =  {image:"https://igimages.gumlet.io/hindi/gallery/movies/raabta/raaabta_poster.jpg?w=240&dpr=1.0",
name:"RAABATA",
releasedate:"07 NOV 2016",
rating: 4,
}

let obj9 =  {image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/old_images/vertical/MOVIE/2789/1000212789/1000212789-v",
name:"RAID",
releasedate:"14 DEC 2020",
rating: 3,
}
   data.push(obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9)


    localStorage.setItem("movies",JSON.stringify(data));

    let moviedata = JSON.parse(localStorage.getItem("movies"))

    displaydata(moviedata)

       function pricesort(){
        let selected = document.querySelector("#sort").value;
        if(selected=="LTH"){
            moviedata.sort(function(a,b){
                return a.rating-b.rating;
            })
            displaydata(moviedata)
        }

        if(selected=="HTL"){
            moviedata.sort(function(a,b){
                return b.rating-a.rating
            })
            displaydata(moviedata)
        }
       }

    function displaydata(data){
        document.querySelector("#movies").innerHTML=null;
        data.forEach(function(elem){

        let movies = document.querySelector("#movies");

        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src=elem.image;

        let name = document.createElement("h2")
        name.innerText=elem.name;

        let date = document.createElement("h3")
        date.innerText=elem.releasedate;

        let rating = document.createElement("h4")
        rating.innerText=elem.rating;

        div.append(img,name,date,rating);
        movies.append(div);


        })
    }