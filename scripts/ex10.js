const temperature = document.getElementById('temperature');
const resultado = document.getElementById('resultado');

function transformarEmCelsius() {
    const tem = temperature.value;
    const temperaturaEmCelsius = (tem - 32) / 1.8;
    resultado.innerHTML = `${temperaturaEmCelsius.toFixed(2)}°C`;
}

function transformarEmFahrenheit() {
    const tem = temperature.value;
    const temperaturaEmFahrenheit = (tem * 1.8) + 32;
    resultado.innerHTML = `${temperaturaEmFahrenheit.toFixed(2)}°F`;
}