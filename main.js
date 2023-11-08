const text = "hello world";
window.addEventListener("onClick", () =>{
    if(text){
        console.log(text + text);
        return;
    }
})
