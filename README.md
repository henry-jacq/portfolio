# Personal Portfolio

My personal portfolio website built with React and Vite. Features smooth animations, a dark theme, and a clean design to showcase my work, skills, and experience.

## ✨ Features

- 🎨 Modern dark theme with gradient backgrounds
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 Smooth animations powered by Framer Motion
- 🚀 Fast development with Vite
- 🎯 SEO-friendly structure
- 📊 Interactive timeline for experience and education
- 💼 Project showcase with cards
- 📧 Contact form section
- 🔗 Social media integration

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Lucide React** - Additional icons

## 📋 Prerequisites

- **Node.js** (version 18 or higher)
- **npm** (or yarn/pnpm)

## 🚀 Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

Or if you prefer using yarn or pnpm:
```bash
yarn install
# or
pnpm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory and add the required environment variables:

```env
VITE_NAME=Your Name
VITE_ROLE=Your Role
VITE_EMAIL=your.email@example.com
VITE_LOCATION=Your Location
VITE_GITHUB=https://github.com/yourusername
VITE_LINKEDIN=https://linkedin.com/in/yourusername
VITE_TWITTER=https://twitter.com/yourusername
VITE_UPWORK=https://www.upwork.com/freelancers/yourprofile
```

### 3. Run the Development Server

```bash
npm run dev
```

The portfolio will be available at `http://localhost:5173` (or the port shown in your terminal).

Open your browser and navigate to the URL to see your portfolio!

## 📜 Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the project for production (outputs to `dist/` folder)
- **`npm run preview`** - Preview the production build locally

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable React components
│   │   ├── ProjectCard.jsx
│   │   ├── TimelineDot.jsx
│   │   ├── TimelineItem.jsx
│   │   └── TimelineLine.jsx
│   ├── config/         # Configuration files
│   │   └── profile.js  # Profile data (uses env variables)
│   ├── data/           # Data files
│   │   ├── projects.js # Project information
│   │   └── skills.js   # Skills data
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── .env                # Environment variables (create this)
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🎨 Customization Notes

The color scheme is defined in `src/App.jsx` using Tailwind classes. Sections are defined in the navigation array and as separate `<Section>` components. Animation variants are defined using Framer Motion.

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

This will create a `dist/` folder with all the optimized files ready for deployment.

To preview the production build:

```bash
npm run preview
```

## 🚢 Deployment

The portfolio can be deployed to platforms like Vercel, Netlify, or GitHub Pages. Make sure to add your environment variables to your hosting platform's settings before deploying.
