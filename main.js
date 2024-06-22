const form = document.getElementById('formulario');
const campoB = document.getElementById('campoB');  
const campoA = document.getElementById('campoA');  
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');

function validaCampo(campoA, campoB) {
    return parseFloat(campoB) > parseFloat(campoA); 
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const campoAValue = campoA.value;
    const campoBValue = campoB.value;
    const formEValido = validaCampo(campoAValue, campoBValue);

    if (formEValido) {
        successMessage.innerHTML = `Formulário válido: Campo B é maior que Campo A.`;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        
        campoA.value = '';
        campoB.value = '';
    } else {
        campoB.style.border = '1px solid red';
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
});

campoB.addEventListener('keyup', function() {
    const campoAValue = campoA.value;
    const campoBValue = campoB.value;
    const formEValido = validaCampo(campoAValue, campoBValue);

    if (!formEValido) {
        campoB.classList.add('error');
        errorMessage.style.display = 'block';
    } else {
        campoB.classList.remove('error');
        errorMessage.style.display = 'none';
    }
});