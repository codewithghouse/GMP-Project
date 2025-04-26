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
})



// fetching the data from the query strings 

let queryimage1=document.querySelector(".query-img1");
let queryimg2=document.querySelector('.query-img2');
let querybtn=document.querySelector(".query-btn");
let url2="https://api.thecatapi.com/v1/images/search?limit=2";

// creatng the function for getting the imege from query string;
async function QueryImage(){
   try{
    let Res= await axios.get(url2);
    return [Res.data[0].url,Res.data[1].url];
   }catch(e){
    console.log("ERROR : -",e.message);
   }
    // console.log(Res);
    // console.log(Res.data[0].url);
    // console.log(Res.data[1].url);
}

// adding listener to get the image from the array
querybtn.addEventListener("click", async()=>{
    let link1= await QueryImage();
    let link2 = await QueryImage();
    queryimage1.setAttribute("src",link1);
    queryimg2.setAttribute("src",link2);

})


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
})



// let button=document.querySelector("button");
// let url= "https://dog.ceo/api/breeds/image/random";

// button.addEventListener("click",async ()=>{
//     let link= await GetDogPic();
//     let img=document.querySelector("#result");
//     img.setAttribute("src",link);
//     img.classList.add("image");
// })


// // calling the api for random dog images
// async function GetDogPic(){
//     try{
//         let res= await axios.get(url);
//     return res.data.message;
//     }catch(e){
//         return "error",e ;
//     ghouse is a error and uss}
// }