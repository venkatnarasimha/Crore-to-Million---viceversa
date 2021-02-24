const cr = document.querySelector('.cr');
const mi = document.querySelector('.mi');
const currentRate = document.querySelector('.current');

window.onload = () =>{
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
    .then((response) => response.json())
    .then((json) => {
        currentRate.innerHTML=json.rates.INR;
    });
    
};

function mitocr() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
    .then((response) => response.json())
    .then((json) => {
        cr.value = (mi.value * (json.rates.INR)/10).toFixed(2);
    });
}

function crtomi() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD&symbols=INR')
    .then((response) => response.json())
    .then((json) => {
        mi.value = ((cr.value/(json.rates.INR))*10).toFixed(2);
    });
}

mi.addEventListener('input', () => {
    mitocr();
})

cr.addEventListener('input', () => {
    crtomi();
})
