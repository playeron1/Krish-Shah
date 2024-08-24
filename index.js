document.addEventListener('DOMContentLoaded', () => {
    const animatedText = "Upcoming Software Engineer | Cloud Engineer | Cyber Security Engineer";
    const remainingText = document.getElementById('remaining-text');
    const animatedTextElement = document.getElementById('animated-text');
    
    function typeText(element, text, speed, callback) {
        let index = 0;

        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }

        type();
    }

    typeText(animatedTextElement, animatedText, 100, () => {
        remainingText.style.display = 'block';
        remainingText.classList.add('float-down');
    });
});