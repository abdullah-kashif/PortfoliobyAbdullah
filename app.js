  document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', () => {
      const icon = item.querySelector('.icon-circle');
      icon.classList.add('active');

      setTimeout(() => {
        icon.classList.remove('active');
      }, 300);
    });
  });
