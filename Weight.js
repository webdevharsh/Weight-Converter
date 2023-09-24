//javascriptpro_
let kgInput = document.querySelector('#kg');
let lbInput = document.querySelector('#lb');
let ouncesInput = document.querySelector('#ounces');

let convertFromkg = () => {
        let kg = kgInput.value;
        lbInput.value = (kg * 2.205).toFixed(2);
        ouncesInput.value = (kg * 35.274).toFixed(2);
}

let convertFromLb = () => {
        let lb = lbInput.value;
        kgInput.value = (lb / 2.205).toFixed(2);
        ouncesInput.value = (lb * 16).toFixed(2);
}

let convertFromOunces = () => {
        let ounces = ouncesInput.value;
        kgInput.value = (ounces / 35.274).toFixed(2);
        lbInput.value = (ounces / 16).toFixed(2);
}

convertFromkg();
kgInput.addEventListener('input', convertFromkg);
lbInput.addEventListener('input', convertFromLb);
ouncesInput.addEventListener('input', convertFromOunces);
