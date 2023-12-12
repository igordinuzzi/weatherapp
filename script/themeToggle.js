// themeToggle.js
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const toggleButton = document.getElementById('modeToggle');

    // Check for saved user preference, if any, on page load
    if (localStorage.getItem('darkMode') === 'true') {
        body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        // Save or remove the preference in localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'true');
        } else {
            localStorage.removeItem('darkMode');
        }
    });
});
