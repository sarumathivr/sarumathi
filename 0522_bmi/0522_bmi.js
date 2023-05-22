//To calculate BMI
var weight,height,measure,bmi,error;

function calculate(){
    weight=document.getElementById("weight").value ;
    height=document.getElementById("height").value ;
    error="Please enter some values";
    height /= 100;       //assignment operator: same as division
    height *=height;     //assignment operator: same as multiplication
    /*bmi= weight in kilograms divided by height in meters squared.
    eg:height=152cm ;weight=50 kg;
    height /= 100  gives 1.52m
    height *= height gives 1.52*1.52 =2.3104 
    bmi=50/2.3104 = 21.64127*/
    bmi=weight/height;
    bmi=bmi.toFixed(1); //toFixed() method rounds the string to a specified number of decimals.

    if (bmi<=18.4){
        measure = "Your BMI is " +  bmi +  " which means" +  " you are Underweight" ;
    }
    else if(bmi>=18.5 && bmi<=24.9){
        measure = "Your BMI is " +  bmi +  " which means" +  " you are Normal" ;
    }
    else if(bmi>=25 && bmi<=29.9){
        measure = "Your BMI is " +  bmi +  " which means" +  " you are Overweight" ;
    }
    else if(bmi>=30){
        measure = "Your BMI is " +  bmi +  " which means" +  " you are Obese" ;
    }
    


    if(weight==0){
        document.getElementById("result").innerHTML = error ;
    }
    else if(height==0){
        document.getElementById("result").innerHTML = error ; 
    }
    else{
        document.getElementById("result").value = measure ; 
    }

    if(weight<0){
        document.getElementById("result").innerHTML = "Negative values are not allowed" ; 
    }

}