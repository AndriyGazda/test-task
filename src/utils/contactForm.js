document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');

  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();

    let isValid = true;
    const data = {};

    form
      .querySelectorAll('.error-message')
      .forEach(el => (el.textContent = ''));
    form
      .querySelectorAll('input, textarea')
      .forEach(el => el.classList.remove('error'));

    const name = document.getElementById('first-name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim()) {
      setError(name, "Введіть ім'я");
      isValid = false;
    } else {
      data.firstName = name.value.trim();
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email.value.trim()) {
      setError(email, 'Введіть email');
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      setError(email, 'Некоректний email');
      isValid = false;
    } else {
      data.email = email.value.trim();
    }

    if (!message.value.trim()) {
      setError(message, 'Напишіть повідомлення');
      isValid = false;
    } else {
      data.message = message.value.trim();
    }

    if (isValid) {
      let stored = JSON.parse(localStorage.getItem('contacts')) || [];
      stored.push(data);

      localStorage.setItem('contacts', JSON.stringify(stored));

      form.reset();

      const popup = document.getElementById('successPopup');
      popup.style.display = 'flex';

      const closeBtn = document.getElementById('closePopup');
      closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
      });

      popup.addEventListener('click', e => {
        if (e.target === popup) {
          popup.style.display = 'none';
        }
      });
    }
  });

  function setError(element, message) {
    element.classList.add('error');
    const errorEl = element.parentElement.querySelector('.error-message');
    if (errorEl) errorEl.textContent = message;
  }
});
