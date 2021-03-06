
function search(){
    let moviessearch=document.getElementById("seacrh-box").value;
    getdata(moviessearch)
    console.log(moviessearch) 
}
async function getdata(moviessearch){
    const url=`https://www.omdbapi.com/?t=${moviessearch}&apikey=60ac6740`;
    // const url="http://www.omdbapi.com/?i=tt3896198&apikey=60ac6740"
    let res=await fetch(url)
    let movies=await res.json()
    console.log(movies)
    displaymovies(movies)
    }
    
function displaymovies(ele){
    document.querySelector("#display1").innerHTML=null;
    document.querySelector('#display2').innerHTML=null;
    let img_box=document.createElement("div")
    let img=document.createElement("img")
    img.src=ele.Poster;
    img_box.append(img)

    let title_box=document.createElement("div")
    let titletxt=document.createElement('h4')
    titletxt.innerText="Title"+ele.Title;
    title_box.append(img_box)

    let acctors_box=document.createElement("div")
    let actore_txt=document.createElement("p")
    actore_txt.innerText="Actors:"+ele.Actors;
    acctors_box.append(actore_txt)

    
    let Genre_box=document.createElement("div")
    let Genre_txt=document.createElement('h4')
    Genre_txt.innerText="Genre"+ele.Genre;
    Genre_box.append(Genre_txt)

    let Language_box=document.createElement("div")
    let Language_txt=document.createElement('h4')
    Language_txt.innerText="Language"+ele.Language;
    Language_box.append(Language_txt)
    
    let run_box=document.createElement("div")
    let run_txt=document.createElement("p")
    run_txt.innerText="Runtime:"+ele.Runtime;
    run_box.append(run_txt)

    let relas_box=document.createElement("div")
    let relas_txt=document.createElement("p")
    relas_txt.innerText="Released:"+ele.Released;
    relas_box.append(relas_txt)

    let Director_box=document.createElement("div")
    let Director_txt=document.createElement("p")
    Director_txt.innerText="Director:"+ele.Director;
    Director_box.append(Director_txt)

    let Writer_box=document.createElement("div")
    let Writer_txt=document.createElement("p")
    Writer_txt.innerText="Writer:"+ele.Writer;
    Writer_box.append(Writer_txt)

    let Country_box=document.createElement("div")
    let Country_txt=document.createElement("p")
    Country_txt.innerText="Country:"+ele.Country;
    Country_box.append(Country_txt)

    let Awards_box=document.createElement("div")
    let Awards_txt=document.createElement("p")
    Awards_txt.innerText="Awards:"+ele.Awards;
    Awards_box.append(Awards_txt)
    
    document.querySelector("#display1").append(img_box)
    document.querySelector('#display2').append(title_box,Genre_box,acctors_box,Language_box,Country_box,run_box,relas_box,Director_box,Writer_box,Awards_box,)

}
