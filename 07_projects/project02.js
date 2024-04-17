const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const results = document.querySelector('#results');

    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);
 
    if (height===''||isNaN(height) || height <= 0) {
        results.innerHTML = `Please provide a valid height`;
    } else if (weight===''||isNaN(weight) || weight <= 0){
            results.innerHTML = `Please provide a valid weight`;
        }else{
           const bmi=(weight/((height*height)/10000)).toFixed(2) 
            //show the result
            results.innerHTML=`<span>${bmi}</span>`;
        }
    });
