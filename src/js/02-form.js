const form = document.querySelector('.feedback-form');

if (localStorage.getItem('feedback-form-state')) {
  form.elements.message.value = JSON.parse(localStorage.getItem('feedback-form-state')).message ?? '';
  form.elements.email.value = JSON.parse(localStorage.getItem('feedback-form-state')).email ?? '';
}

form.addEventListener('input', function (e) {
  const infos = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  if (e.target.name === 'message') {
    infos.message = e.target.value;
  } else {
    infos.email = e.target.value;
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(infos));
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log({
    message: e.target.elements.message.value,
    email: e.target.elements.email.value,
  });

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
