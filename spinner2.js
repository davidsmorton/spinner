

//also could have copied the logic from typewriter.js to refactor this. 


const  spinner2 = function () {
  const dash = ["\r|   ", '\r/   ', '\r-   ', '\r\\   ', '\r/   ', '\r-   ', '\r/   ', '\r|   ']
  let timInt = 100
  process.stdout.write("\n");
  for(let i = 0; i < dash.length; i++) {
    setTimeout(() => {
        process.stdout.write(dash[i] );
        }, timInt);
    timInt += 200 
  };
}
console.log(spinner2());


// make an array used the logic from the typewriter. js file  