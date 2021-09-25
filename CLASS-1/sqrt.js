// To get a squareroot of a number : Math.sqrt();

// Assign the values and print the answer

const a = 125;
const ans = Math.sqrt(a);
console.log(ans);



// Getting value from user at HTML alert box => prompt()

let i = parseInt(prompt("Enter sqrt value :"));

const n = Math.sqrt(i);

console.log(`The SquareRoot of ${i}  is ${n}`);
alert(`The SquareRoot of ${i}  is ${n}`);



// Getting value from user

const readline = require('readline')

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("Enter x :", function(x) {
    const sq = Math.sqrt(x);

    console.log(sq);

    rl.close();
})

rl.on("close", function() {
    process.exit()
})

