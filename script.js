document.getElementById('generate-password-btn').addEventListener('click', generatePassword);

document.getElementById('copy-password-btn').addEventListener('click', copyPassword);

document.getElementById('password-strength').addEventListener('input', function() {

  document.getElementById('password-strength-value').textContent = this.value;

});

function generatePassword() {

  const passwordLength = parseInt(document.getElementById('password-strength').value);

  const includeLowercase = document.getElementById('include-lowercase').checked;

  const includeUppercase = document.getElementById('include-uppercase').checked;

  const includeNumbers = document.getElementById('include-numbers').checked;

  const includeSpecial = document.getElementById('include-special').checked;

  let characters = '';

  if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';

  if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (includeNumbers) characters += '0123456789';

  if (includeSpecial) characters += '!@#$%^&*()_+[]{}|;:,.<>?';

  if (characters === '') {

    alert('Please select at least one character type');

    return;

  }

  let password = '';

  for (let i = 0; i < passwordLength; i++) {

    const randomIndex = Math.floor(Math.random() * characters.length);

    password += characters[randomIndex];

  }

  document.getElementById('password-display').value = password;

}

function copyPassword() {

  const passwordDisplay = document.getElementById('password-display');

  passwordDisplay.select();

  passwordDisplay.setSelectionRange(0, 99999); // For mobile devices

  document.execCommand('copy');

}
