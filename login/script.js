// Toggle password visibility
document.addEventListener('DOMContentLoaded', () => {
  const togglePasswordBtn = document.querySelector('.toggle-password');
  const passwordInput = document.getElementById('password');

  togglePasswordBtn.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePasswordBtn.textContent = '🙈';
    } else {
      passwordInput.type = 'password';
      togglePasswordBtn.textContent = '👁️';
    }
  });
});
