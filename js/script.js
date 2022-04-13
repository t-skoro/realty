const form = document.querySelector('.form');
const input = document.querySelector('.form__input');


// сушаем событие focus
input.addEventListener('focus', function () {
    form.classList.add('form--active');
});

// сушаем событие когда focus пропадает
input.addEventListener('blur', function () {
    form.classList.remove('form--active');
});
