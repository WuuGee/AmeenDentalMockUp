document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('appointmentForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    message.classList.remove('d-none');
    form.reset();
    setTimeout(() => {
      message.classList.add('d-none');
    }, 4000);
  });
});
