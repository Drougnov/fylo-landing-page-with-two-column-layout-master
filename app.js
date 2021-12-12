function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// ----------------------------------------------------------------form-one-------------------------------------------------------------------
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const formOne = document.getElementById('form-one');
const inputOne = document.getElementById('input-one');
const errorOne = document.getElementById('error-one');

formOne.addEventListener('submit', (e) => {
    let emailValue = inputOne.value;
    if (validateEmail(emailValue)) {
        errorOne.style.display = "none";
    }
    else {
        errorOne.style.display = "block";
        e.preventDefault();
    }
})
// --------------------------------------------------------------form-two-----------------------------------------------------------------------------
const formTwo = document.getElementById('form-two');
const inputTwo = document.getElementById('input-two');
const errorTwo = document.getElementById('error-two');

formTwo.addEventListener('submit',(e)=>{
    let emailValueTwo = inputTwo.value;
    if(validateEmail(emailValueTwo)){
        errorTwo.style.display = "none";
    }
    else{
        errorTwo.style.display = "block";
        e.preventDefault();
    }
})