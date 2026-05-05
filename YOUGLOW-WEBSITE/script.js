let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let profileicon = document.querySelector('.profile-icon');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    profileicon.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    profileicon.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        const nameInput = document.querySelector('input[name="name"]');
        const numberInput = document.querySelector('input[name="number"]');
        const emailInput = document.querySelector('input[name="email"]');
        const dateInput = document.querySelector('input[name="date"]');

        if (validateName(nameInput.value) && validateNumber(numberInput.value) && validateEmail(emailInput.value) && validateDate(dateInput.value)) {
            
            alert('Form submitted successfully!. We will send you email once the booking date is accepted.');
            
        } else {
            alert('Please ensure accurate completion of all fields.');
        }
    });

    
    function validateName(name) {
        
        return name.trim() !== '';
    }

    function validateNumber(number) {
        
        return !isNaN(number);
    }

    function validateEmail(email) {
        
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateDate(date) {
        
        return date.trim() !== '';
    }
});
