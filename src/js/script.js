let hora = document.getElementById('horas');
let minuto = document.getElementById('minutos');
let segundo = document.getElementById('segundos');

const relogio = setInterval(function tempo() {
    const data = new Date();

    const hr = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;
})