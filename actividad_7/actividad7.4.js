function toCelcius(temperature){
    let fahrenheit = Number(temperature);
    return((fahrenheit-32)/1.8);
}

function toFahrenheit(temperature){
    let celcius = Number(temperature);
    return((1.8*celcius)+32);
}

console.log(toCelcius(3));
console.log(toFahrenheit(3));