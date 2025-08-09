const keyboard = document.querySelector(".keyboard")
const typingArea = document.getElementById('typing-area');
keyboard.style.transform = 'scale(0.75)'


const pressedKeys = new Set();

window.addEventListener('keydown', function (e) {
    const key = e.key.toUpperCase();

    // Only handle A-Z and Spacebar
    if ((key >= 'A' && key <= 'Z') || e.code === 'Space') {
      const keyId = e.code === 'Space' ? 'spacebar' : key;
      const keyDiv = document.getElementById(keyId);

      if (keyDiv && !pressedKeys.has(keyId)) {
        keyDiv.style.borderWidth = '4px 4px 8px 8px';
        pressedKeys.add(keyId);
      }
      
      if (e.code === 'Space' && document.activeElement !== typingArea) {
        e.preventDefault();
      }
    }
});

window.addEventListener('keyup', function (e) {
    const key = e.key.toUpperCase();

    if ((key >= 'A' && key <= 'Z') || e.code === 'Space') {
      const keyId = e.code === 'Space' ? 'spacebar' : key;
      const keyDiv = document.getElementById(keyId);

      if (keyDiv) {
        keyDiv.style.borderWidth = '6px 8px 20px 20px';
        pressedKeys.delete(keyId);
      }
    }
});