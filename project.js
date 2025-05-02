// window.addEventListener("load",function(){
//     console.log("the page is  loaded");
//     alert("the page is loaded successully");
// }
// )
// accesing the variable elements/objects
let variablefact= document.querySelector(".variable-fact");
let variablebtn= document.querySelector(".variable-btn");



//fetching the data from the variable
async function Variable(){
 try{
    let Res= await axios.get("https://uselessfacts.jsph.pl/random.json?language=en")
    // console.log(Res.data.text);
    variablefact.innerText= Res.data.text;
 }catch(e){
    console.log(e);
 }

}
variablebtn.addEventListener("click",()=>{
setTimeout(() => {
    let fact= Variable();
}, 1000);  
})



// fetching the data from query string and setting the limit of two
let queryfact1=document.querySelector(".query-fact1");
let queryfact2=document.querySelector(".query-fact2");
let querybtn=document.querySelector(".query-btn");

async function QueryFact(){
    try{
        let Res= await axios.get("https://catfact.ninja/facts?limit=2");
    // console.log(Res.data)
    queryfact1.innerText=Res.data.data[0].fact;
    queryfact2.innerText=Res.data.data[1].fact;
    }catch(e){
        console.log("error",e)
    }
}
querybtn.addEventListener("click",function(){
    setTimeout(() => {
        let queryfact= QueryFact()
    },1000);
});


// fetching the data from headers

let url="https://catfact.ninja/fact";
let headerfact=document.querySelector(".header-fact");
let headerbtn=document.querySelector(".header-btn");


async function HeaderFact(){
   try{
    let Res= await axios.get(url,{headers:{"Accept":"application/json"}});
    console.log(Res.data.fact);
    headerfact.innerText=Res.data.fact;
}catch(e){
    console.log("error",e.message);
}
   };

headerbtn.addEventListener("click",function(){
setTimeout(() => {
    let headerfact= HeaderFact();
    console.log("fetch succesfully")
}, 1000);
});

// back btn
let backbtn=document.querySelector(".back-btn");
backbtn.addEventListener("click",function(){
    window.history.back();
    console.log("the btnwas clicked")
})
