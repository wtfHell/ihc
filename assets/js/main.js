document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const message = document.getElementById('message');
    const wordCount = document.getElementById('wordCount');
    const feedback = document.getElementById('formFeedback');

    message.addEventListener('input', () => {
        const words = message.value.trim().split(/\s+/).filter(word => word.length > 0).length;
        wordCount.textContent = `Palabras: ${words}`;
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const messageText = message.value.trim();
        const words = messageText.split(/\s+/).filter(word => word.length > 0).length;

        if (!name) {
            showFeedback('Por favor, completa tu nombre.', 'error');
        } else if (!validateEmail(email)) {
            showFeedback('Verifica tu correo electrónico.', 'error');
        } else if (words < 10) {
            showFeedback('Tu mensaje debe tener al menos 10 palabras.', 'error');
        } else {
            showFeedback('¡Tu mensaje ha sido enviado con éxito!', 'success');
            form.reset();
            wordCount.textContent = 'Palabras: 0';
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function showFeedback(message, type) {
        feedback.textContent = message;
        feedback.className = type === 'success' ? 'text-success' : 'text-danger';
        feedback.style.display = 'block';
        
        setTimeout(() => {
            feedback.style.display = 'none';
        }, 3000);
    }
});