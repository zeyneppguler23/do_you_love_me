const slider = document.getElementById('loveSlider');
const gif = document.getElementById('loveGif');

slider.addEventListener('input', function() {
    const gifNumber = slider.value;
    gif.src = `assets/gifs/gif${gifNumber}.gif`;
});
