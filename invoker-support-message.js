if (!('command' in HTMLButtonElement.prototype)) {
  const warning = document.createElement('p');
  warning.classList.add('support-warning');
  warning.textContent = 'ブラウザーがInvoker Commandsに対応していません。';
  document.body.firstElementChild.after(warning);
}