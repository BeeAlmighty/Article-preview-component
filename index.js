const shareBtn = document.querySelectorAll('.share--icon');
const cardSocials = document.querySelector('.card--author__socials');

shareBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    cardSocials.classList.toggle('hidden');
  })
})