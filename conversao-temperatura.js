class Conversao{
    celsiusFahrenheit(celsius){
        const fahrenheit = (9/5 * celsius) + 32 
        return fahrenheit
    }

    celsiusKelvin(celsius){
        const kelvin = celsius + 273.15
        return kelvin
    }

    fahrenheitCelsius(fahrenheit){
        const celsius = 5/9 * (fahrenheit - 32)
        return celsius
    }

    fahrenheitKelvin(fahrenheit){
        const kelvin = 5/9 * (fahrenheit-32) + 273.15
        return kelvin
    }

    kelvinCelsius(kelvin){
        const celsius = kelvin - 273.15
        return celsius
    }

    kelvinFahrenheit(kelvin){
        const fahrenheit = 9/5* (kelvin - 2773.15) + 32
        return fahrenheit


    }

}

module.exports = Conversao