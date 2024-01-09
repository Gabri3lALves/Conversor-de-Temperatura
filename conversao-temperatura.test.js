const Conversao = require('./conversao-temperatura')

const conv = new Conversao()


it('Deve converter de celsius para Fahrenheit', () => {
    expect(conv.celsiusFahrenheit(0)).toBe(32)
})

it('Deve converter de celsius para Kelvin', () => {
    expect(conv.celsiusKelvin(0)).toBe(273.15)
})

it('Deve converter de fahrenheit para celsius', () => {
    expect(conv.fahrenheitCelsius(40)).toBe(4.444444444444445)
})

it('Deve converter de fahrenheit para kelvin', () => {
    expect(conv.fahrenheitKelvin(95)).toBe(308.15)
})

it('Deve converter de kelvin para celsius', () => {
    expect(conv.kelvinCelsius(1988)).toBe(1714.85)
})

it('Deve converter de kelvin para Fahrenheit', () => {
    expect(conv.kelvinFahrenheit(986)).toBe(-3184.8700000000003)
})