//Async / Await
const step1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step1 is complete");
            resolve();
        }, 1000);
    })
}

const step2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step2 is complete");
            resolve();
        }, 1000);
    })
}

const step3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("step3 is complete");
            resolve();
        }, 1000);
    })
}

const performSteps = async () => {
    try {
        await step1();
        await step2();
        await step3();
        console.log("All done!");
    } catch (error) {
        console.error("An error occured:", error);
    }
}

performSteps();
