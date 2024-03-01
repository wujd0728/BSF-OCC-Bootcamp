//promises
const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Step 1 is complete.")
            resolve();
        }, 1000)
    });
}

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step2 is complete")
            resolve()
        }, 1000)
    })
}

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("step3 is complete")
            resolve();
        }, 1000)
        })
}

//chaining promises
step1()
    .then(step2) //dont use (), because call func() as a reference, but without () call immediately
    .then(step3)
    .then(() => {
        console.log("All steps are complete!")
    })
    .catch((error) => {
        console.log("An error occured:", error)
    })