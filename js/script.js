document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector('.name-input');
    const greetButton = document.querySelector('.greet-button');
    const personalGreeting = document.querySelector('.personal-greeting');

    // Function to create personalized greeting
    const createGreeting = (name) => {
        const hour = new Date().getHours();
        let timeGreeting = '';
        
        if (hour >= 5 && hour < 12) timeGreeting = 'Good morning';
        else if (hour >= 12 && hour < 18) timeGreeting = 'Good afternoon';
        else timeGreeting = 'Good evening';

        return `${timeGreeting}, ${name}! 👋`;
    };

    // Handle greeting button click
    greetButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            personalGreeting.textContent = createGreeting(name);
            personalGreeting.classList.add('show');
        } else {
            nameInput.focus();
            personalGreeting.classList.remove('show');
        }
    });

    // Handle Enter key press
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            greetButton.click();
        }
    });

    // Remove greeting when input changes
    nameInput.addEventListener('input', () => {
        personalGreeting.classList.remove('show');
    });
});