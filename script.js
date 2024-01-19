let lightMode = localStorage.getItem('lightMode'); // Get the saved light mode preference

const lightModeToggle = document.querySelector('#light-mode-toggle'); // Select the light mode toggle button element

// Enable light mode
const enableLightMode = () => {
    document.body.classList.add('lightmode');      // Add the 'lightmode' class to the body
    localStorage.setItem('lightMode', 'enabled');  // Save the updated preference in localStorage
};

// Disable light mode
const disableLightMode = () => {
    document.body.classList.remove('lightmode');   // Remove the 'lightmode' class from the body
    localStorage.removeItem('lightMode');          // Remove the preference from localStorage
};

lightModeToggle.addEventListener("click", () => {
    lightMode = localStorage.getItem('lightMode'); // Update the 'lightMode' variable whenever the button is clicked
    if (lightMode !== 'enabled') {
        enableLightMode();
    } else {
        disableLightMode();
    }
});