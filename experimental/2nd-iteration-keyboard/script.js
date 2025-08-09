// --- DOM Elements ---
const textToTypeContainer = document.getElementById('text-to-type');
const typingArea = document.getElementById('typing-area');

// --- State Variables ---
// The sentence the user needs to type could be fetched from an API.
const originalText = "this is the line which will be displayed and you can type it out to test your speed";
let charSpans; // Will hold an array of all the <span> elements for each character
let currentIndex = 0; // Tracks the current character the user needs to type


function initializeTest() {
        // Note for future-self:
        // It completely clears out the old sentence from the display.
        // Without this, if you add a "Restart" or "New Test" button that calls this
        // function again, the new text would just get tacked onto the end of the old text.
        // This line ensures we start with a clean slate every time.
        textToTypeContainer.innerHTML = '';


    originalText.split('').forEach(char => {
        const span = document.createElement('span');
        span.innerText = char;
        span.classList.add('char');
        // Add a special class for spaces to handle them if typed incorrectly
        if (char === ' ') {
            span.classList.add('space');
        }
        textToTypeContainer.appendChild(span);
    });

    charSpans = textToTypeContainer.querySelectorAll('span');

    // Note for future-self: This 'if' statement is crucial.
    // If the text from an API call is empty, charSpans will have a length of 0.
    // Without this check, the next line would try to access charSpans[0] (which is undefined)
    // and the whole app would crash. This prevents that.
    if (charSpans.length > 0) {
        charSpans[currentIndex].classList.add('cursor');
    }

    // Note for future-self: The 'autofocus' in the HTML
    // only works once when the page first loads. If the user clicks a "Restart"
    // button, the focus will be on that button. This line programmatically puts
    // the focus back here so the user can start typing again immediately.
    typingArea.focus();
}



typingArea.addEventListener('keydown', (e) => {
    //keydown because it captures all keys, including Space, Shift, etc.
    
    // If Cmd or Ctrl is held down, let the browser handle the shortcut.
    // This allows Cmd+R (refresh), Ctrl+C (copy), etc. to work normally.
    if (e.metaKey || e.ctrlKey) {
        return;
    }
    
    // Stop the test if all characters have been typed
    if (currentIndex >= charSpans.length) {
        // add logic here to calculate WPM and show results
        return;
    }
    
    // We also ignore Shift and Tab so they don't count as typed characters.
    if (e.key === 'Shift' || e.key === 'Tab') {
        return; 
    }
    
    // For all other keys, prevent the browser's default action (like scrolling on space).
    e.preventDefault();
    
    const pressedKey = e.key;
    const currentSpan = charSpans[currentIndex];
    const expectedChar = currentSpan.innerText;
    
    currentSpan.classList.remove('cursor');
    
    // Comparison Logic 
    if (pressedKey === expectedChar) {
        currentSpan.classList.add('correct');
    } else {
        currentSpan.classList.add('incorrect');
    }
    
    // Move to the next character
    currentIndex++;
    
    // Place the cursor on the next character if the test isn't over
    if (currentIndex < charSpans.length) {
        charSpans[currentIndex].classList.add('cursor');
    }
});




/**
 * If the user clicks anywhere on the body, we re-focus the hidden
 * input to ensure they can continue typing without interruption.
 */
document.body.addEventListener('click', () => {
    typingArea.focus();
});




//Start the application
initializeTest();
