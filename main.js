
// get veloue 
function getValue() {
    const inputField = document.getElementById('inputData');
    const value = inputField.value
    console.log(value)
    function intoNumber(number) {
        table = ""
        for (let i = 1; i <= 10; i++) {
            let result = number * i;
            let test = Math.floor(result * 1000) / 1000;
            table += `<div class="">${number} * ${i} =  ${test }</div>`
          
        }
   
        return (table);
   
    };
  
    let outputNamta = intoNumber(value);
    console.log(outputNamta);
    document.getElementById('data').innerHTML = (outputNamta);
};