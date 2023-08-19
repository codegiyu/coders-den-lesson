const run = () => {
    // "run" function scope
    const two = 2;
    let count = 0;
    const run2 = () => { }
  
    console.log(two);   // 2
    console.log(count); // 0
    console.log(run2);  // function
}

run();
// console.log(two);   // throws ReferenceError
// console.log(count); // throws ReferenceError
// console.log(run2);  // throws ReferenceError

const outerFunc = () => {
    // function scope
    const message = 'Hi, Hela !';
  
    {
      // block scope
      const message = 'Hello !';
      console.log('inside message : ', message); // "inside message : ", "Hello !"
      {
        const message = "Hi!"
        console.log(message)
      }
    }
  
    for (const color of ['green', 'red', 'blue']) {
      // "for" block scope
      const message = 'Hi';
      console.log(color); // 'green', 'red', 'blue'
      console.log(message); // 'Hi', 'Hi', 'Hi'
    }
    
    // console.log('color : ', color); // throws ReferenceError
    
    console.log('outside message : ', message); // "outside message : ", "Hi, Hela !"
}

outerFunc();

const outerFunc2 = () => {

    if (true) {
      // "if" block scope
      var count = 12;
      console.log(count); // 12
    }
    
    console.log(count); // 12
  }
  
  outerFunc2();
//   console.log(count); // ReferenceError


const globalVar = 'global';

const outerFunc3 = () => {
  const outerVar = 'outer';

  const innerFunc = () => {
    const innerVar = 'inner'
    console.log(innerVar, outerVar, globalVar); // "inner", "outer", "global"
  }

  console.log(outerVar, globalVar); // "outer", "global"

  innerFunc();
}
outerFunc3();
console.log(globalVar)

const outerFunc4 = () =>  {
    // the outer scope
    // let outerVar = 'I am from outside!';
    const myNum = 9
    // console.log(outerVar)


    const innerFunc = (newNum) => {
      // the inner scope
      // console.log(outerVar);
      return newNum + myNum
    }
  
    return innerFunc;
}

const myInnerFunc = outerFunc4();
console.log(myInnerFunc(10))


const counter = () => {
    let privateCounter = 0;
    
    const changeBy = (val) => {
      privateCounter += val;
    }
    
    return ({
      changeBy,
      value: () => {
        return privateCounter;
      },
      privateCounter
    });   
};

const { changeBy, value, privateCounter } = counter();
console.log(value())
console.log(privateCounter)
changeBy(7)
// increment()
// increment()
// increment()
// increment()
// decrement()
console.log(value())
console.log(privateCounter)


// let crazyVar = ""
const useState = (val) => {
    let privateVal = val;

    const setState = (newVal) => {
        // let value = 0
        privateVal = newVal
        // crazyVar = newVal
    }

    const state = () => privateVal

    return [
        state,
        setState
    ]
}

const [state, setState] = useState("Hello");
const [input, setInput] = useState("");
const [num, setNum] = useState(5,6);
console.log(num())
setNum(6)
console.log(num())

console.log(state())
// console.log(crazyVar)

let test = setState("Why are you running?!")

// console.log(test.value)
// console.log(test.doubleUp())
// console.log(test.freq())
// console.log(test.freq())
// console.log(test.freq())

crazyVar = "Nada!"
console.log(state())
console.log(crazyVar)

console.log(input())
setInput("Fall out")
console.log(input())
console.log(state())

//CURRYING
const converterOld = (toUnit, factor, offset, input) => {
    const converterOffset = offset || 0;
    return [((converterOffset + input) * factor).toFixed(2), toUnit].join(' ');
};

const converter = (toUnit) => (factor) => (offset) => (input) => {
  const converterOffset = offset || 0;
  return [((converterOffset + input) * factor).toFixed(2), toUnit].join(' ');
}
const neyri = converter("jkl")(0.3778)()(98)
console.log(neyri)
milesToKm = converter("km")(1.60936)()
inchToCm = converter("cm")(2.5)()

console.log(milesToKm(10))
console.log(inchToCm(20))
  
  const convert10MilesToKm = converterOld('km', 1.60936, undefined, 10);
  const convert20MilesToKm = converterOld('km', 1.60936, undefined, 20);
  const convert30MilesToKm = converterOld('km', 1.60936, undefined, 30);

  // const milesToKM = converter("km")(1.60936)(undefined)
  // tenMiles = milesToKM(10)
  
  console.log('convert10MilesToKm : ', convert10MilesToKm); //  "16.09 km"
  console.log('convert20MilesToKm : ', convert20MilesToKm); //  "32.19 km"
  console.log('convert30MilesToKm : ', convert30MilesToKm); //  "48.28 km"

//   x => f(a, b, c) // x(a,b,c)
//   h => g(a) // h(a)
//   i => h(b) // i(b)
//   z => i(c) // z(c)

//   //  g(a)(b)(c)

const converterOld2 = (toUnit) => (factor) => (offset) => (input) => {
    const converterOffset = offset || 0;
    return [((converterOffset + input) * factor).toFixed(2), toUnit].join(' ');
  };
  
  const kmConverterWithUnit = converterOld2('km'); // function with a single params
  const kmConverterWithFactor = kmConverterWithUnit(1.60936); // function with a single params
  const kmConverter = kmConverterWithFactor(undefined); // function with a single params
  console.log('kmConverter : ', kmConverter);
  console.log('kmConverter(10) : ', kmConverter(10)); //  "16.09 km"
  
  const convert10MilesToKm11 = converterOld2('km')(1.60936)(undefined)(10);
  const convert20MilesToKm12 = converterOld2('km')(1.60936)(undefined)(20);
  const convert30MilesToKm13 = converterOld2('km')(1.60936)(undefined)(30);
  
  console.log('convert10MilesToKm11 : ', convert10MilesToKm11); //  "16.09 km"
  console.log('convert20MilesToKm12 : ', convert20MilesToKm12); //  "32.19 km"
  console.log('convert30MilesToKm13 : ', convert30MilesToKm13); //  "48.28 km"

const head = {
    data: "798",
    next: {
        data: "7924",
        next: {

        }
    }
}

stack = [7,8,7,8,9]

let x = 5
let y = x
x = 6
// console.log(y)

const sum = (a, b) => {
  return a + b
}
console.log(sum(5, 8))
console.log(sum(5, 17))

const sum1 = (a) => {
  return (b) => {
    return a + b
  } 
}
const sumWith5 = sum1(5)
console.log(sumWith5(8))
console.log(sumWith5(17))


function outerFunction() {
  let count = 0;
  function plusOne() {
      count++
      return count
  }
  function minusOne() {
      count--
      return count
  }
  let plus = plusOne

  return {
      plusOne:plusOne(),
      minusOne:minusOne(),
      _plusOne: plusOne
  }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusOne)
console.log(innerFuncs.plusOne)

const useState1 = (val) => {
  let state = val
  const setState = (newVal) => {
    state = newVal
  }

  return [state, setState]
}
const [newNum, setNewNum] = useState1(5);
console.log(newNum)
setNewNum(5)
console.log(newNum)