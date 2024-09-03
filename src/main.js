import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';

const passwordElement = document.querySelector('button');

const displayPassword = document.querySelector('h2');

passwordElement.addEventListener('click', () => {
  const password = nanoid();
  displayPassword.innerHTML = password;
});

displayPassword.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
  alert('Senha copiada!');
});