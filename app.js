// form.addEventListener("submit",function(e){
//     e.preventDefault();
//     alert("cliked");
// });
document.getElementsByClassName("calcbtn")[0].addEventListener("click",function(e){
    e.preventDefault();
    let weight = parseInt(document.getElementById("weight").value);
    let height = parseInt(document.getElementById("height").value);
    let results = document.getElementById("results");
    let message = document.getElementById("message");

    if((height === '') || (height < 0) || (isNaN(height))){
        results.innerHTML = "Please provide a valid height";
    }else if((weight === '') || (weight < 0) || (isNaN(weight))){
        results.innerHTML = "Please provide a valid weight";
    }else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.6) message.innerHTML = "You'are underweight";
        else if(bmi > 18.6 && bmi < 24.9)  message.innerHTML = "Normal";
        else if(bmi > 24.9) message.innerHTML = "You're Overweight";
    }
});