// 1. Create a function that every time you invoke it, it will print out the message “Congrats you earn the chance!“,
// however it can only print out the message with the first 5 invokes. all the rest invokes will print out the message 
// “Sorry you missed the chance” (run function once count as 1 invoke) (hint : using closure)

function tryMyChance() {
    let count = 0
    return function () {
        count += 1
        if (count <= 5) {
            console.log("Congrats you earn the chance!")
        } else {
            console.log("Sorry you missed the chance")
        }
    }
}

const closure = tryMyChance()

// test #1
for (let i = 0; i < 6; i++) {
    closure();
}


// 2. Implement the callback function "longerThan" for : Array.filter(longerThan(minimumLength))  
// which takes minimumLength as a input and filter all the strings whose length is longer than minimumLength 
// (hint : using currying) 

function longerThan(minimumLength) {
    return (element) => {
        return (element.length > minimumLength)
    }
}

// test #2
console.log(['To', 'summer', 'nights', "under", "the", "sky!"].filter(longerThan(3)));
