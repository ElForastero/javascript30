// No need in js 😎

const photos = Array.from(document.getElementsByClassName('photo'));

photos.map(photo => photo.addEventListener('mouseenter', event => {
  photos.filter(photo => photo !== event.target).map(photo => photo.classList.add('photo--grayscale'));
}));

photos.map(photo => photo.addEventListener('mouseleave', () => {
  photos.map(photo => photo.classList.remove('photo--grayscale'));
}));
