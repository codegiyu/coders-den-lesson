// Reference Error
try {
    let lastName = 'Yetayeh'
    let fullName = fistName + ' ' + lastName
} catch (err) {
    console.log(err)
} finally {
    console.log("Yaaay!")
}

// Syntax Error
try {
    const func = () =>//{
        console.log(hello)
    // }
} catch (error) {
    console.log(error)
}

// Type Error 
try {
    let num = 15;
    console.log(num.split(""));
} catch (error) {
    console.log(error)
}

//Evaluation Error
try{
    throw new EvalError("'Throws an error'")
}catch(error){
    console.log(error, error.name, error.message)
}

// Range Error 
try {
    const checkRange = (num) => {
        // return (num).toString(37)
        // let num = prompt("Enter a number")
        if (num < 30) throw new Error("Wrong number");
        return true
    }
      
    console.log(checkRange(20)); 
} catch (error) {
    // if (error.message === "Wrong number") {
    //     alert("Please enter a number greater than 30") 
    // }
    console.log(error)
}

// URI Error
try {
    console.log(decodeURI("https://www.educative.io/shot%20editor"))

    console.log(decodeURI("%sdfk"));
} catch (error) {
    console.log(error)
}

//Internal Error
// In the JS engine, this error occurs most often when there is too much data and the stack exceeds its critical size. When there are too many recursion patterns, switch cases, etc., the JS engine gets overwhelmed.
try {
    const mustFail = () => mustFail()
} catch (error) {
    console.log(error)
}