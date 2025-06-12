const cards = document.querySelectorAll('.project-card');

cards.forEach(card =>{
    const info = card.querySelector('.project-info');

    card.addEventListener('mouseenter', ()=>{
        info.classList.remove('title_only');
    });

    card.addEventListener('mouseleave', ()=>{
        info.classList.add('title_only');
    });
});