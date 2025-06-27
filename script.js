document.addEventListener('DOMContentLoaded', function () {
  const button = document.createElement('button');
  button.textContent = '🌙 Alternar Modo Escuro';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.padding = '10px 16px';
  button.style.backgroundColor = '#444';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '6px';
  button.style.cursor = 'pointer';
  button.style.zIndex = '10000';
  document.body.appendChild(button);

  // Verifica se modo escuro estava ativo anteriormente
  if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    button.textContent = '☀️ Modo Claro';
  }

  button.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
      button.textContent = '☀️ Modo Claro';
    } else {
      localStorage.setItem('dark-mode', 'disabled');
      button.textContent = '🌙 Alternar Modo Escuro';
    }
  });
});
