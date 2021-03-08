const body = document.querySelector('.wrap');
for (let i = 0; i < 200; i++) {
    const particle = document.createElement('div');
    particle.className = 'c';
    body.appendChild(particle);    
}