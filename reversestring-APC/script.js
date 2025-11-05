const input = document.getElementById('textInput');
const button = document.getElementById('reverseBtn');
const result = document.getElementById('result');

function reverseText(text) {
  return text.split('').reverse().join('');
}

input.addEventListener('input', () => {
  const text = input.value;
  result.textContent = reverseText(text);
  button.disabled = text.length < 3;
});

button.addEventListener('click', () => {
  result.textContent = reverseText(input.value);
});
