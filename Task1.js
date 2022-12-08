
function verify(text) {
    const stack = [];
    for (const c of text) {
      if ("([<".includes(c)) {
        stack.push(c);
      } else if (")]>".includes(c)) {
        if (stack.length === 0) {
          return 0;
        }
        if (c === ")" && stack[stack.length - 1] !== "(") {
          return 0;
        }
        if (c === "]" && stack[stack.length - 1] !== "[") {
          return 0;
        }
        if (c === ">" && stack[stack.length - 1] !== "<") {
          return 0;
        }
        stack.pop();
      }
    }
    return stack.length === 0 ? 1 : 0;
  }

console.log(verify("---(++++)----"));  // 1
console.log(verify(""));  // 1
console.log(verify("before ( middle []) after "));  // 1
console.log(verify(")("));  // 0
console.log(verify("<(>)"));  // 0
console.log(verify("([<>()]<>)"));  // 1
console.log(verify("([)"));  // 0

  

