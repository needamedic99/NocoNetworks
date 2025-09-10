//  little popup thing

document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');

  learnMoreBtn.addEventListener('click', () => {
    popup.classList.remove('hidden');
  });

  closePopup.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
});
