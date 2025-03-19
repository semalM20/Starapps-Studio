/* script.js */
function changeColor(color) {
    document.getElementById('umbrellaImage').src = 'assets/' + color + '-umbrella.png';
    const loader = document.getElementById('loader');
    if (color === 'pink') {
        loader.style.borderTopColor = 'pink';
    } else if (color === 'blue') {
        loader.style.borderTopColor = 'blue';
    } else if (color === 'yellow') {
        loader.style.borderTopColor = 'yellow';
    }
}

function uploadLogo(event) {
    const logo = document.getElementById('logoImage');
    const loader = document.getElementById('loader');
    const umbrella = document.getElementById('umbrellaImage');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        loader.style.display = 'block';
        umbrella.style.display = 'none';
        logo.style.display = 'none';
        reader.onload = function (e) {
            setTimeout(() => {
                logo.src = e.target.result;
                loader.style.display = 'none';
                umbrella.style.display = 'block';
                logo.style.display = 'block';
            }, 1000);
        };
        reader.readAsDataURL(file);
    }
}