const form = document.querySelector('form')
console.log(form);

// this use case give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
    //  e.preventDefault => means  jo bhi default value hai wog yaha rok ke rakhenge 
    e.preventDefault()
    // parseInt means => string ko integer mey convert korenge
    // agr hum a jo  height form ke ander likha or bhar likha toh difference kya hai?
    // that defines height form ke ander likhne bath exact value ayega
    // or form ke bahar likhne se when page is reload then script is underway thats why there is no value given its an empty value rehega 
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')


    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `please give a valid height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `please give a valid weight ${weight}`;
        
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // show the result
        result.innerHTML = `<span>${bmi}</span>`
    }
    // document.querySelector('#under').value
    // if(bmi<18.6){
    //     result.innerHTML=`<span>Under weight :${bmi}</span>`;
    //     console.log(result);
        
    //     }else if(bmi>18.6 && bmi<24.9){
    //         result.textContent=`Normal Weight:${bmi}`;
    //     }else{
    //         result.textContent=`Over Weight : ${bmi}`
    //     }
    // result.innerHTML = `${height}`

});