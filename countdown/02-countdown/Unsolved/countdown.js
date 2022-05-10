// Write code to print all numbers from `num` down to 1
// You may assume `num` will be a positive number

var countdown = function(num) {
    while(num >0){
        console.log(num);
        num--;
    }
};

countdown(10);

// or it could be with for 

var countdownFor = (num) => {
    for(var i = num; i>0; i--)
    console.log(i);
};

countdownFor(20);