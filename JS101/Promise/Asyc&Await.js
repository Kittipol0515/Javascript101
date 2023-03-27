const run = async () => {
    
    console.log("Starting up");
    
    await (new Promise((resolve) => {
        setTimeout(() => {
            console.log("Two seconds")
            resolve();
        }, 2000)
    }))
    
    await (new Promise((resolve) => {
        setTimeout(() => {
            console.log("Zero seconds")
            resolve();
        }, 0)
    }))
    
    console.log('Finishing up')
    
};

run();