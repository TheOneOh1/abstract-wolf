// Project data
const projects = [
    {
        title: 'AWS Infrastructure Automation',
        description: 'Implemented infrastructure as code using Terraform for AWS cloud resources, reducing deployment time by 70%',
        technologies: ['AWS', 'Terraform', 'Python', 'Jenkins'],
        link: '#'
    },
    {
        title: 'Kubernetes Cluster Management',
        description: 'Designed and implemented automated Kubernetes cluster deployment and management using ArgoCD and GitOps principles',
        technologies: ['Kubernetes', 'ArgoCD', 'Docker', 'GitOps'],
        link: '#'
    },
    {
        title: 'CI/CD Pipeline Optimization',
        description: 'Developed and optimized CI/CD pipelines using Jenkins and GitHub Actions, improving deployment reliability by 85%',
        technologies: ['Jenkins', 'GitHub Actions', 'Docker', 'Shell Script'],
        link: '#'
    }
];

// Populate projects
function populateProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) {
        console.error('Projects grid element not found');
        return;
    }
    
    // Clear existing content
    projectsGrid.innerHTML = '';
    
    // Add projects
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Terminal typing effect
function initTypewriter() {
    const elements = document.querySelectorAll('.typewriter-text');
    elements.forEach(element => {
        element.style.display = 'none';
        setTimeout(() => {
            element.style.display = 'block';
        }, 500);
    });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateProjects();
    initTypewriter();
}); 