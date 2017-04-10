for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(new Date, i);
    }, 1000);
}
 
console.log(new Date, i);

/*************************************
Below is the output: 
Sun Apr 09 2017 23:30:28 GMT-0700 (PDT) 5
=> undefined
Sun Apr 09 2017 23:30:29 GMT-0700 (PDT) 5
Sun Apr 09 2017 23:30:29 GMT-0700 (PDT) 5
Sun Apr 09 2017 23:30:29 GMT-0700 (PDT) 5
Sun Apr 09 2017 23:30:29 GMT-0700 (PDT) 5
Sun Apr 09 2017 23:30:29 GMT-0700 (PDT) 5  
**********************************/




const sleep = (timeountMS) => new Promise((resolve) => {
    setTimeout(resolve, timeountMS);
});
 
(async () => {  
    for (var i = 0; i < 5; i++) {
        await sleep(1000);
        console.log(new Date, i);
    }
 
    await sleep(1000);
    console.log(new Date, i);
})();


/* Below is the output:  (NoTE THE TIMER FOR THE SIX OUTPUT). 
=> {}
Sun Apr 09 2017 23:33:01 GMT-0700 (PDT) 0
Sun Apr 09 2017 23:33:02 GMT-0700 (PDT) 1
Sun Apr 09 2017 23:33:03 GMT-0700 (PDT) 2
Sun Apr 09 2017 23:33:04 GMT-0700 (PDT) 3
Sun Apr 09 2017 23:33:05 GMT-0700 (PDT) 4
Sun Apr 09 2017 23:33:06 GMT-0700 (PDT) 5
*/