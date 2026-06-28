# Umar Hayat — Portfolio

Professional portfolio website built with **Vue 3**, **Vite**, and **Tailwind CSS v4**.

## Features

- Modern dark theme with glassmorphism and gradient accents
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation with active section highlighting
- Scroll-reveal animations
- Sections: Hero, About, Skills, Experience, Projects, Contact
- Contact form (opens email client)
- Resume download (PDF included)

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

## Getting Started

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

The static site will be in the `dist/` folder — deploy to Vercel, Netlify, GitHub Pages, or any static host.

## Customize

- **Content**: Edit `src/data/portfolio.js` (skills, experience, projects, contact info)
- **Social links**: Update `personal.social` in the same file
- **Styling**: Modify `src/style.css` and Tailwind classes in components
- **Resume**: Replace `public/umar_hayat_software_engineer_resume.pdf`

## Project Structure

```
portfolio/
├── public/              # Static assets & resume PDF
├── src/
│   ├── components/      # Vue section components
│   ├── composables/     # Reusable logic (scroll reveal)
│   ├── data/            # Portfolio content
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
└── vite.config.js
```
