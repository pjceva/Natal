document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o clique para escurecer e clarear os cards
    const cards = document.querySelectorAll('.card.revelar');
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Revela o card clicado
            card.classList.add('revelado');
            
            // Desativa os outros cards
            cards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.style.pointerEvents = 'none'; // Desativa o clique nos outros cards
                }
            });
        });
    });

    // Adiciona o rastro brilhante
    document.body.addEventListener('mousemove', (event) => {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');

        // Define a posição da partícula
        sparkle.style.left = `${event.pageX}px`;
        sparkle.style.top = `${event.pageY}px`;

        // Escolhe uma cor aleatória entre vermelho e verde
        const randomColor = Math.random() > 0.5 ? '#ff0000' : '#00ff00';
        sparkle.style.background = `radial-gradient(circle, ${randomColor}, rgba(255, 255, 255, 0))`;
        sparkle.style.boxShadow = `0 0 10px ${randomColor}`;

        document.body.appendChild(sparkle);

        // Remove o rastro após a animação
        sparkle.addEventListener('animationend', () => {
            sparkle.remove();
        });
    });
});
