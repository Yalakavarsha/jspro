var alphabets = ["A","B","C","E","F","G"];
console.log(`before operations ${alphabets}`)
alphabets.pop();
alphabets.push("R");
alphabets.shift();
alphabets.unshift("Z");
alphabets.splice(1,2,"a");
console.log(alphabets);