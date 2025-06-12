const cards = document.querySelectorAll('.project-card');

function renderProjects(projects) {
  const container = document.getElementById('projects-container');
  container.innerHTML = projects.map(project => {
    
    const isComingSoon = project.linkClass.includes('coming_soon');
    const linkText = isComingSoon ? 'Coming Soon' : 'View Project';

    
    return`
    <div class="project-card">
      <img src="${project.image}" alt="Project Screenshot" class="project-image"/>
      <div class="project-info title_only">
        <button class="close-btn">✖</button>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <a href="${project.link}" class="${project.linkClass}" target="_blank">${linkText}</a>
      </div>
    </div>
  `;}).join('');

  // Add hover effect for dynamically created cards
  const cards = container.querySelectorAll('.project-card');
  cards.forEach(card => {
    const info = card.querySelector('.project-info');
    const closeBtn = card.querySelector('.close-btn');

    card.addEventListener('mouseenter', () => {
      info.classList.remove('title_only');
    });
    card.addEventListener('mouseleave', () => {
      info.classList.add('title_only');
    });

    closeBtn.addEventListener('click', (event) => {
      event.stopPropagation(); 
      info.classList.add('title_only');
    });
  });
}

// Fetch projects from JSON file and render
fetch('projects.json')
  .then(response => response.json())
  .then(data => renderProjects(data))
  .catch(error => console.error('Error loading projects:', error));