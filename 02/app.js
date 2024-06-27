document.addEventListener('DOMContentLoaded', init);

function init() {
    try {
        const clickEl = document.querySelector('.error--click');
        const enterEl = document.querySelector('.error--enter');

        setRandomPosition(clickEl);
        setRandomPosition(enterEl);

        initEventWithError(clickEl, 'click', new RangeError('Błąd zakresu!'));
        initEventWithError(enterEl, 'mouseenter', new TypeError('Błąd typu!'));
    } catch(e) {
        console.log('znalezioniono błąd')
    }

}

function setRandomPosition(element, error = null) {
    try {
        element.style.top = Math.random() * 600 + 'px';
        element.style.left = Math.random() * 800 + 'px';

        if(error) {
            throw error;
        }
    } catch(e) {
        displayError(e);
    }
}

function initEventWithError(element, eventName, error) {
    try{
        element.addEventListener(eventName, function() {
            setRandomPosition(this, error);
        })
    } catch(e) {
        console.log('błąd')
    }
}

function displayError(errorText) {
    const alertEl = document.querySelector('.alert');
    
    alertEl.firstElementChild.innerText = errorText;
    alertEl.classList.remove('alert--hidden');
}