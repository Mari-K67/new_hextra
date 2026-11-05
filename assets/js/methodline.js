document.addEventListener('DOMContentLoaded', function () {
  const getCopyIcon = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    `;
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    return svg;
  };

  const getSuccessIcon = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.innerHTML = `
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
    `;
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    return svg;
  };

  document.querySelectorAll('.api-line[data-copy]').forEach(function (element) {
    // Создаем кнопку копирования
    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'methodline-copy-btn';
    copyBtn.setAttribute('aria-label', 'Copy');
    copyBtn.setAttribute('title', 'Copy');

    // Добавляем иконку копирования
    const copyIconDiv = document.createElement('div');
    copyIconDiv.className = 'copy-icon';
    copyIconDiv.appendChild(getCopyIcon());
    copyBtn.appendChild(copyIconDiv);

    // Добавляем иконку успеха
    const successIconDiv = document.createElement('div');
    successIconDiv.className = 'success-icon';
    successIconDiv.appendChild(getSuccessIcon());
    copyBtn.appendChild(successIconDiv);

    element.appendChild(copyBtn);

    copyBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const copyText = element.getAttribute('data-copy');

      navigator.clipboard.writeText(copyText).then(function () {
        copyBtn.classList.add('copied');
        setTimeout(function () {
          copyBtn.classList.remove('copied');
        }, 1000);
      }).catch(function (err) {
        console.error('Failed to copy text: ', err);
      });
    });
  });
});
