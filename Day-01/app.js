window.addEventListener('keydown', event => {
    const keyCode = event.keyCode;
    const button = document.querySelectorAll(`div[data-key="${keyCode}"]`)[0];

    if(!button) {
        return false;
    }

    const audioElement = document.querySelectorAll(`audio[data-key="${keyCode}"]`)[0];
    audioElement.pause(0);
    audioElement.currentTime = 0;
    audioElement.play();

    animateButton(button);
});

const animateButton = (button) => {
    button.classList.remove('animated');
    button.classList.add('animated');
    button.addEventListener('transitionend', () => button.classList.remove('animated'));
};
