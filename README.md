# DevOps Portfolio Website

A minimal, terminal-themed portfolio website designed specifically for DevOps engineers and Cloud architects. Features a clean, dark interface with terminal-like aesthetics and smooth animations.

![Portfolio Preview](preview.png)

## 🚀 Features

- Terminal-inspired UI/UX
- Responsive design
- Sections for About, Experience, and Projects
- Downloadable resume functionality
- Social media links
- Docker containerization
- Easy to customize and deploy

## 🛠️ Tech Stack

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript
- Docker & Docker Compose
- Nginx (for serving static files)

## 📁 Project Structure 

```
portfolio/
├── index.html
├── js/
│   └── main.js
├── css/
│   └── style.css   
```

## 🚀 Quick Start

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```  

2. Open `index.html` in your browser:
   - Using Python's built-in server:
```bash
     python -m http.server 8000
```
   - Using VS Code's Live Server extension:
     - Install "Live Server" extension
     - Right-click on `index.html`
     - Select "Open with Live Server"

### Docker Deployment

1. Make sure Docker and Docker Compose are installed
2. Build and run the container:
   ```bash
   docker-compose up --build
   ```

3. Access the website at `http://localhost:8080`

To stop the container:
```bash
docker-compose down
```

## 🔧 Customization

### Personal Information
1. Edit `index.html`:
   - Update name, title, and bio in the intro section
   - Modify social media links
   - Update resume file path

2. Update Experience:
   - Modify the experience section in `index.html`
   - Add/remove experience items as needed

3. Projects:
   - Edit project data in `js/main.js`
   - Add new projects by following the existing format:
   ```javascript
   {
       title: 'Project Name',
       description: 'Project Description',
       technologies: ['Tech1', 'Tech2'],
       link: 'project-link'
   }


### Resume
1. Place your resume PDF in the `assets` folder
2. Update the resume link in `index.html`:
   ```html
   <a href="assets/resume.pdf" target="_blank" class="resume-link">Download Resume</a>
   ```  

