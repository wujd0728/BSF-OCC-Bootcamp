const step1 = (callback)=> {
    setTimeout(() => {
        console.log("step1 is complete.");
        callback()
    }, 2000)
}

const step2 = (callback) =>{
    setTimeout(() => {
        console.log("step2 is complete.")
        callback()
    }, 2000)
}

const step3 = () => {
    setTimeout(() => {
        console.log("step3 is complete.")  
        console.log("Request is complete and all steps are done!")
    }, 4000)
}


//Nested callbacks
step1(() =>{
    step2(() => {
        step3();
        
    });
});