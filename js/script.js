function convert() {
    var celsius = parseFloat(document.getElementById('celcius').value);
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
        document.getElementById('result').value = celsius + "°C × (9/5) + 32 = " + fahrenheit.toFixed(2) + "°F";
    } else {
        alert("Masukkan suhu yang valid dalam Celcius.");
    }
}

function reset() {
    document.getElementById('celcius').value = "";
    document.getElementById('fahrenheit').value = "";
    document.getElementById('result').value = "";
}

function reverse() {
    var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        var celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celcius').value = celsius.toFixed(2);
        document.getElementById('result').value = fahrenheit + "°F - 32 × (5/9) = " + celsius.toFixed(2) + "°C";
    } else {
        alert("Masukkan suhu yang valid dalam Fahrenheit.");
    }
}
