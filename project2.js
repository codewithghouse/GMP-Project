let body=document.querySelector("body");



// fetching data from the variable method
let variableimg=document.querySelector(".variable-img");
let variablebtn=document.querySelector(".variable-btn");
let url1="https://api.thecatapi.com/v1/images/search";

// creating the function to get the cat image from the api
async function VariableImage(){
    try{
        let Res= await axios.get(url1);
        // console.log(Res.data[0].url);
        return Res.data[0].url;
        // variableimg.setAttribute("src",Res.data[0].url);
    }catch(e){
        console.log("ERROR :",e.message);
    }
}
// btn logic 
variablebtn.addEventListener("click",async()=>{
   let link =  await VariableImage();
   variableimg.setAttribute("src",link);
});

// fetching the data from the query strings 

let queryimage1=document.querySelector(".queryimg1");
let queryimg2=document.querySelector('.queryimg2');
let querybtn=document.querySelector(".query-btn");
let url2="https://picsum.photos/v2/list?limit=2";

// creatng the function for getting the imege from query string;
async function QueryImage(){
   try{
    let Res= await axios.get("https://api.thecatapi.com/v1/images/search?limit=2");
    return [Res.data[0].url,Res.data[1].url];
   }catch(e){
    console.log("ERROR : -",e.message);
   }
};

// adding listener to get the image from the array
querybtn.addEventListener("click", async()=>{
    let links= await QueryImage();
    
    queryimage1.src=links[0];
    queryimg2.src=links[1];

});

// fetching the data through headers 
let headerimg=document.querySelector(".header-img");
let headerbtn= document.querySelector(".header-btn");
let url3= "https://dog.ceo/api/breeds/image/random";


//crating the function where data is fetct through the headers
async function HeaderImage(){
    try{
        let Res= await axios.get(url3,{headers:{"Accept":"application/json"}});
    // console.log(Res);
    return Res.data.message;
}catch(e){
    console.log("ERROR : -".e.message);
}
    }
// HeaderImage();


headerbtn.addEventListener("click",  async()=>{
    let link=  await HeaderImage();
    headerimg.setAttribute("src",link);
    // console.log("the btn was clicked");
});