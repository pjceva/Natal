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
