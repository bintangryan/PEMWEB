/*var apiKey = 'b761d568b0bc05cc3c5d9c7eca8e8832'; // Gantilah dengan API Key Anda
var city = 'Surabaya';

var xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, true);

xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);

        // Mengakses elemen HTML untuk menampilkan data cuaca
        var cuacaElement = document.getElementById('suhu-sby');

        // Menampilkan data cuaca di dalam elemen HTML
        cuacaElement.innerHTML = `Cuaca di ${city}: ${data.weather[0].description}`;
    } else {
        console.error('Gagal mengambil data cuaca.');
    }
};

xhr.send();*/


var apiKey = 'b761d568b0bc05cc3c5d9c7eca8e8832'; // Gantilah dengan API Key Anda
var city = 'SURABAYA';

var xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, true);

xhr.onload = function () {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var suhuK = data.main.temp; // Suhu dalam Kelvin
        var suhuC = suhuK - 273.15; // Konversi ke Celsius

        var suhuSurabayaElement = document.getElementById('suhusby');
        suhuSurabayaElement.textContent = `${suhuC.toFixed(2)}°C`;
    } else {
        console.error('Gagal mengambil data cuaca.');
    }
};

xhr.send();

