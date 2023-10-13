
let ad= new Promise((resolve,reject)=>{
    resolve("hello ... ");
})

let btn = document.getElementById("btn");
btn.addEventListener('click',()=>{

    ad.then((msg)=>alert(`${msg}`))
    .catch(msg=>console.log(msg))
})