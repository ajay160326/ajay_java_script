let mypromise = new Promise(function(resolve,reject){
    resolve();
    reject();
})

mypromise.then(
    function(value){
        console.log("success");
    },
    function(error){
        console.log("Error");
    }
)